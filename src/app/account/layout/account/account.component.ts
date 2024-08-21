import { Component } from '@angular/core';

import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { DashboardComponent } from '../../dashboad/dashboard.component';
import { AttendanceComponent } from '../../attendance/attendance.component';
import { EmployeeComponent } from '../../employee/employee.component';
import { LeaveComponent } from '../../leave/leave.component';
import { SalaryComponent } from '../../salary/salary.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { ProfileComponent } from '../../../profile/profile.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [HeaderComponent,RouterOutlet,DashboardComponent,AttendanceComponent,EmployeeComponent,
    LeaveComponent,
    SalaryComponent,RouterModule,SidenavComponent,ProfileComponent

  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

}
