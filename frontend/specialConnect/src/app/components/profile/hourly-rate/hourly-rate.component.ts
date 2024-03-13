import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfilesService } from '../../../services/profileServices/profiles.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../footer/footer.component';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-hourly-rate',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink,FooterComponent,NavbarComponent],
  templateUrl: './hourly-rate.component.html',
  styleUrl: './hourly-rate.component.css'
})
export class HourlyRateComponent {

  hourlyForm!: FormGroup;

  constructor(private fb:FormBuilder, public profile:ProfilesService,  private router: Router) {

    //check existing details and then update with this new value
    const existingDetails = this.profile.getDetails();
    this.hourlyForm = this.fb.group({
      hourlyRate: [existingDetails?.hourlyRate || '', [Validators.required]],
    });

  }

  saveHourly() {
    if (this.hourlyForm.valid) {
      this.profile.updateDetails({
        hourlyRate: this.hourlyForm.value.hourlyRate
      })
        this.router.navigate(['profile/']);
    }

  else {
    this.hourlyForm.markAllAsTouched();
  }
}


}
