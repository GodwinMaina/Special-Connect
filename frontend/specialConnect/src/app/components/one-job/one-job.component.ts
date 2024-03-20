import { Component} from '@angular/core';
import { AuthService } from '../../services/authServices/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { apply } from '../../interface/applicationInterface';

@Component({
  selector: 'app-one-job',
  templateUrl: './one-job.component.html',
  standalone:true,
  imports:[CommonModule],
  styleUrl: './one-job.component.css'
})
export class OneJobComponent {
  AllJobs: any[] = [];
  job_id!: string;

  constructor(private api: AuthService, private router: Router, private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      this.job_id = params['job_id'];
      console.log('job_id:', this.job_id);

    });

      this.api.getOneJob(this.job_id).subscribe(res => {
        this.AllJobs = res.message;
        console.log('One Job Data:', this.AllJobs);
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
