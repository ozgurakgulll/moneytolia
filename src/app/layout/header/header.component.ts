import {Component} from '@angular/core';
import {AuthService} from '../../core/services/auth.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private _authService: AuthService) {
  }

  onLogout(): void {
    this._authService.logout()
  }
}
