import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfilesService } from '../../../services/profileServices/profiles.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../footer/footer.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { AuthService } from '../../../services/authServices/auth.service';
import { userInfo } from 'os';
import { specialistRegInterface } from '../../../interface/specialistRegister';

@Component({
  selector: 'app-hourly-rate',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink,FooterComponent,NavbarComponent],
  templateUrl: './hourly-rate.component.html',
  styleUrl: './hourly-rate.component.css'
})
export class HourlyRateComponent {

  hourlyForm!: FormGroup;


  constructor(private fb:FormBuilder, public profile:ProfilesService,  private router: Router, private api:AuthService) {

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
        this.router.navigate(['/']);
    }

  else {
    this.hourlyForm.markAllAsTouched();
  }
}
onSubmit(): void {
  const detailsString: string | null = localStorage.getItem('specialistDetails');


}


}
