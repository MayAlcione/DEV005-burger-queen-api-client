import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const chefGuard: CanActivateFn = (route, state) => {
  const role = localStorage.getItem('Role');
  const router = inject(Router);
  if(role === 'Cocinero' || role === 'Cocinera' || role === 'Administrador'){
    return true;
  }else{
      router.navigate(['/waiter']);
    return false;
  }
};
