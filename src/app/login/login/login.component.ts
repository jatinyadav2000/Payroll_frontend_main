import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: string | null = null;

  constructor(private service : ServiceService, private router: Router) {}

  // onLogin(): void {
  //   if (this.service.login(this.username, this.password)) {
  //     this.router.navigate(['/dashboard']); // Redirect to dashboard on successful login
  //   } else {
  //     this.loginError = true; // Show error message on failed login
  //   }
  // }
  onLogin() {
    if (this.service.login(this.username, this.password)) {
      const role = localStorage.getItem('role');
      if (role === 'admin') {
        this.router.navigate(['/home']);
      } else if (role === 'employee') {
        this.router.navigate(['/dashboard']);
      }
    } else {
      this.loginError = 'Invalid credentials';
    }
  }

}
