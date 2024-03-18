import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/authServices/auth.service';

@Component({
  selector: 'app-client-signup',
  standalone: true,
  imports: [NavbarComponent,FooterComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './client-signup.component.html',
  styleUrl: './client-signup.component.css'
})
export class ClientSignupComponent {


  registerForm: FormGroup;
  successMessage: string = '';
  error: string = '';
  showSuccessMessage:boolean = false;

  constructor(private fb:FormBuilder, private router: Router, private api:AuthService) {


    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^[a-zA-Z0-9]+$')]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^[a-zA-Z0-9]+$')]]
                        }, { validator: this.passwordMatchValidator });

  }

  passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get('confirmPassword');

    if (passwordControl && confirmPasswordControl) {
      const password = passwordControl.value;
      const confirmPassword = confirmPasswordControl.value;

      if (password !== confirmPassword) {
        confirmPasswordControl.setErrors({ mismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }

  onSubmit() {
    if (this.registerForm.valid) {
      let userData = {
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        phone: this.registerForm.value.phone
      };

      this.api.registerClient(userData).subscribe(response => {
        console.log(response.error);
        console.log(response.message);

        if (response.error) {
          this.error = response.error;


          setTimeout(() => {
            this.registerForm.reset();
            this.error = '';
          }, 3000);

        }

        else {
          this.showSuccessMessage = true;
          this.successMessage = response.message;

          setTimeout(() => {
            this.showSuccessMessage = false;
            this.registerForm.reset();
            this.router.navigate(['/auth/login']);
          }, 2000);
        }
      });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

}
