import { Component } from '@angular/core';
import { AuthService } from '../../services/authServices/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { apply } from '../../interface/applicationInterface';

@Component({
  selector: 'app-specialist-jobs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './specialist-jobs.component.html',
  styleUrl: './specialist-jobs.component.css'
})
export class SpecialistJobsComponent {

  AllJobs:any[]=[]

  constructor(private api:AuthService, private router:Router){


  this.api.getJobs().subscribe(res => {
    this.AllJobs = res.message;
    console.log(this.AllJobs);
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

  this.api.createApplication(application).subscribe(
    response => {
      console.log(response.message);
    },
    error => {
      console.error('Error creating application:', error);
    }
  );
}



}
