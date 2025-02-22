import { Component, EnvironmentInjector, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ionClasses } from '@app/_const';
import { IonApp } from '@ionic/angular/standalone';
import { UserService } from '@app/_services';
import { SideMenuContentPage } from './side-menu-content/side-menu-content.page';

@Component({
  selector: 'app-admin-pages',
  templateUrl: './admin-pages.page.html',
  styleUrls: ['./admin-pages.page.scss'],
  standalone: true,
  imports: [
    IonApp,
    CommonModule,
    FormsModule,
    ...ionClasses,
    SideMenuContentPage,
  ],
})
export class AdminPagesPage implements OnInit {
  public environmentInjector = inject(EnvironmentInjector);
  public userInfo: any;

  constructor(private user: UserService) {
    this.userInfo = this.user.getUserData();
  }

  ngOnInit() {}
}
