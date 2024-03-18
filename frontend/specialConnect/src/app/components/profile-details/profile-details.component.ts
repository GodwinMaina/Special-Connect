import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/authServices/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-details',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,ReactiveFormsModule, CommonModule],
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.css'
})
export class ProfileDetailsComponent {
  profileForm:FormGroup;
  successMessage: string = '';
  error: string = '';
  showSuccessMessage:boolean = false;

  constructor(private fb:FormBuilder, private api:AuthService, private router:Router,) {

    this.profileForm = this.fb.group({
      photo: ['', [Validators.required]],
      role: ['', [Validators.required]],
      experience: ['', [Validators.required]],
      education: ['',[ Validators.required]],
      location: ['', [Validators.required]],
      languages: ['', [Validators.required]],
      skills: ['',[ Validators.required]],
      description: ['', [Validators.required]],
      hourlyRate: ['', [Validators.required]]
    });

  }


  onSubmit() {
    // console.log(this.profileForm.value)

  if(this.profileForm.valid) {

    // const profileData:any={
    //   photo: this.profileForm.value.photo,
    //   role: this.profileForm.value.role,
    //   experience: this.profileForm.value.experience,
    //   education: this.profileForm.value.education,
    //   location: this.profileForm.value.location,
    //   languages: this.profileForm.value.languages,
    //   skills: this.profileForm.value.skills,
    //   description: this.profileForm.value.description,
    //   hourlyRate: this.profileForm.value.hourlyRate
    // }

    let specialist_id= localStorage.getItem('specialist_id') || '';
    this.profileForm.value
    console.log(this.profileForm.value)

    this.api.createProfile(this.profileForm.value,specialist_id ).subscribe(response => {
      console.log(this.profileForm.value.photo);
      
       console.log(response)
       console.log(response.error);
       console.log(response.message);

      if (response.error) {
        this.error = response.error;
        
        setTimeout(() => {
          // this.profileForm.reset();
          this.error = '';
        }, 3000);
      }

      else {
        this.showSuccessMessage = true;
        this.successMessage = response.message;

        setTimeout(() => {
          this.showSuccessMessage = false;
          this.profileForm.reset();
          localStorage.removeItem('specialist_id');
          this.router.navigate(['/auth/login']);
        }, 2000);

      }
      });

  }
  else {
    this.profileForm.markAllAsTouched();
  }

  }
}
