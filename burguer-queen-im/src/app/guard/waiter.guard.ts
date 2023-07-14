import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const waiterGuard: CanActivateFn = (route, state) => {
  const role = localStorage.getItem('Role');
  const router = inject(Router);
  if(role === 'Mesero' || role === 'Mesera' || role === 'Administrador'){
    return true;
  }else{
      router.navigate(['/chef']);
    return false;
  }
};
