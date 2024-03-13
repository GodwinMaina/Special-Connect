import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-create-profile',
  standalone: true,
  imports: [FooterComponent,NavbarComponent],
  templateUrl: './create-profile.component.html',
  styleUrl: './create-profile.component.css'
})
export class CreateProfileComponent {
  constructor(private router: Router) {}
  createProfile(): void {
    // Navigate to the page where the user can create their profile
    this.router.navigate(['/profile/role']);
  }
}
