import { Routes } from '@angular/router';
import { AdminPagesPage } from './admin-pages.page';

export const routes: Routes = [
  {
    path: '',
    component: AdminPagesPage,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard.page').then((m) => m.DashboardPage),
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./users/users.page').then((m) => m.UsersPage),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./settings/settings.page').then((m) => m.SettingsPage),
      },
      {
        path: 'careteam',
        loadComponent: () =>
          import('./careteam/careteam.page').then((m) => m.CareteamPage),
      },
      {
        path: 'facilities',
        loadComponent: () =>
          import('./facilities/facilities.page').then((m) => m.FacilitiesPage),
      },
      {
        path: 'forms',
        loadComponent: () =>
          import('./forms/forms.page').then((m) => m.FormsPage),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },  {
    path: 'account',
    loadComponent: () => import('./account/account.page').then( m => m.AccountPage)
  },
  {
    path: 'list-view',
    loadComponent: () => import('./facilities/list-view/list-view.page').then( m => m.ListViewPage)
  },
  {
    path: 'map-view',
    loadComponent: () => import('./facilities/map-view/map-view.page').then( m => m.MapViewPage)
  },

];
