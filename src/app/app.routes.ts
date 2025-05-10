import { Routes } from '@angular/router';
import { CampaignListComponent } from './modules/campaign/campaign-list/campaign-list.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { authGuard } from './core/guard/auth.guard';
import { LayoutComponent } from './layout/layout.component';
import {CampaignCreateComponent} from './modules/campaign/campaign-create/campaign-create.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },

    {
        path: '',
        component: LayoutComponent,
        canActivate: [authGuard],
        children: [
            { path: '', redirectTo: 'campaign-list', pathMatch: 'full' },
            { path: 'campaign-list', component: CampaignListComponent },
            { path: 'campaign-create', component: CampaignCreateComponent },
        ]
    },

    { path: '**', redirectTo: 'login' }
];
