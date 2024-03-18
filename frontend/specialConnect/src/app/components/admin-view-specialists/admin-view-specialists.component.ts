import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { AuthService } from '../../services/authServices/auth.service';

@Component({
  selector: 'app-admin-view-specialists',
  standalone: true,
  imports: [CommonModule,NavbarComponent,FooterComponent],
  templateUrl: './admin-view-specialists.component.html',
  styleUrl: './admin-view-specialists.component.css'
})
export class AdminViewSpecialistsComponent {

  specialists:any[]=[];
  constructor(private api:AuthService){

    this.api.getAllSpecialists().subscribe(res=>{
      console.log(res);

      this.specialists=res.message

    })


  }

}
