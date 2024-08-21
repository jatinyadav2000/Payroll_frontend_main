import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ServiceService } from '../../../login/service/service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  username: string | null = 'Guest';

  constructor(
    public authService:ServiceService,
     private router: Router) {}

     ngOnInit(): void {
      this.authService.getUsername().subscribe(
        (data) => {
          this.username = data.username;
        },
        (error) => {
          console.error('Error fetching username', error);
        }
      );
    }
    
  // logout(): void {
  //   this.authService.logout();
  //   this.router.navigate(['/login']);
  // }
  signOut() {
    this.authService.logout();
  }
}


