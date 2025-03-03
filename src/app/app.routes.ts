import { Routes } from '@angular/router';
import { CreateProjectComponent } from './create-project/create-project.component';
import { LoginComponent } from './login/login.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {path:'create-project', component:CreateProjectComponent},
    {path: 'listing-page', component:ListingPageComponent},
    {path: 'dashboard', component:DashboardComponent}


];
