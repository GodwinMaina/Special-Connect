import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/authServices/auth.service';

import { ActivatedRoute, Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-profile',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.css'
})
export class UpdateProfileComponent {


  JobForm!: FormGroup;

  productData: any;
  profile_id!: string;


  constructor(public api:AuthService, private router:Router, private fb:FormBuilder, private route: ActivatedRoute){

  this.JobForm=this.fb.group({
    photo: ['', [Validators.required]],
    role:['', [Validators.required]],
    experience:['', [Validators.required]],
    education: ['', [Validators.required]],
    languages: ['', [Validators.required]],
    skills: ['', [Validators.required]],
    hourlyRate: ['', [Validators.required]],
    location: ['', [Validators.required]],
    description: ['', [Validators.required]]
  });



  this.route.params.subscribe(params => {
    this.profile_id = params['profile_id'];
    console.log('profile_id:', this.profile_id); 

    this.api.getOneProfileById(this.profile_id).subscribe(res => {
      this.productData = res.message[0];
      console.log('Product Data:', this.productData);

      this.JobForm.patchValue({
        photo: this.productData.photo,
        role: this.productData.role,
        experience: this.productData.experience,
        education: this.productData.education,
        location: this.productData.location,
        description: this.productData.description,
        languages: this.productData.languages,
        skills: this.productData.skills,
        hourlyRate: this.productData.hourlyRate
      });
    });
  });
}

  updateProfile(profile_id: string): void {
    const newJOB = this.JobForm.value;
    this.api.updateProfile(profile_id,newJOB ).subscribe(
      response=>{
        console.log(response.message);
      },
       error => {
        console.error('Error updating profile:', error);
      }
    )    
    setTimeout(() => {
      this.JobForm.reset()
      this.router.navigate(['/dashboard/specialist/'])
  }, 2000);
  }







}
