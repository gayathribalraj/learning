import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../alert.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.page.html',
  styleUrls: ['./kyc.page.scss'],
  standalone:false

})
export class KycPage implements OnInit {
  kycForm!:FormGroup;

  storeData: any;
  userkycData: any;
  


  constructor(public formBuilder:FormBuilder, public global: AlertService,public activatedRoute:ActivatedRoute
  ) {

this.activatedRoute.queryParams.subscribe((data:any)=>
{
  this.userkycData = JSON.parse(data['test']);
  console.log("userdata",this.userkycData)
  
})



   }


   

  ngOnInit() {

    this.kycForm = this.formBuilder.group({
      kycproof:['',Validators.required],
      kycnumber:['',Validators.required],
    
    });
    if (this.userkycData) {
      this.routeCard();
    }
    
  }

  saveKycData(){
    if(this.kycForm.valid){
    this.global.showLoading()

    console.log("KYC Form Value", this.kycForm.value)

    // localStorage.setItem("kycDatase" , JSON.stringify(kycDetailes))


    const getKycDatas =localStorage.getItem("kycDatase")



    if(!getKycDatas){

     let  kycDetailes =[] ;

     kycDetailes.push(this.kycForm.value);

     localStorage.setItem("kycDatase" , JSON.stringify(kycDetailes))
      

    }
    else{

      this.storeData = JSON.parse(getKycDatas);
      this.storeData.push(this.kycForm.value)
      const latestData = localStorage.setItem("kycDatase" , (JSON.stringify(this.storeData)))
      console.log(latestData)
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

  routeCard(){
    this.kycForm.controls['kycproof'].setValue(this.userkycData['kycproof']),
    this.kycForm.controls['kycnumber'].setValue(this.userkycData['kycnumber'])
  }

  

}
