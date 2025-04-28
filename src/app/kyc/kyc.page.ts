import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


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
      kycproof:[''],
      kycnumber:[''],
    
    })
  }

}
