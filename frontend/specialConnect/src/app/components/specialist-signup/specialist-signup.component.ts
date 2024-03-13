import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-specialist-signup',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './specialist-signup.component.html',
  styleUrl: './specialist-signup.component.css'
})
export class SpecialistSignupComponent {

constructor(private router: Router){ }
  previewFile(event: any): void {
    const preview = document.getElementById('previewImage') as HTMLImageElement;
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      preview.src = reader.result as string;
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = '';
    }
  }


  onsubmit(): void {
    this.router.navigate(['/specialist/createProfile']);
  }

}
