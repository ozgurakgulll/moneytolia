import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {SidebarToggleService} from '../../core/services/sidebar-toggle.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit, OnDestroy {

  private sidebarStateSubscription!: Subscription;

  sidebarOpen = true;

  faTimes = faTimes

  constructor(private _sidebarToggleService: SidebarToggleService) {
  }


  ngOnInit(): void {
    this.sidebarStateSubscription = this._sidebarToggleService.sidebarState$.subscribe(state => {
      this.sidebarOpen = state;
    });
  }

  toggleSidebar() {
    this._sidebarToggleService.toggleSidebarState();
  }

  ngOnDestroy(): void {
    if (this.sidebarStateSubscription) {
      this.sidebarStateSubscription.unsubscribe();
    }
  }
}
