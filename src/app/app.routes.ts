import { Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { AccountComponent } from './account/layout/account/account.component';
import { AttendanceComponent } from './account/attendance/attendance.component';
import { DashboardComponent } from './account/dashboad/dashboard.component';
import { EmployeeComponent } from './account/employee/employee.component';
import { SalaryComponent } from './account/salary/salary.component';
import { EmployeeGuard } from './guard/employee.guard';
import { AdminComponent } from './admin/layout/admin/admin.component';
import { CreateEmployeeComponent } from './admin/create-employee/create-employee.component';
import { HomeComponent } from './admin/home/home.component';
import { UpdateEmployeeComponent } from './admin/update-employee/update-employee.component';
import { AdminGuard } from './guard/admin.guard';
import { ProfileComponent } from './profile/profile.component';
import { ViewAllEmployeeComponent } from './admin/view-all-employee/view-all-employee.component';
import { LeaveComponent } from './account/leave/leave.component';

export const routes: Routes = [
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:LoginComponent
    },
    {
        path:'',
        component:AccountComponent, canActivate:[EmployeeGuard],
        children: [
            {
                path:'dashboard',
                component:DashboardComponent 
            },
            {
                path:'employee',
                component:EmployeeComponent
            },
            {
                path:'attendance',
                component:AttendanceComponent
            },
            
            {
                path:'leaves',
                component:LeaveComponent
            },
            {
                path:'salary',
                component:SalaryComponent
            },


        ]
    }
    ,
    {
        path:'',
        component:AdminComponent, canActivate:[AdminGuard],
        children:[
            {path:"home",component:HomeComponent},
            {path:'create', component: CreateEmployeeComponent},
            {path:'update', component: UpdateEmployeeComponent},
            {path:'viewAll', component: ViewAllEmployeeComponent},
            {path:'profile', component:ProfileComponent}
        ]
    },

    {
        path:'**',
        component:LoginComponent
    },
    

];
