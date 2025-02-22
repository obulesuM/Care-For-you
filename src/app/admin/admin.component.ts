import { Component, OnInit } from '@angular/core';
import { ionClasses } from '@app/_const';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonMenu,
  IonMenuButton,
  IonRouterOutlet,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { routes } from './admin.routes';
import { AdminPagesPage } from '@app/admin-pages/admin-pages.page';
import { DashboardPage } from '@app/admin-pages';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  standalone: true,
  imports: [IonApp, CommonModule, FormsModule, ...ionClasses, IonRouterOutlet],
})
export class AdminComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  public navigate() {
    this.router.navigate(['/admin/dashboard']);
  }
}
