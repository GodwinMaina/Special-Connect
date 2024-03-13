import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-signup',
  standalone: true,
  imports: [NavbarComponent,FooterComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './client-signup.component.html',
  styleUrl: './client-signup.component.css'
})
export class ClientSignupComponent {


  registerForm!: FormGroup;
  successMessage: string = '';
  showSuccessMessage:boolean = false;

  constructor(private fb:FormBuilder, private router: Router){


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
        phone: this.registerForm.value.phone,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password
      };

      // this.api.registerUser(userData).subscribe(response => {
      //   console.log(response);
      // });


      this.successMessage = 'Signup successful';
      this.showSuccessMessage = true;
      this.registerForm.reset();

        setTimeout(() => {
            this.showSuccessMessage = false;
            this.router.navigate(['auth/login']);
        }, 2000);

  }
   else {
    this.registerForm.markAllAsTouched();
  }
}

login(){
  this.router.navigate(['auth/login'])
}

}
