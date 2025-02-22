import { Component, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonRouterLink,
} from '@ionic/angular/standalone';
import { menuOptions } from './menu.content';
import { Router, RouterLinkActive } from '@angular/router';
import { MenuOptionModel } from './menu-option-model';
import { ionClasses } from '@app/_const';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-menu-content',
  templateUrl: './side-menu-content.page.html',
  styleUrls: ['./side-menu-content.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonLabel,
    IonItem,
    IonList,
    CommonModule,
    FormsModule,
    ...ionClasses,
  ],
})
export class SideMenuContentPage implements OnInit, OnChanges {
  public menuOptions = menuOptions;
  public selectedIndex = 0;
  public routeUrl: string = '';
  //public route = useRoute()
  constructor(public router: Router) {}

  ngOnInit() {}

  ngOnChanges() {
    console.log(this.router.url);
    this.routeUrl = this.router.url;
  }

  public navigate(menu: MenuOptionModel) {
    this.router.navigate([menu.navigate]);
  }
}
