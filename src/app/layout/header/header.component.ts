import {Component} from '@angular/core';
import {AuthService} from '../../core/services/auth.services';
import {SidebarToggleService} from '../../core/services/sidebar-toggle.service';
import { faBars } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  faBars = faBars
  constructor(private _authService: AuthService,  private _sidebarToggleService: SidebarToggleService ) {
  }

  onLogout(): void {
    this._authService.logout()
  }

  toggleSidebar(): void {
    this._sidebarToggleService.toggleSidebarState();
  }
}
