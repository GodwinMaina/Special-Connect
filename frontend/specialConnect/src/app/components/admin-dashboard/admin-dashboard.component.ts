import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/authServices/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})

export class AdminDashboardComponent {

  emailAdmin:string=''
  myJobs:any[] = [];
  jobData=''

constructor(private api:AuthService, private router:Router) {

  this.emailAdmin= this.api.getadminEmails() || '';

  this.api.getJobs().subscribe(res => {
    console.log(res.message);
    console.log('admin jobs');
    this.myJobs = res.message;
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

    deleteJob(job_id: string): void {
      this.api.deleteJob(job_id).subscribe(
        response => {
          console.log(response);
          this.api.getJobs().subscribe( response=> {
            this.myJobs=response.message
            console.log(this.myJobs)
          })
        },

        error => {
          console.error('Error deleting Job:', error);
        }
      );
    }




    updateJob(job_id: string): void {
      this.router.navigate(['/dashboard/admin/updateJob', job_id]);
  }


  }