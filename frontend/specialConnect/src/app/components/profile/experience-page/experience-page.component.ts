import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProfilesService } from '../../../services/profileServices/profiles.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../footer/footer.component';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-experience-page',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink,FooterComponent,NavbarComponent],
  templateUrl: './experience-page.component.html',
  styleUrl: './experience-page.component.css'
})
export class ExperiencePageComponent {

  expForm: FormGroup;

  constructor(private fb: FormBuilder, public profile: ProfilesService, private router: Router) {

    const existingDetails = this.profile.getDetails();
    this.expForm = this.fb.group({
      experience: [existingDetails?.experience || '', [Validators.required]],
    });
  }

  saveExp() {
    if (this.expForm.valid) {

      this.profile.updateDetails({
        experience: this.expForm.value.experience
      });
      this.router.navigate(['profile/education']);
    } else {
      // Handle form validation errors
      this.expForm.markAllAsTouched();
    }
  }
}
