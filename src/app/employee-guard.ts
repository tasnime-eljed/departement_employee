import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from './services/auth';

export const employeeGuard: CanActivateFn = (route, state) => {//const employeeGuard : on crée une constante appelée employeeGuard.
  //CanActivateFn : indique que cette constante représente une fonction Guard.
  //route, state) : Angular fournit des informations sur la route demandée et l'état de la navigation
  const authService = inject(Auth);
  const router = inject(Router);//Router :sert à changer de page.

  if (authService.isAdmin()) {
    return true;
  } else {
    router.navigate(['app-forbidden']);
    return false;//refuse l'activation de la route demandée.
  }
};
