import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfilesService } from '../../../services/profileServices/profiles.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../footer/footer.component';
import { NavbarComponent } from '../../navbar/navbar.component';


@Component({
  selector: 'app-education-page',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink,FooterComponent,NavbarComponent],
  templateUrl: './education-page.component.html',
  styleUrl: './education-page.component.css'
})
export class EducationPageComponent {

  educationForm!: FormGroup;

  constructor(private fb:FormBuilder, public profile:ProfilesService,  private router: Router){

    const existingDetails = this.profile.getDetails();
    this.educationForm = this.fb.group({
      education: [existingDetails?.education || '', [Validators.required]],
    });
  }

  saveEduc() {
    if (this.educationForm.valid) {
      this.profile.updateDetails({

        education: this.educationForm.value.education

      })
        this.router.navigate(['profile/language']);
    }

  else {
    this.educationForm.markAllAsTouched();
  }
}

}
