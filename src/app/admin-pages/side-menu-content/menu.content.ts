import { DashboardPage } from '../dashboard/dashboard.page';
import { FacilitiesPage } from '../facilities/facilities.page';
import { FormsPage } from '../forms/forms.page';
import { MenuOptionModel } from './menu-option-model';

export const menuOptions: Array<MenuOptionModel> = [
  {
    id: 'DSHBRD',
    displayName: 'Dasboard',
    iconName: 'speedometer-outline',
    navigate: '/admin/dashboard',
    component: DashboardPage,
    selected: true,
    subItems: [],
  },
  {
    id: 'FACLTS',
    displayName: 'Facilities/Hospitals',
    iconName: 'business',
    navigate: '/admin/facilities',
    component: FacilitiesPage,
    selected: false,
    subItems: [],
  },
  {
    id: 'PATS',
    displayName: 'Patients/Users',
    iconName: 'person',
    navigate: '/admin/users',
    component: FacilitiesPage,
    selected: false,
    subItems: [],
  },
  {
    id: 'CARETEAM',
    displayName: 'Doctors/Careteam',
    iconName: 'person',
    navigate: '/admin/careteam',
    component: FacilitiesPage,
    selected: false,
    subItems: [],
  },
  {
    id: '',
    displayName: 'Forms',
    iconName: 'document-text-outline',
    navigate: '/admin/forms',
    component: FormsPage,
    selected: false,
    subItems: [],
  },
  {
    id: 'SETTINGS',
    displayName: 'Settings',
    iconName: 'settings-outline',
    navigate: '/admin/settings',
    component: FacilitiesPage,
    selected: false,
    subItems: [],
  },
  {
    id: 'LOGOUT',
    displayName: 'Logout',
    iconName: 'power-outline',
    navigate: '/admin/settings',
    component: FacilitiesPage,
    selected: false,
    subItems: [],
  },
];
