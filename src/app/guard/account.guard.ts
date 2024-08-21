import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { ServiceService } from '../login/service/service.service';

@Injectable({
  providedIn: 'root'
})
export class AccountantGuard implements CanActivate {

  constructor(private authService: ServiceService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAccountant()) {
      return true;
    } else {
      this.router.navigate(['/unauthorized']); // Redirect to unauthorized page or login page
      return false;
    }
  }
}
