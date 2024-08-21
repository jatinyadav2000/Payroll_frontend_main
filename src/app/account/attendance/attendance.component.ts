import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { IAttendance, attendance } from '../interface/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.css'
})
export class AttendanceComponent implements OnInit {
  attendanceArray :IAttendance[]=[];
  attendanceObj : attendance = new attendance()
  employeeArray: any[]=[]

  constructor(private empSrv : EmployeeService, private http :HttpClient){}
 ngOnInit(): void {
   
   this.loadAllAttendance()
   this.getEmployee()
 }

loadAllAttendance(){
  this.http.get("https://onlinetestapi.gerasim.in/api/TeamSync/GetAllAttendance").subscribe((res:any)=>{
    this.attendanceArray = res.data
  })
}
  getEmployee(){
    this.empSrv.getAllEmployee().subscribe((result:any)=>{
      this.employeeArray = result.data
    })
  }

  onEdit(id:number){

  }
  onDelete(id:number){

  }
  onSave(){
    this.http.post("https://onlinetestapi.gerasim.in/api/TeamSync/AddAttendance",this.attendanceObj).subscribe((res:any)=>{
      if(res.result){
        this.loadAllAttendance()
        this.attendanceObj = new attendance()
      }else{

      }
      alert(res.message)
    })
  }
  
 onUpdate(){} 
 onReset(){}

}
