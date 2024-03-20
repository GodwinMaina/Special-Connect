import { Component } from '@angular/core';
import { AuthService } from '../../services/authServices/auth.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-view-clients',
  standalone: true,
  imports: [CommonModule,NavbarComponent, FooterComponent,RouterLink],
  templateUrl: './admin-view-clients.component.html',
  styleUrl: './admin-view-clients.component.css'
})
export class AdminViewClientsComponent {

  Clients:any[]=[];

  constructor(private api:AuthService){

    this.api.getAllClients().subscribe(res=>{
      console.log(res);
      console.log("woww");

      this.Clients=res.message

    })


  }

}
