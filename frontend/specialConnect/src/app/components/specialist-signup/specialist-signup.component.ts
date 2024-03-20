import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/authServices/auth.service';
import { specialistDetails } from '../../interface/specialistRegister';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

// import { ProfilesService } from '../../services/profileServices/profiles.service';
@Component({
  selector: 'app-specialist-signup',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,ReactiveFormsModule,CommonModule, RouterLink],
  templateUrl: './specialist-signup.component.html',
  styleUrl: './specialist-signup.component.css'
})export class SpecialistSignupComponent {

  specialistForm: FormGroup;
  successMessage: string = '';
  error: string = '';
  showSuccessMessage: boolean = false;

  constructor(private router: Router, private fb: FormBuilder, private api: AuthService) {
    this.specialistForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    console.log(this.specialistForm.value);
    this.api.registerSpeciaList(this.specialistForm.value).subscribe(response => {
      console.log(response.error);
      console.log("2");
      console.log(response);
      console.log("3");

      console.log(response.message);
      console.log(response.id);

      localStorage.setItem('specialist_id', response.id);
      
      if (response.error) {
        this.error = response.error;

        setTimeout(() => {
          this.specialistForm.reset();
          this.error = '';
        }, 3000);

      }

      else {

        localStorage.setItem('specialist_id', response.id);
        this.successMessage = response.message;
        this.showSuccessMessage = true;

        setTimeout(() => {
          this.showSuccessMessage = false;
          this.specialistForm.reset();
          this.router.navigate(['/profile']);
        }, 2000);
      }
    });

    if (!this.specialistForm.valid) {
      this.specialistForm.markAllAsTouched();
    }
  }
}









// saveDetails() {

//   console.log('Form is valid. Saving details:', this.spForm.value);
//   this.apiProfile.updateDetails(this.specialistForm.value);
//   console.log('Details saved successfully.');
// }



// profile(){
//   this.router.navigate(['/specialist/createProfile'])

// }



// previewFile(event: any): void {
//   const preview = document.getElementById('previewImage') as HTMLImageElement;
//   const file = event.target.files[0];
//   const reader = new FileReader();

//   reader.onloadend = () => {
//     preview.src = reader.result as string;
//   };

//   if (file) {
//     reader.readAsDataURL(file);
//   } else {
//     preview.src = '';
//   }
// }


// onsubmit(): void {
//   this.router.navigate(['/specialist/createProfile']);
// }










