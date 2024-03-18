import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/authServices/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  emailAdmin:string=''

constructor(private api:AuthService) {


  this.emailAdmin= this.api.getadminEmails() || '';
}


  showModalMenuAdmin() {
    let modalBg = document.querySelector('.modal-bg');

    modalBg?.classList.add('modal-bg-active');
  }
  closeModalMenuAdmin() {
    let modalBg = document.querySelector('.modal-bg');

    modalBg?.classList.remove('modal-bg-active');
  }
}




