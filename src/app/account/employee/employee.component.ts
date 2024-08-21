import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  employeeArray: any[] = [];

  employeeObj: any 
  

  constructor( private empSrv: EmployeeService){
    this.resetObj();
  }

  resetObj(){
    this.employeeObj = {
      "empId": 0,
      "empName": "",
      "empContactNo": "",
      "empAltContactNo": "",
      "empEmail": "",
      "addressLine1": "",
      "addressLine2": "",
      "pincode": "",
      "city": "",
      "state": "",
      "bankName": "",
      "iFSC": "",
      "accountNo": "",
      "bankBranch": "",
      "salary": 0
    }
    
  }

  ngOnInit(): void {

    this.loadAllEmployee();
   
  }

  loadAllEmployee(){
    this.empSrv.getAllEmployee().subscribe((res:any)=>{
      this.employeeArray = res.data;

    })
  }
  // onSave(){
  
  //   this.empSrv.createEmployee(this.employeeObj).subscribe((res:any)=>{
  //     if(res.result){
  //       this.loadAllEmployee()
  //       alert(res.message)
  //       this.resetObj()
  //     }else{
  //       alert(res.message)
  //     }
     
      
  //   })
  // }
  onEdit(id:number){
    this.empSrv.getEmployeeById(id).subscribe((res:any)=>{
      this.employeeObj = res.data
    })
  }

  onUpdate(){
  
    this.empSrv.updateEmployee(this.employeeObj).subscribe((res:any)=>{
      if(res.result){
        this.loadAllEmployee()
        alert(res.message)
        this.resetObj()
      }else{
        alert(res.message)
      }
     
      
    })
  }
  onDelete(empId:number){
    this.empSrv.deleteEmployeeById(empId).subscribe((res:any)=>{
      if(res.result){
        this.loadAllEmployee()
        alert(res.message)
       
      }else{
        alert(res.message)
      }
     
      
    })
  }



}
