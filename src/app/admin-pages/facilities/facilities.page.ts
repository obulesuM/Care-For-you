import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { ionClasses } from '@app/_const';
import { ListViewPage } from './list-view/list-view.page';
import { MapViewPage } from './map-view/map-view.page';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.page.html',
  styleUrls: ['./facilities.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    CommonModule,
    FormsModule,
    ...ionClasses,
    ListViewPage,
    MapViewPage,
  ],
})
export class FacilitiesPage implements OnInit {
  public selectedView = 'LIST';
  constructor() {}

  ngOnInit() {}
}
