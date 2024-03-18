
import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
// import { TitlePageComponent } from './components/profile/title-page/title-page.component';
// import { ExperiencePageComponent } from './components/profile/experience-page/experience-page.component';
// import { EducationPageComponent } from './components/profile/education-page/education-page.component';
// import { LanguagePageComponent } from './components/profile/language-page/language-page.component';
// import { SkillsPageComponent } from './components/profile/skills-page/skills-page.component';
// import { DescriptionComponent } from './components/profile/description/description.component';
// import { HourlyRateComponent } from './components/profile/hourly-rate/hourly-rate.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { SpecialistSignupComponent } from './components/specialist-signup/specialist-signup.component';
import { ClientSignupComponent } from './components/client-signup/client-signup.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { AdminCreateJobComponent } from './components/admin-create-job/admin-create-job.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { ClientDashboardComponent } from './components/client-dashboard/client-dashboard.component';
import { AdminUpdateJobsComponent } from './components/admin-update-jobs/admin-update-jobs.component';
import { AdminViewUsersComponent } from './components/admin-view-users/admin-view-users.component';
import { SpecialistDashboardComponent } from './components/specialist-dashboard/specialist-dashboard.component';
import { SpecialistUpdateProfileComponent } from './components/specialist-update-profile/specialist-update-profile.component';

import { authGuardGuard } from './auth-guard.guard';



export const routes: Routes = [

  { path: '', component: LandingPageComponent },
  { path: 'signup', component:SignupComponent },
  { path: 'auth/login', component:LoginComponent },
  { path: 'specialist-signup', component:SpecialistSignupComponent },
  { path: 'client-signup', component:ClientSignupComponent },
  { path: 'specialist/createProfile', component:CreateProfileComponent },
  { path: 'profile', component:ProfileDetailsComponent },
  { path: 'dashboard/admin', component: AdminDashboardComponent},
  { path: 'dashboard/client', component: ClientDashboardComponent },
  {path: 'dashboard/specialist', component:SpecialistDashboardComponent},
  {path: 'dashboard/admin/update', component:AdminUpdateJobsComponent,},
  {path: 'dashboard/admin/viewUsers', component:AdminViewUsersComponent,canActivate:[authGuardGuard]},
  {path: 'dashboard/admin/createJob', component:AdminCreateJobComponent,canActivate:[authGuardGuard]},
  {path: 'dashboard/specialist/updateProfile', component:SpecialistUpdateProfileComponent,canActivate:[authGuardGuard]},

  { path: '**', component: NotFoundComponent }
];







  // { path: 'profile/role', component: TitlePageComponent },
  // { path: 'profile/experience', component: ExperiencePageComponent },
  // { path: 'profile/education', component: EducationPageComponent },
  // { path: 'profile/language', component: LanguagePageComponent},
  // { path: 'profile/skills', component: SkillsPageComponent},
  // { path: 'profile/description', component: DescriptionComponent },
  // { path: 'profile/hourlyRate', component: HourlyRateComponent },
