import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardPage, FacilitiesPage } from '@app/admin-pages/index';

export const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    loadChildren: () =>
      import('../admin-pages/admin-pages.routes').then((m) => m.routes),
  },
];
