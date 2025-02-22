import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, IonApp } from '@ionic/angular/standalone';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class UserComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
