import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../../../login/service/service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule,MatToolbarModule, RouterOutlet,FormsModule,RouterModule],
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



