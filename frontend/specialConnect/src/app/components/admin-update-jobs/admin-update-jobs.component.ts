import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/authServices/auth.service';

@Component({
  selector: 'app-admin-update-jobs',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CommonModule,ReactiveFormsModule],
  templateUrl: './admin-update-jobs.component.html',
  styleUrl: './admin-update-jobs.component.css'
})
export class AdminUpdateJobsComponent {

  JobForm!: FormGroup;

  productData: any;
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

    this.api.getOneJob(this.job_id).subscribe(data => {
      this.productData = data.message[0];
      console.log('Product Data:', this.productData);
      
      // Populate the form with the retrieved product data
      this.JobForm.patchValue({
        // product_id: this.productData.product_id,
        jobName: this.productData.jobName, 
        category: this.productData.category,
        budget: this.productData. budget,
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
