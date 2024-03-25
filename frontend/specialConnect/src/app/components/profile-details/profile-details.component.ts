import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/authServices/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-details',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,ReactiveFormsModule, CommonModule],
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.css'
})
export class ProfileDetailsComponent {
  profileForm:FormGroup;
  successMessage: string = '';
  error: string = '';
  showSuccessMessage:boolean = false;

  imgUrl: string | null = null;
  imageUpload:any[] = []

  constructor(private fb:FormBuilder, private api:AuthService, private router:Router,) {

    this.profileForm = this.fb.group({
      photo: ['', [Validators.required]],
      role: ['', [Validators.required]],
      experience: ['', [Validators.required]],
      education: ['',[ Validators.required]],
      location: ['', [Validators.required]],
      languages: ['', [Validators.required]],
      skills: ['',[ Validators.required]],
      description: ['', [Validators.required]],
      hourlyRate: ['', [Validators.required]]
    });

  }


  onSubmit() {

  if(this.profileForm.valid) {

    let specialist_id= localStorage.getItem('specialist_id') || '';
    this.profileForm.value
    console.log(this.profileForm.value)

    this.api.createProfile(this.profileForm.value,specialist_id ).subscribe(response => {

       console.log(response)
       console.log(response.error);
       console.log(response.message);

      if (response.error) {
        this.error = response.error;

        setTimeout(() => {
          // this.profileForm.reset();
          this.error = '';
        }, 3000);
      }

      else {
        this.showSuccessMessage = true;
        this.successMessage = response.message;

        setTimeout(() => {
          this.showSuccessMessage = false;
          this.profileForm.reset();
          localStorage.removeItem('specialist_id');
          this.router.navigate(['/auth/login']);
        }, 2000);

      }
      });

  }
  else {
    this.profileForm.markAllAsTouched();
  }

  }






async uploadImage(event: any){

  const target = event.target
  const files = target.files
  if(files){
      console.log(files)
      const formData = new FormData()
      formData.append("file", files[0])
      formData.append("upload_preset", "specialConnect")
      formData.append("cloud_name", "dza7h16qh")

        console.log(formData);

        await fetch('https://api.cloudinary.com/v1_1/dza7h16qh/image/upload', {
          method: "POST",
          body: formData
        }).then(
          (res:any) => {
            console.log(res);

            return res.json()
          },

        ).then(data=>{
          console.log("this is the URL",data.url);
          this.profileForm.get('photo')?.setValue(data.url)
          return data.url = this.imgUrl;

        }
        );

  }

}

















}

//

//specialConnect

//dza7h16qh
