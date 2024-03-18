import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';


import { FormBuilder,ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/authServices/auth.service';
import { Token } from '@angular/compiler';
import { log } from 'console';
// import { AuthServiceService } from '../../services/auth-service.service';
// import { UserIDService } from '../../services/user-id.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
  userNotFound!:string
  pwdError!:string

  successMessage: string = '';
  error: string = '';
  showSuccessMessage:boolean = false;

  constructor(private fb:FormBuilder, private router:Router,private api:AuthService){

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]

    });
  }


    onSubmit() {
      if (this.loginForm.valid) {
        console.log('Form submitted successfully');

        this.api.loginUser(
          this.loginForm.value.email,
          this.loginForm.value.password).subscribe(

          (res:any) => {
            console.log(res);
            console.log(res.error);
            console.log(res.message);

            if(res.error){
              console.log(res);
              this.userNotFound=res.error;

              setTimeout(() => {
                this.loginForm.reset();
                this.userNotFound = '';
              }, 3000);

            }

            else {

              this.showSuccessMessage = true;
              this.successMessage = res.message;

            console.log('happy');

            const type= res.UserType
            const fname= res.firstname
             res.photo
             let isProfiled = res.isProfiled

             if (res.email='godwin@gmail.com'){
              localStorage.setItem('adminEmail', res.email='godwin@gmail.com')
             }

            const email= res.email

            const token = res.token
             res.client_id
             res.specialist_id
             const admin = res.isAdmin
             console.log(admin);

             res.phone
            // const isAdmin = res.isAdmin;

            if (type === "Specialist") {
              this.router.navigate(['/dashboard/specialist']);
            }

            else if (type === "Client" && !admin) {
              this.router.navigate(['/dashboard/client']);

            } else if (type === "Client" && admin) {
              this.router.navigate(['/dashboard/admin']);

              // let adminEmails = localStorage.getItem('adminEmail')
              // console.log(adminEmails);


            } else {
              this.router.navigate(['/NotFound']);
            }

            }

            this.loginForm.reset();
          },

          (error) => {
            console.error('Error:', error);
          }
        );


      } else {
        console.log('Form has errors');
      }
    }
  }





// '/dashboard/admin'
// '/dashboard/client'
// '/dashboard/specialist'
