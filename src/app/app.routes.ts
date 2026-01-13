import { Routes } from '@angular/router';
import { SidenavComponent } from './core/sidenav/sidenav.component';
import { BacklogsComponent } from './features/backlogs/backlogs.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: "", component: SidenavComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {path: "dashboard", component: DashboardComponent},
      {path: "backlogs", component: BacklogsComponent}
    ]
  }
];
