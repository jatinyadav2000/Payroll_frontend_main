import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { User } from '../model/user.model';

 // Adjust the import path as needed

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/user'; // Replace with your API endpoint

  constructor(private http: HttpClient) {} //to send request

  // fethcing profile details
  getUserData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/profile`).pipe(
      catchError(error => {
        console.error('Error fetching user data', error);
        return of(null); // Return null or handle the error appropriately
      })
    );
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${user.employeeId}`, user);
  }

  getUserById(employeeId: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${employeeId}`);
  }
  getAllUser(): Observable<any[]> {
    const users = [
      { employeeId: 1, firstName: 'John Doe', designation: 'Software Engineer' },
      { employeeId: 2, firstName: 'John Doe', designation: 'Software Engineer' },
      { employeeId: 3, firstName: 'John Doe', designation: 'Software Engineer' },
      { employeeId: 4, firstName: 'John Doe', designation: 'Software Engineer' },
      { employeeId: 5, firstName: 'John Doe', designation: 'Software Engineer' },
      { employeeId: 6, firstName: 'John Doe', designation: 'Software Engineer' },
      // { id: 2, name: 'Jane Smith', position: 'Product Manager' },
      // { id: 3, name: 'Sam Johnson', position: 'UX Designer' },
      // { id: 4, name: 'Emily Davis', position: 'Data Scientist' }
    ];
    return of(users)
    // return this.http.get<any[]>(this.apiUrl);
  }
  deleteUserById(userId: number): Observable<User> {
   
    return this.http.delete<User>(`${this.apiUrl}/${userId}`);
  }
}
