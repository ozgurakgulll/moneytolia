import {Routes} from '@angular/router';
import {CampaignListComponent} from "./modules/campaign/campaign-list/campaign-list.component";
import {LoginComponent} from "./modules/auth/login/login.component";
import {AuthGuard} from "./core/auth.guard";


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
        {
        path: 'campaign',
        component: CampaignListComponent,
        canActivate: [AuthGuard],
    },
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: '**', redirectTo: '/login'}];
