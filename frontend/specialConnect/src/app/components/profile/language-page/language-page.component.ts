import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfilesService } from '../../../services/profileServices/profiles.service';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-page',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink,FooterComponent,NavbarComponent],
  templateUrl: './language-page.component.html',
  styleUrl: './language-page.component.css'
})
export class LanguagePageComponent {


  languageForm!: FormGroup;

  constructor(private fb:FormBuilder, public profile:ProfilesService,  private router: Router){

    this.languageForm = this.fb.group({
      language: ['', [Validators.required]],
    });

    const existingDetails = this.profile.getDetails();
    this.languageForm = this.fb.group({
      language: [existingDetails?.languages || '', [Validators.required]],
    });
  }

  saveLanguage() {
    if (this.languageForm.valid) {
      this.profile.updateDetails({
        languages: this.languageForm.value.language

      })
        this.router.navigate(['profile/skills']);
    }

  else {
    this.languageForm.markAllAsTouched();
  }
}


}
