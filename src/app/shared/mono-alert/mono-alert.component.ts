import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription, timer} from 'rxjs';
import {AlertService} from './mono-alert.service';

@Component({
  selector: 'mono-alert',
  templateUrl: './mono-alert.component.html',
  styleUrl: './mono-alert.component.scss'
})
export class MonoAlertComponent implements OnInit, OnDestroy{
  message: string = '';
  type: 'success' | 'error' | 'warning' = 'success';

  private alertSubscription: Subscription = new Subscription();
  private timerSubscription: Subscription = new Subscription();

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.alertSubscription = this.alertService.alertState$.subscribe(data => {
      this.message = data.message;
      this.type = data.type;

      this.timerSubscription.unsubscribe();
      this.timerSubscription = timer(3000).subscribe(() => this.closeAlert());
    });
  }

  ngOnDestroy(): void {
    this.alertSubscription.unsubscribe();
    this.timerSubscription.unsubscribe();
  }

  closeAlert() {
    this.message = '';
  }
}
