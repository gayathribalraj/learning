import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../alert.service';


@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.page.html',
  styleUrls: ['./kyc.page.scss'],
  standalone:false

})
export class KycPage implements OnInit {
  kycForm!:FormGroup;


  


  constructor(public formBuilder:FormBuilder, public global: AlertService,
  ) {



   }

  ngOnInit() {

    this.kycForm = this.formBuilder.group({
      kycproof:['',Validators.required],
      kycnumber:['',Validators.required],
    
    })
  }

  saveKycData(){
    if(this.kycForm.valid){
    this.global.showLoading()

    console.log("KYC Form Value", this.kycForm.value)

    const getKycDatas =localStorage.getItem("kycDatase")



    if(!getKycDatas){

     let  kycDetailes =[] ;

     kycDetailes.push(this.kycForm.value);

     localStorage.setItem("kycDatase" , JSON.stringify(kycDetailes))
      

    }
    else{

      let storeData = JSON.parse(getKycDatas);
      storeData.push(this.kycForm.value)
      localStorage.setItem("kycDatase" , (JSON.stringify(storeData)))
      console.log("store data", localStorage.getItem("kycDatase"))
    }

    
      console.log("saved")
      

      this.global.presentAlert('KYC Detailes','Saved SuccessFully.......');
      setTimeout(() => {
      this.global.DissmissLoading()
     }, 1000);
      
    }

    else{
      console.log("not saved")
      this.kycForm.markAllAsTouched();
      this.global.presentToast()
    }




  }


//i have done store localstorage in storedata so this value getdata and after show the html card 
  

}
