import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';


@Component({
  selector: 'app-dashboad',
  standalone: true,
  imports: [],
  templateUrl: './dashboad.component.html',
  styleUrl: './dashboad.component.css'
})
export class DashboardComponent implements OnInit {

  dashboardData: any = {
    totalEmployee: 0,
    totalAdvanceRecordCount: 0,
    totalLeavesCount: 0,
    totalSalaryCount: 0,
    todaysAdvanceTotalAmount: null,
    todaysLeaves: 0
  };

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.dashboardService.getDashboardData().subscribe(
      data => {
        this.dashboardData = data.data[0]; // Adjust according to your API response structure
      },
      error => {
        console.error('Error fetching dashboard data', error);
      }
    );
  }
}
