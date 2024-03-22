import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/authServices/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-specialist-dashboard',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './specialist-dashboard.component.html',
  styleUrl: './specialist-dashboard.component.css'
})
export class SpecialistDashboardComponent {


 specialistEmail:string=''
  myJobs:any[] = [];
  profileData:any = [];
  editProfileForm:FormGroup

constructor(private api:AuthService, private router:Router, private fb:FormBuilder) {

  this.specialistEmail = localStorage.getItem('EMAIL') || '';

  let specialist_id= localStorage.getItem('specialistID') || '';

  this.api.getOneSpecialistProfile(specialist_id).subscribe(res => {
    console.log(res.message);
    this.profileData= res.message;
  });


///update
  this.editProfileForm = this.fb.group({
    photo: ['', Validators.required],
    role: ['', Validators.required],
    experience: ['', Validators.required],
    education: ['', Validators.required],
    location: ['', Validators.required],
    languages: ['', Validators.required],
    skills: ['', Validators.required],
    description: ['', Validators.required],
    hourlyRate: ['', Validators.required]
  });
}






initEditProfileForm(): void {
  this.editProfileForm = this.fb.group({
    description: [this.profileData.description, Validators.required],
    location: [this.profileData.location, Validators.required],
    languages: [this.profileData.languages, Validators.required],
    experience: [this.profileData.experience, Validators.required],
    education: [this.profileData.education, Validators.required],
    hourlyRate: [this.profileData.hourlyRate, Validators.required]
  });
}

updateProfile(): void {
  if (this.editProfileForm?.valid) {
    const specialist_id = localStorage.getItem('specialistID') || '';
    const profile_id = this.profileData.profile_id;
    const updatedProfileData = this.editProfileForm.value;

    // Update the profile using the ProfileService
    this.api.updateProfile(profile_id, updatedProfileData).subscribe(
      (response) => {
        console.log(response.message); // Log success message
        // Optionally, perform any additional actions upon success
      },
      (error) => {
        console.error('Error updating profile:', error); // Log error message
        // Optionally, handle the error or provide user feedback
      }
    );
  }
}

// Method to reset the form to its initial state
resetForm(): void {
  this.editProfileForm?.reset();
}



editProfile(profile: any): void {
  // Set form values for editing
  this.editProfileForm?.patchValue({
    description: profile.description,
    location: profile.location,
    languages: profile.languages,
    experience: profile.experience,
    education: profile.education,
    hourlyRate: profile.hourlyRate
  });
}




  showModalMenuAdmin() {
    let modalBg = document.querySelector('.modal-bg');

    modalBg?.classList.add('modal-bg-active');
  }

  closeModalMenuAdmin() {
    let modalBg = document.querySelector('.modal-bg');

    modalBg?.classList.remove('modal-bg-active');
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);

  }




}
