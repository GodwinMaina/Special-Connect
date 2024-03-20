
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
// import { AdminViewUsersComponent } from './components/admin-view-users/admin-view-users.component';
import { SpecialistDashboardComponent } from './components/specialist-dashboard/specialist-dashboard.component';
import { SpecialistUpdateProfileComponent } from './components/specialist-update-profile/specialist-update-profile.component';

// import { authGuardGuard } from './auth-guard.guard';
import { OneProfileComponent } from './components/one-profile/one-profile.component';
import { AdminViewSpecialistsComponent } from './components/admin-view-specialists/admin-view-specialists.component';
import { AdminViewClientsComponent } from './components/admin-view-clients/admin-view-clients.component';
import { OneJobComponent } from './components/one-job/one-job.component';
import { UpdateJobsComponent } from './components/update-jobs/update-jobs.component';
import { SpecialistJobsComponent } from './components/specialist-jobs/specialist-jobs.component';
import { SpecialistAppointmentsComponent } from './components/specialist-appointments/specialist-appointments.component';
import { SpMessagesComponent } from './components/sp-messages/sp-messages.component';
import { ClientMessagesComponent } from './components/client-messages/client-messages.component';
import { ClientCreateJobComponent } from './components/client-create-job/client-create-job.component';
import { ClientBookingsComponent } from './components/client-bookings/client-bookings.component';
import { ClientJobsComponent } from './components/client-jobs/client-jobs.component';



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
  {path: 'dashboard/admin/updateJob/:job_id', component:AdminUpdateJobsComponent},
  { path: 'profiles/:specialist_id', component:OneProfileComponent },
  {path: 'dashboard/admin/view-Specialists', component:AdminViewSpecialistsComponent},
  {path: 'dashboard/admin/view-Clients', component:AdminViewClientsComponent},
  {path: 'jobs/job/:job_id', component:OneJobComponent},
  {path: 'dashboard/clientMessages', component:ClientMessagesComponent},
  {path: 'dashboard/client/createJob', component:ClientCreateJobComponent},
  {path: 'dashboard/clientJobs', component:ClientJobsComponent},
  {path: 'dashboard/clientBookings', component:ClientBookingsComponent},
  {path: 'dashboard/specialist/messages', component:SpMessagesComponent},
  {path: 'dashboard/specialist/jobs', component:SpecialistJobsComponent},
  {path: 'dashboard/specialist/appointments', component:SpecialistAppointmentsComponent},
  {path: 'dashboard/admin/createJob', component:AdminCreateJobComponent},
  {path: 'dashboard/specialist/updateProfile', component:SpecialistUpdateProfileComponent},
  { path: '**', component: NotFoundComponent }
];



  // {path: 'dashboard/admin/viewUsers', component:AdminViewUsersComponent,canActivate:[authGuardGuard]},
