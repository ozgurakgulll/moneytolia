import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _router: Router) {
  }

  canActivate(): boolean {
    const user = localStorage.getItem('user');
    if (!user) {
      this._router.navigate(['/login']).then(() => {
      }).catch(error => {
        console.log('navigation err', error)
      });
      return false;
    }
    return true;
  }
}
