import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/authServices/auth.service';
import { CommonModule } from '@angular/common';
import { getProfileInterface } from '../../interface/profileInterface';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,RouterLink, CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  mySpecialists:any[]=[]
  constructor(private api:AuthService){

    this.api.getProfiles().subscribe(res=>{
      this.mySpecialists=res.message
      console.log(this.mySpecialists)

    })
  }

  reviews = [
    { imageUrl: 'https://www.logiconme.com/assets/img-temp/400x450/img5.jpg', comment: "Excellent service and great value for money. Will definitely recommend to friends and family!", author: 'John Doe' },
    { imageUrl: 'https://www.uimaker.com/uploads/bs/bs12/images/profile/profile5.jpg', comment: "The quality of their products is outstanding. I've been a loyal customer for years.", author: 'Jane Smith' },
    { imageUrl: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg', comment: "Fast shipping and friendly customer support. Couldn't be happier with my purchase!", author: 'Alex Johnson' }
  ];
  activeIndex = 0;

  prevSlide() {
    this.activeIndex = (this.activeIndex === 0) ? this.reviews.length - 1 : this.activeIndex - 1;
  }

  nextSlide() {
    this.activeIndex = (this.activeIndex === this.reviews.length - 1) ? 0 : this.activeIndex + 1;
  }

}
