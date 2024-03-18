import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-admin-update-jobs',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './admin-update-jobs.component.html',
  styleUrl: './admin-update-jobs.component.css'
})
export class AdminUpdateJobsComponent {

}
