import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MonoAlertComponent} from './mono-alert/mono-alert.component';

@NgModule({
  declarations: [MonoAlertComponent],
  imports: [CommonModule],
  exports: [MonoAlertComponent]
})
export class SharedModule {}
