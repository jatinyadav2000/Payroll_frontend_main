import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private isLoggedIn = false;
  private role: string | null = null;
  private username: string | null = null;
  
  // private apiUrl = 'https://your-backend-api-url.com/login'; 

  constructor(private router: Router, private http: HttpClient) { }

  // login(username: string, password: string): Observable<User> {
  //   return this.http.post<User>(this.apiUrl, { username, password }).pipe(
  //     tap(user => {
  //       // Store user details in local storage or a state management solution
  //       localStorage.setItem('username', JSON.stringify(user));
  //     }),
  //     catchError(error => {
  //       console.error('Login error', error);
  //       return of(null);
  //     })
  //   );
  // }

  login(username: string, password: string): boolean {
    // Mock authentication logic (replace with real authentication)
    if (username === 'admin' && password === 'admin') {
      this.isLoggedIn = true;
      this.role = 'admin';
      this.username = username;
      localStorage.setItem('role', this.role);
      localStorage.setItem('username', this.username);
      return true;
    } else if (username === 'employee' && password === 'employee') {
      this.isLoggedIn = true;
      this.role = 'employee';
      this.username = username;
      localStorage.setItem('role', this.role);
      localStorage.setItem('username', this.username);
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.role = null;
    this.username = null;
    localStorage.removeItem('role');
    localStorage.removeItem('username');
    
    this.router.navigate(['/login']);
  }

  isAdmin(): boolean {
    return this.role === 'admin';
  }

  isEmployee(): boolean {
    return this.role === 'employee';
  }
  isAccountant(): boolean {
    return this.role === 'accountant';
  }

  isManager(): boolean {
    return this.role === 'manager';
  }

  // getUsername(): string | null {
  //   return this.username;
  // }
  getUsername(): Observable<{ username: string }> {
    return this.http.get<{ username: string }>(`https://your-backend-api-url.com/current-user`);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}

