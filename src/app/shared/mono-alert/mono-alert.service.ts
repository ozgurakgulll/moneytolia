import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private alertSubject = new Subject<{ message: string, type: 'success' | 'error' | 'warning' }>();
  alertState$ = this.alertSubject.asObservable();

  showAlert(message: string, type: 'success' | 'error' | 'warning' = 'success') {
    this.alertSubject.next({ message, type });
  }
}
