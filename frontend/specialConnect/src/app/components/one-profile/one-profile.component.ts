import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/authServices/auth.service';
import { getOneProfileInterface } from '../../interface/profileInterface';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-one-profile',
  standalone: true,
  imports: [CommonModule,NavbarComponent,FooterComponent],
  templateUrl: './one-profile.component.html',
  styleUrl: './one-profile.component.css'
})
export class OneProfileComponent {

  profileData:any;
  profile_id!: string;

  constructor(public api:AuthService, private router:Router,  private route: ActivatedRoute){

  this.route.params.subscribe(params => {
    this.profile_id = params['profile_id'];
    console.log('Product_id:', this.profile_id);
    this.api.getOneProfile(this.profile_id).subscribe(oneProfile => {
      this.profileData= oneProfile.message
      console.log('Profile Data:', this.profileData);

    });
  });

}

}
