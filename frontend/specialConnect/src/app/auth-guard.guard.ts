
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



// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';

// // Import jwt_decode without using 'default'
// import jwt_decode from 'jwt-decode';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {

//   constructor(private router: Router) {}

//   canActivate(): boolean {
//     // Check if user is authenticated
//     const isAuthenticated = localStorage.getItem('token');
//     if (!isAuthenticated) {
//       // If not authenticated, redirect to login page
//       this.router.navigate(['/auth/login']);
//       return false;
//     }

//     try {
//       // Decode the JWT token to extract user information
//       let token = localStorage.getItem('token');
//       const decodedToken: any = jwt_decode(token);
      
//       // Check if user is an admin
//       if (decodedToken.admin === true) {
//         // Admin has access to all routes
//         return true;
//       }

//       // Check if user is a client
//       if (decodedToken.role === 'client') {
//         // Define routes accessible to clients
//         const clientRoutes = ['client-dashboard', 'client-profile', /* Add more client routes here */];
//         const currentRoute = this.router.url.split('/')[1];
//         if (clientRoutes.includes(currentRoute)) {
//           return true;
//         }
//       }

//       // Check if user is a specialist
//       if (decodedToken.role === 'specialist') {
//         // Define routes accessible to specialists
//         const specialistRoutes = ['specialist-dashboard', 'specialist-profile', /* Add more specialist routes here */];
//         const currentRoute = this.router.url.split('/')[1];
//         if (specialistRoutes.includes(currentRoute)) {
//           return true;
//         }
//       }

//       // If user role is not recognized or doesn't have access to current route, redirect to unauthorized page
//       this.router.navigate(['/unauthorized']);
//       return false;
//     } catch (error) {
//       // If there's an error decoding the token, redirect to login page
//       console.error('Error decoding token:', error);
//       this.router.navigate(['/auth/login']);
//       return false;
//     }
//   }
// }
