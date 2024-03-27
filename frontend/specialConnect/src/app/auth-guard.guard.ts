
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/authServices/auth.service';

@Injectable({
  providedIn: 'root'
})
export class authGuardGuard implements CanActivate {

  constructor(private router: Router, private api:AuthService) {
  let token = localStorage.getItem('token') || '';

    this.api.checkUserDetails(token).subscribe(res => {
      let client = res.info.UserType;
      let isAdmin= res.info.isAdmin;
      let specialist=res.info.UserType;

    })

  }
  canActivate(): boolean {
    const isAuthenticated = localStorage.getItem('token');
    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/auth/login']);
      return false;
    }
  }


}




