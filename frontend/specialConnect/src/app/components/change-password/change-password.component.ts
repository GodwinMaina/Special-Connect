import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/authServices/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {

    // myUsers:any[]=[];
    passwordForm: FormGroup;
    message: string = '';

    constructor(private api: AuthService, private fb: FormBuilder , public router:Router) {
      this.passwordForm = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      });

      // this.api.getAllUsers().subscribe(response => {
      //   console.log(response);
      //   this.myUsers = response.message;
      //   console.log(this.myUsers);
      // });

  }

    reset(): void {

      let newPassword = this.passwordForm.value

      this.api.passwordReset(newPassword).subscribe(response=>{
      console.log(response.message);
      this.message = response.message

      setTimeout( () =>{

        this.passwordForm.reset()
        this.message = ''
        // this.router.navigate(['/auth/login'])

      },3000)

    })
  }




}
