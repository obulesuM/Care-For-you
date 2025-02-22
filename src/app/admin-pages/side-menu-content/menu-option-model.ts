export interface MenuOptionModel {
  id: string;
  iconName?: string;
  displayName: string;
  component?: any;
  custom?: any;
  selected?: boolean;
  subItems?: Array<MenuOptionModel>;
  navigate?: string;
}
