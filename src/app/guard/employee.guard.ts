// admin.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { ServiceService } from '../login/service/service.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeGuard implements CanActivate {
    constructor(private authService: ServiceService, private router: Router) {}
  
    canActivate(): boolean {
      if (this.authService.isEmployee()) {
        return true;
      }
      this.router.navigate(['/unauthorized']);
      return false;
    }
  }
