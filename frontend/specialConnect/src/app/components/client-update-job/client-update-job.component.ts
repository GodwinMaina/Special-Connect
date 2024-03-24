import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthService } from '../../services/authServices/auth.service';

import { ActivatedRoute, Router } from '@angular/router';
import { postJobInterface } from '../../interface/postJobs';

@Component({
  selector: 'app-client-update-job',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, FooterComponent, NavbarComponent],
  templateUrl: './client-update-job.component.html',
  styleUrl: './client-update-job.component.css'
})
export class ClientUpdateJobComponent {

  JobForm!: FormGroup;
  productData: postJobInterface = {} as postJobInterface;
  job_id!: string;




  constructor(public api:AuthService, private router:Router, private fb:FormBuilder, private route: ActivatedRoute){

    this.JobForm=this.fb.group({
      jobName: ['', [Validators.required]],
      category:['', [Validators.required]],
      budget:['', [Validators.required]],
      duration: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  
  
  
    this.route.params.subscribe(params => {
      this.job_id = params['job_id'];
      console.log('job_id:', this.job_id); 
  
      this.api.getOneJob(this.job_id).subscribe(res => {
        this.productData = res.message[0];
        console.log(this.productData);
        
        // Populate the form with the retrieved product data
        this.JobForm.patchValue({
          // product_id: this.productData.product_id,
          jobName: this.productData.jobName, 
          category: this.productData.category,
          budget: this.productData.budget,
          duration: this.productData.duration,
          description: this.productData.description
        });
      });
    });
  }
  
    updateJOBS(job_id: string): void {
      const newJOB = this.JobForm.value;
      this.api.updateJob(job_id,newJOB ).subscribe(
        response=>{
          console.log(response.message);
        },
         error => {
          console.error('Error updating product:', error);
        }
      )    
      setTimeout(() => {
        this.JobForm.reset()
        this.router.navigate(['/dashboard/client/'])
    }, 2000);
    }
  




}
