import { Component } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../user-service/user.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {

  managers = ['Manager1', 'Manager2', 'Manager3']; // Replace with actual manager data
  // userData = {
  //   employeeId: '',
  //   role: '',
  //   salary: '',
  //   manager: ''
  // };

  userData = new User();
  constructor(private userService: UserService, private http: HttpClient) {}

  onSubmit(form: NgForm): void {
    console.log(this.userData);
    if (form.valid) {
      this.userService.updateUser(this.userData).subscribe(
        (response) => {
          console.log('User updated successfully', response);
          // Optionally, reset the form or display a success message
          form.reset();
        },
        (error) => {
          console.error('Error updating user', error);
          // Optionally, display an error message
        }
      );
    }
  }

  // Method to fetch the current employee data based on ID (if needed)
  fetchEmployeeData(employeeId: number): void {
    this.userService.getUserById(employeeId).subscribe(
      (data) => {
        this.userData = data;
      },
      (error) => {
        console.error('Error fetching employee data', error);
      }
    );
  }

 
}


