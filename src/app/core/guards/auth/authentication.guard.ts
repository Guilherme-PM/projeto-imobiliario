import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
/*     const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      return true;
    } */

    this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
    return false;
  }

}
