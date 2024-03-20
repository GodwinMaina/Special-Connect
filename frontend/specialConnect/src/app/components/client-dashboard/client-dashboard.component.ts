import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-client-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './client-dashboard.component.html',
  styleUrl: './client-dashboard.component.css'
})
export class ClientDashboardComponent {




  emailAdmin:string=''
  myJobs:any[] = [];
  jobData=''

constructor() {}


  showModalMenuAdmin() {
    let modalBg = document.querySelector('.modal-bg');

    modalBg?.classList.add('modal-bg-active');
  }

  closeModalMenuAdmin() {
    let modalBg = document.querySelector('.modal-bg');

    modalBg?.classList.remove('modal-bg-active');
  }


  // updateJobs(jobs_id:string ) {
  //   this.api.updateJob(jobs_id,this.jobData).subscribe(res => {
  //     console.log(res.message);
  //     // this.myJobs = res.message;
  //   });
  // }



}
