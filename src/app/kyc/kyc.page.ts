import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.page.html',
  styleUrls: ['./kyc.page.scss'],
  standalone:false

})
export class KycPage implements OnInit {
  kycForm!:FormGroup;


  


  constructor(public formBuilder:FormBuilder) {


   }

  ngOnInit() {

    this.kycForm = this.formBuilder.group({
      kycproof:['',Validators.required],
      kycnumber:['',Validators.required],
    
    })
  }

  saveKycData(){

    console.log(this.kycForm.value)

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
      console.log(storeData)
    }

    if(this.kycForm.valid){
      console.log("saved")

    }

    else{
      console.log("not saved")
      this.kycForm.markAllAsTouched();
    }




  }



  

}
