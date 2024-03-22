import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/authServices/auth.service';
import { getOneProfileInterface } from '../../interface/profileInterface';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { review } from '../../interface/reviews';




@Component({
  selector: 'app-one-profile',
  standalone: true,
  imports: [CommonModule,NavbarComponent,FooterComponent],
  templateUrl: './one-profile.component.html',
  styleUrl: './one-profile.component.css'
})
export class OneProfileComponent {

  oneProfile:any[]=[];

  review:any[]=[];

  specialist_id!: string;

  constructor(public api:AuthService, private router:Router,  private route: ActivatedRoute){

    this.route.params.subscribe(params => {
      this.specialist_id = params['specialist_id'];
      console.log('specialist_id:', this.specialist_id);
    });

  
  this.api.getOneSpecialistProfile(this.specialist_id).subscribe(response=>{
    this.oneProfile=response.message;
    console.log('One profile:', this.oneProfile);
    
  })


  this.api.specialistReviews(this.specialist_id).subscribe(response=>{
    this.review=response.message;
    console.log('Review:', this.review);
    
  })


}
}





