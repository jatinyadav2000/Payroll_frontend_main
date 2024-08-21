import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-salary',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './salary.component.html',
  styleUrl: './salary.component.css'
})
export class SalaryComponent implements OnInit {
  salaryObj: any = {
    "salaryId": 0,
  "employeeId": 0,
  "salaryDate": "",
  "totalAdvance": 0,
  "presentDays": 0,
  "salaryAmount": 0
  }

  salaryArray: any [] = [];
  employeeArray : any [] = []
  totalLeaves : number = 0;
  constructor(private empSrv : EmployeeService, private http: HttpClient){}

  ngOnInit(): void {
    this.getAllSalary()
    this.loadAllEmp()
  }

  loadAllEmp(){
    this.empSrv.getAllEmployee().subscribe((res:any)=>{
      this.employeeArray = res.data

    })

  }
  getAllSalary(){
    this.http.get("https://onlinetestapi.gerasim.in/api/TeamSync/GetAllSalary").subscribe((res:any)=>{
      this.salaryArray = res.data
    })
  }
 saveSalary(){
  this.http.post("https://onlinetestapi.gerasim.in/api/TeamSync/AddSalary",this.salaryObj).subscribe((res:any)=>{
   
    if(res.result){
      this.getAllSalary()
      alert(res.message)
     
    }else{
      alert(res.message)
    }
  })
 }
 onReset(){}

 getEmpData(){
  this.getAllLeaves()
 }

 getAllLeaves(){
  this.http.get("https://onlinetestapi.gerasim.in/api/TeamSync/GetAllLeaves").subscribe((res:any)=>{
    this.totalLeaves = res.data.filter((m:any)=>m.employeeId == this.salaryObj.employeeId).length
    this.salaryObj.presentDays = 30 - this.totalLeaves
  })
 }
 calculateSalary(){
  const empData = this.employeeArray.find(m=>m.empId == this.salaryObj.employeeId)
  const perDaySalary = empData.salary / 30
  this.salaryObj.salaryAmount = this.salaryObj.presentDays *perDaySalary
 }
}
