import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/authServices/auth.service';

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
  applications:any[] = [];

  clientEmail=''


  client_id = localStorage.getItem('clientID') || '';






constructor(private router:Router, private api:AuthService) {

  this.clientEmail = localStorage.getItem('EMAIL') || '';
  console.log(this.client_id);
this.getClientsJobs();

}


getClientsJobs(){
  this.api.getJobsByClient(this.client_id).subscribe((res)=>{
    if(res.message){
      this.myJobs = res.message
    }
  })

}


getJobApplications(job_id: string){
  this.api.getJobApplications(job_id).subscribe((res)=>{
    if(res.message){
      this.applications = res.message
      console.log(this.applications);

    }
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
    this.router.navigate(['/auth/login']);

  }


  deleteJob(job_id: string): void {
    this.api.deleteJob(job_id).subscribe(
      response => {
        console.log(response);
        // this.api.getJobs().subscribe( response=> {
        //   this.myJobs=response.message
        //   console.log(this.myJobs)
        // })
      },
      error => {
        console.error('Error deleting Job:', error);
      }
    );

    this.getClientsJobs()
  }




  updateJob(job_id: string): void {
    this.router.navigate(['/dashboard/client/updateJob/', job_id]);
}






}
