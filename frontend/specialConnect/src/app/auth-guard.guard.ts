
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class authGuardGuard implements CanActivate {

  constructor(private router: Router) {}

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




