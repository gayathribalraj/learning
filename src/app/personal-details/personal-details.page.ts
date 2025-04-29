import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AlertService } from '../alert.service';


@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.page.html',
  styleUrls: ['./personal-details.page.scss'],
  standalone:false

})



export class PersonalDetailsPage implements OnInit {
     persnolForm!:FormGroup;
     userdetailes:any;





  constructor(public formBuilder:FormBuilder, public activatedRoute:ActivatedRoute,private toastController: ToastController,private loadingCtrl: LoadingController,
    public global: AlertService
  ) {
    this.persnolForm = this.formBuilder.group({
      name:['', Validators.required],
      dob:['', Validators.required],
      age:['',Validators.compose([Validators.required, Validators.min(1), Validators.max(100)])],
      gender:['',Validators.required],

    })
    this.activatedRoute.queryParams.subscribe((data:any)=>{
      
      this.userdetailes=JSON.parse(data['key']);
      console.log(this.userdetailes ,"Persnol data")
      
      
      this.autopop();
    })

    
    
   }

   

   autopop(){
    try{
      this.persnolForm.controls['name'].setValue(this.userdetailes['name']);
      this.persnolForm.controls['dob'].setValue(this.userdetailes['dob']);
      this.persnolForm.controls['age'].setValue(this.userdetailes['age']);
      this.persnolForm.controls['gender'].setValue(this.userdetailes['gender']);

    }catch(error){

      console.log(error);
    }
    
    // this.persnolForm.patchValue({
    //   name: this.userdetailes['name'] || '',
    //   dob : this.userdetailes['dob']  || '',
    //   age : this.userdetailes['age']  || '',
    //   gender: this.userdetailes['gender'] || ''
  
    // })
   }

  persnoldata:persData[]= [] ;


  ngOnInit() {
    
  }
  


  saveData(){

    console.log(this.persnolForm.value)


    const getdata = localStorage.getItem("persnolFormData")

if(!getdata){
  

  let createDate= [] ;

  createDate.push(this.persnolForm.value);

  localStorage.setItem("persnolFormData", JSON.stringify(createDate));

}
else{
  let storedData = JSON.parse(getdata);
  storedData.push(this.persnolForm.value);
  localStorage.setItem("persnolFormData", JSON.stringify(storedData));


}
// Saved SuccessFully...
if (this.persnolForm.valid) {
  this.showLoading();
 this.global.presentAlert('Persnol Detailes','Saved SuccessFully.......');
  setTimeout(()=>
  {
    this.DissmissLoading()
    
  },1000)



  console.log(this.persnolForm.value);
} else {

  
  this.persnolForm.markAllAsTouched();
 this.presentToast();
}
  }


  async presentToast(){
    const toast = await this.toastController.create({
      message: 'Please fill all filled',
      duration: 1500,
      position: 'bottom',
      cssClass: 'custom-toast',

    });

    await toast.present();
  }
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

  // async presentAlert() {
  //   const alert = await this.alertController.create({
  //     header: 'Personal Details',
  //     message: 'Saved SuccessFully.......',
  //     buttons: ['Ok'],
  //   });

  //   await alert.present();
  // }
}

  
  



export interface persData{
  name : string,
  dob :string,
  age : string,
  gender:string,
  id:number

}
