import { Component } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,  FormGroup, Validators,FormBuilder } from '@angular/forms';
import { FooterComponent } from '../../footer/footer.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { ProfilesService } from '../../../services/profileServices/profiles.service';



@Component({
  selector: 'app-title-page',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink,FooterComponent,NavbarComponent],
  templateUrl: './title-page.component.html',
  styleUrl: './title-page.component.css'
})
export class TitlePageComponent {

  titleForm!: FormGroup;

  constructor(private fb:FormBuilder, public profile:ProfilesService,  private router: Router){

    this.titleForm = this.fb.group({
      role: ['', [Validators.required]],
    });
  }

  saveRole() {
    if (this.titleForm.valid) {
      this.profile.updateDetails({
        role: this.titleForm.value.role

      })
        this.router.navigate(['profile/experience']);
    }

  else {
    this.titleForm.markAllAsTouched();
  }
}

}
