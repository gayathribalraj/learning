import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertController: AlertController,private loadingCtrl: LoadingController,private toastController: ToastController) { }


  async presentAlert(header:string ,message:string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['Ok'],
    });

    await alert.present();
  }

// /loading

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Saving...',
      // duration: 1000,
    });
  
    loading.present();
  }
  
  
  DissmissLoading(){
    this.loadingCtrl.dismiss()
  }


  // Toast Message
  async presentToast(){
    const toast = await this.toastController.create({
      message: 'Please fill all filled',
      duration: 1500,
      position: 'bottom',
      cssClass: 'custom-toast',

    });

    await toast.present();
  }





  

}
