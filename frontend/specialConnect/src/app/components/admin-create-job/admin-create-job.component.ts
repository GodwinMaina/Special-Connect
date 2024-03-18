import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-admin-create-job',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './admin-create-job.component.html',
  styleUrl: './admin-create-job.component.css'
})
export class AdminCreateJobComponent {


  // productForm!:FormGroup;

  // constructor(public api:AuthServiceService ,private router:Router, private fb:FormBuilder) {



  // this.productForm = this.fb.group({
  //   name: ['', [Validators.required]],
  //   description:['', [Validators.required]],
  //   image:['', [Validators.required]],
  //   quantity: ['', [Validators.required]],
  //   price: ['', [Validators.required]],
  //   category: ['', [Validators.required]]
  // });
  // }


  // onSubmit(){
  //   if (this.productForm.valid) {
  //     console.log('product created successfull');

  //     const newProduct = this.productForm.value;

  //     this.api.createProduct(newProduct).subscribe(response=>{
  //       console.log(response);
  //       console.log('product sent to backend')

  //       setTimeout(() => {
  //         this.productForm.reset()
  //         this.router.navigate(['/admin'])
  //     }, 2000);


  //     })
  //   }
  // }

}
