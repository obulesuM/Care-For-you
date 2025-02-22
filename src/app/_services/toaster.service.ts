import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

interface ToastData {
  message: string;
  color: string;
  duration: number;
}

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  constructor(private toastCtrl: ToastController) {}

  async success(message: string, position: 'bottom' | 'top' | 'middle') {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 1500,
      position: position,
      animated: true,
      color: 'success',
      cssClass: '--color',
    });

    await toast.present();
  }
  async warning(message: string, position: 'bottom' | 'top' | 'middle') {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 1500,
      position: position,
      animated: true,
      color: 'warning',
    });

    await toast.present();
  }
  async error(message: string, position: 'bottom' | 'top' | 'middle') {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 1500,
      position: position,
      animated: true,
      color: 'danger',
    });

    await toast.present();
  }
}
