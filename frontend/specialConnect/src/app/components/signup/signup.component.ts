import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FooterComponent,NavbarComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {


  constructor( private router:Router) {}

  specialist(){ 
    this.router.navigate(['/specialist-signup'])
  }

  client(){
    this.router.navigate(['/client-signup'])

  }

}
