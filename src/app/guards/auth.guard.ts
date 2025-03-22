import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { Concessionnaire } from '../models/concessionnaire.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  concessionnaire: Concessionnaire | null = null;
  constructor(private router: Router,private session: SessionStorageService,) {
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    this.concessionnaire=this.getConcessionnaireFromSession();
    if (this.concessionnaire?.token) {
      return true; // Accès autorisé
    } else {
      this.router.navigate(['/authentication']); // Redirige vers le formulaire de connexion
      return false; // Accès refusé
    }
  }

     getConcessionnaireFromSession(): Concessionnaire | null {
                  const concessionnaireData = this.session.get('concessionnaire');
                  return concessionnaireData ? JSON.parse(concessionnaireData) as Concessionnaire : null;
              }
}
