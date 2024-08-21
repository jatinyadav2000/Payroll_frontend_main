import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UpdateEmployeeComponent } from '../../update-employee/update-employee.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { ProfileComponent } from '../../../profile/profile.component';
import { ViewAllEmployeeComponent } from '../../view-all-employee/view-all-employee.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [HeaderComponent,
    RouterOutlet,
   SidenavComponent,
    RouterModule, 
    UpdateEmployeeComponent,
    ViewAllEmployeeComponent,
    ProfileComponent],
    
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
