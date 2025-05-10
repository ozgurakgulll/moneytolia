import { Component } from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {AlertService} from '../../../shared/mono-alert/mono-alert.service';

@Component({
  selector: 'app-campaign-list',
  standalone: true,
  imports: [
    SharedModule,
  ],
  templateUrl: './campaign-list.component.html',
  styleUrl: './campaign-list.component.scss'
})
export class CampaignListComponent {
  constructor(private alertService: AlertService) { }
  showSuccess() {
    this.alertService.showAlert('Başarılı işlem!', 'success');
  }

  showError() {
    this.alertService.showAlert('Hata oluştu!', 'error');
  }

  showWarning() {
    this.alertService.showAlert('Uyarı mesajı!', 'warning');
  }
}
