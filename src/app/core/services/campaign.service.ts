import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Campaign} from '../models/campaign.model';
import { v4  } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  private campaignsSubject = new BehaviorSubject<Campaign[]>(this.loadCampaigns());

  public campaigns$ = this.campaignsSubject.asObservable();

  constructor() { }


  private loadCampaigns(): Campaign[] {
    const storedCampaigns = localStorage.getItem('campaigns');
    return storedCampaigns ? JSON.parse(storedCampaigns) : [];
  }

  private saveCampaigns(campaigns: Campaign[]): void {
    localStorage.setItem('campaigns', JSON.stringify(campaigns));
    this.campaignsSubject.next(campaigns);
  }

  getCampaigns(): Observable<Campaign[]> {
    return this.campaigns$;
  }

  addCampaign(title: string, description: string): void {
    const campaigns = this.loadCampaigns();
    const newCampaign: Campaign = {
      id: v4(),
      title,
      description,
      points: 0,
      date: new Date().toISOString().split('T')[0]
    };
    campaigns.push(newCampaign);
    this.saveCampaigns(campaigns);
  }

  updateCampaign(updatedCampaign: Campaign): void {
    const campaigns = this.loadCampaigns();
    const index = campaigns.findIndex(c => c.id === updatedCampaign.id);
    if (index !== -1) {
      campaigns[index] = { ...campaigns[index], ...updatedCampaign };
      this.saveCampaigns(campaigns);
    }
  }

  deleteCampaign(id: string): void {
    const campaigns = this.loadCampaigns();
    const filteredCampaigns = campaigns.filter(c => c.id !== id);
    this.saveCampaigns(filteredCampaigns);
  }

  updatePoints(id: string, increment: boolean): void {
    const campaigns = this.loadCampaigns();
    const index = campaigns.findIndex(c => c.id === id);
    if (index !== -1) {
      campaigns[index].points += increment ? 1 : -1;
      this.saveCampaigns(campaigns);
    }
  }
}
