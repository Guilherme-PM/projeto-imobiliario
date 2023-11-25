import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
//export class HomeGuard implements CanActivate {

export class HomeGuard {

  constructor(private authenticationService: AuthenticationService,
    private router: Router) {

  }

/*   canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (window.location.origin.includes('intranet.carrera.com.br') || window.location.origin.includes('localhost')) {
      if (this.authenticationService.currentUserValue && state.url == '/') {
        this.router.navigate(['/portal']);
      } else {
        return true;
      }
    }
    else if (window.location.origin.includes('autoatendimento.carrera.com.br') || window.location.origin.includes('autoatendimentoh.carrera.com.br')) {
      this.router.navigate(['/auto-cadastro']);
      return false;
    }
    else {
      this.router.navigate(['/lgpd-formulario']);
      return false;
    }
  } */

}
