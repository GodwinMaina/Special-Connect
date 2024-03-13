
import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TitlePageComponent } from './components/profile/title-page/title-page.component';
import { ExperiencePageComponent } from './components/profile/experience-page/experience-page.component';
import { EducationPageComponent } from './components/profile/education-page/education-page.component';
import { LanguagePageComponent } from './components/profile/language-page/language-page.component';
import { SkillsPageComponent } from './components/profile/skills-page/skills-page.component';
import { DescriptionComponent } from './components/profile/description/description.component';
import { HourlyRateComponent } from './components/profile/hourly-rate/hourly-rate.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { SpecialistSignupComponent } from './components/specialist-signup/specialist-signup.component';
import { ClientSignupComponent } from './components/client-signup/client-signup.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { LoginComponent } from './components/login/login.component';


export const routes: Routes = [

  { path: '', component: LandingPageComponent },
  { path: 'signup', component:SignupComponent },
  { path: 'auth/login', component:LoginComponent },
  { path: 'specialist-signup', component:SpecialistSignupComponent },
  { path: 'client-signup', component:ClientSignupComponent },
  { path: 'specialist/createProfile', component:CreateProfileComponent },
  { path: 'profile/role', component: TitlePageComponent },
  { path: 'profile/experience', component: ExperiencePageComponent },
  { path: 'profile/education', component: EducationPageComponent },
  { path: 'profile/language', component: LanguagePageComponent},
  { path: 'profile/skills', component: SkillsPageComponent},
  { path: 'profile/description', component: DescriptionComponent },
  { path: 'profile/hourlyRate', component: HourlyRateComponent },
  { path: '**', component: NotFoundComponent }
];
