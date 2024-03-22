import { Component } from '@angular/core';
import { AuthService } from '../../services/authServices/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-create-job',
  standalone: true,
  imports: [NavbarComponent,FooterComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './client-create-job.component.html',
  styleUrl: './client-create-job.component.css'
})
export class ClientCreateJobComponent {



  JobForm!:FormGroup;

  constructor(public api:AuthService,private router:Router, private fb:FormBuilder) {

  this.JobForm = this.fb.group({
    jobName: ['', [Validators.required]],
    category:['', [Validators.required]],
    budget:['', [Validators.required]],
    duration: ['', [Validators.required]],
    description: ['', [Validators.required]]

  });
  }

  onSubmit(){
    if (this.JobForm.valid) {
      console.log('Job fronted valid ');

      const newJOB = this.JobForm.value;

      let client_id = localStorage.getItem('clientID') || '';

      this.api.postJobs(client_id,newJOB).subscribe(response=>{
        console.log(response.message);
         console.log(response.error);
        console.log('JOB sent to backend')

        setTimeout(() => {
          this.JobForm.reset()
          this.router.navigate(['/dashboard/client'])
      }, 2000);

      })
    }
  }


}
