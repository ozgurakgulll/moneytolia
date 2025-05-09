
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {RouterModule, RouterOutlet} from '@angular/router';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule {}
