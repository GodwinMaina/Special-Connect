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
  

constructor(private api:AuthService, private router:Router, private fb:FormBuilder) {

  this.specialistEmail = localStorage.getItem('EMAIL') || '';

  let specialist_id= localStorage.getItem('specialistID') || '';

  this.api.getOneSpecialistProfile(specialist_id).subscribe(res => {
    console.log(res.message);
    this.profileData= res.message;
  })
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
    localStorage.removeItem('specialistID');
    this.router.navigate(['/auth/login']);

  }

  updateProfile(profile_id: string) {
    this.router.navigate(['/update/profile', profile_id]);

  }
}
