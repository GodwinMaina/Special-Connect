import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { AuthService } from '../../services/authServices/auth.service';
import { specialistDetails } from '../../interface/specialistRegister';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { log } from 'console';
import { ProfilesService } from '../../services/profileServices/profiles.service';
@Component({
  selector: 'app-specialist-signup',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,ReactiveFormsModule,CommonModule],
  templateUrl: './specialist-signup.component.html',
  styleUrl: './specialist-signup.component.css'
})
export class SpecialistSignupComponent {

  spForm:FormGroup;

constructor(private router: Router,private fb:FormBuilder, private api:AuthService, private apiProfile:ProfilesService){



  this.spForm = this.fb.group({
    photo: ['', ],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    location: ['', Validators.required] ,
    phone: ['', Validators.required]
    })

}


saveDetails() {

    console.log('Form is valid. Saving details:', this.spForm.value);
    this.apiProfile.updateDetails(this.spForm.value);
    console.log('Details saved successfully.');
  }



profile(){
    this.router.navigate(['/specialist/createProfile'])

}



  previewFile(event: any): void {
    const preview = document.getElementById('previewImage') as HTMLImageElement;
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      preview.src = reader.result as string;
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = '';
    }
  }


  onsubmit(): void {
    this.router.navigate(['/specialist/createProfile']);
  }


}
