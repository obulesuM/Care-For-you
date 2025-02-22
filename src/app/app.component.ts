import { CommonModule } from '@angular/common';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Capacitor } from '@capacitor/core';
import { UserService } from '@app/_services';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import {
  add,
  addOutline,
  addSharp,
  business,
  businessOutline,
  documentAttach,
  documentAttachOutline,
  documentAttachSharp,
  documentLock,
  documentLockOutline,
  documentTextOutline,
  home,
  homeOutline,
  homeSharp,
  list,
  listOutline,
  listSharp,
  location,
  locationOutline,
  locationSharp,
  person,
  personCircle,
  personOutline,
  personSharp,
  powerOutline,
  settings,
  settingsOutline,
  settingsSharp,
  speedometer,
  speedometerOutline,
  speedometerSharp,
} from 'ionicons/icons';

//import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, CommonModule, HttpClientModule],
})
export class AppComponent {
  constructor(private user: UserService) {
    addIcons({
      personCircle,
      speedometerOutline,
      speedometerSharp,
      speedometer,
      homeOutline,
      home,
      homeSharp,
      person,
      personSharp,
      personOutline,
      business,
      businessOutline,
      settings,
      settingsOutline,
      settingsSharp,
      documentTextOutline,
      documentLockOutline,
      documentLock,
      documentAttach,
      documentAttachOutline,
      documentAttachSharp,
      powerOutline,
      location,
      locationOutline,
      locationSharp,
      listOutline,
      listSharp,
      list,
      add,
      addOutline,
      addSharp,
    });
    this.user.setPlatform(Capacitor.getPlatform());
    console.log(this.user.getPlatForm());
  }
}
