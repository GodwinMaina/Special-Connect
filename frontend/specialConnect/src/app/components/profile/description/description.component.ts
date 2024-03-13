import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfilesService } from '../../../services/profileServices/profiles.service';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink,FooterComponent,NavbarComponent],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {


  descForm!: FormGroup;

  constructor(private fb:FormBuilder, public profile:ProfilesService,  private router: Router){

    const existingDetails = this.profile.getDetails();
    this.descForm = this.fb.group({
      description: [existingDetails?.description || '', [Validators.required]],
    });
  }

  saveDesc() {
    if (this.descForm.valid) {
      this.profile.updateDetails({
        description: this.descForm.value.description

      })
        this.router.navigate(['profile/hourlyRate']);
    }

  else {
    this.descForm.markAllAsTouched();
  }
}


}
