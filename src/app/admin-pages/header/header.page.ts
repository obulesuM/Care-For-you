import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonApp,
  IonMenu,
  IonMenuButton,
  IonRouterOutlet,
} from '@ionic/angular/standalone';
import { ionClasses } from '@app/_const/index';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
  standalone: true,
  imports: [
    IonApp,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonMenu,
    IonMenuButton,
    ...ionClasses,
    IonRouterOutlet,
  ],
})
export class HeaderPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
