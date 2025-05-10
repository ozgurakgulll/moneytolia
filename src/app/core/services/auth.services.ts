import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserModel} from '../models/user.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());

  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private readonly DEFAULT_USERNAME = environment.defaultUsername;

  private readonly DEFAULT_PASSWORD = environment.defaultPassword;

  constructor(private _router: Router) {
  }

  login(user: UserModel): boolean {
    if (user.username === this.DEFAULT_USERNAME && user.password === this.DEFAULT_PASSWORD) {
      localStorage.setItem('auth_token', 'logged_in');
      this.isAuthenticatedSubject.next(true);
      this._router.navigate(['/campaigns']);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    this.isAuthenticatedSubject.next(false);
    this._router.navigate(['/login']);
  }

  hasToken(): boolean {
    return !!localStorage.getItem('auth_token');
  }

  isLoggedIn(): Observable<boolean> {
    return this.isAuthenticated$;
  }

}
