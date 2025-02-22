import { Routes } from '@angular/router';
import { UserComponent } from './user.component';

export const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    loadChildren: () => import('../tabs/tabs.routes').then((m) => m.routes),
  },
];
