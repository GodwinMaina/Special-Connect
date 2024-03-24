import { Component } from '@angular/core';
import { AuthService } from '../../services/authServices/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { apply } from '../../interface/applicationInterface';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-specialist-jobs',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './specialist-jobs.component.html',
  styleUrl: './specialist-jobs.component.css'
})
export class SpecialistJobsComponent {

  AllJobs:any[]=[]
  applications:any[]=[]
  error=''
  success:any []=[]


  constructor(private api:AuthService, private router:Router){


  this.api.getJobs().subscribe(res => {
    this.AllJobs = res.message;
    console.log(this.AllJobs);
  });
  let specialist_id = localStorage.getItem('specialistID') || '';
   ///Get specialist Applications
   this.api.getSpecialistApplications(specialist_id).subscribe(response=>{
    console.log(response.message);
    this.applications=response.message;
    console.log(response.error);
    console.log(this.applications);

    console.log('specialist Applications')
   }
   ,
    error => {
      console.error('Error creating application:', error);
    });

}


ApplyJob(job_id: string, client_id: string): void {
  let specialist_id = localStorage.getItem('specialistID') || '';

  console.log('job_id:', job_id);
  console.log('client_id:', client_id);
  console.log('specialist_id:', specialist_id);

  const application: apply = {
    job_id: job_id,
    specialist_id: specialist_id,
    client_id: client_id
  };

  const index = this.AllJobs.findIndex(job => job.job_id === job_id && job.client_id === client_id);
  if (index !== -1) {
    this.AllJobs[index].status = 'Applied';
  }

  //  const message = `You have successfully applied for the job: ${this.AllJobs[index].jobName}. Please wait for approval.`;
  //   window.alert(message);

  //create Apllications
  this.api.createApplication(application).subscribe(
    response => {
      console.log(response.message);
      console.log(response.error);
      this.error=response.error
      setTimeout(() => {
        this.error = '';
      }, 3000);

      this.success=response.message
    },
    error => {
      console.error('Error creating application:', error);
    }
  );

  }

}
