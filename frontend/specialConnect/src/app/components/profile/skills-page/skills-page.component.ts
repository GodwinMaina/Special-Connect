import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfilesService } from '../../../services/profileServices/profiles.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../footer/footer.component';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-skills-page',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink,FooterComponent,NavbarComponent],
  templateUrl: './skills-page.component.html',
  styleUrl: './skills-page.component.css'
})
export class SkillsPageComponent {


  skillForm!: FormGroup;

  constructor(private fb:FormBuilder, public profile:ProfilesService,  private router: Router){

    const existingDetails = this.profile.getDetails();
    this.skillForm = this.fb.group({
      skills: [existingDetails?.skills || '', [Validators.required]],
    });
  }

  saveSkills() {
    if (this.skillForm.valid) {
      this.profile.updateDetails({
  
        skills: this.skillForm.value.skills

      })
        this.router.navigate(['profile/description']);
    }

  else {
    this.skillForm.markAllAsTouched();
  }
}


}
