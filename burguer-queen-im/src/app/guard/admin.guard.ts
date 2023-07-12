import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const role = localStorage.getItem('Role');
  const router = inject(Router);
  if(role === 'Administrador'){
    return true;
  }else{
    if(role === 'Mesero' || role === 'Mesera'){
      router.navigate(['/waiter']);
    }else{
      router.navigate(['/chef']);
    }
    return false;
  }
};
