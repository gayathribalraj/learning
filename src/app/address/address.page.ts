import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
  standalone:false

})
export class AddressPage implements OnInit {
  adressForm!:FormGroup;


  constructor(public formBuilder:FormBuilder) { }

  ngOnInit() {

    this.adressForm = this.formBuilder.group({
      
      address1:[''],
      address2:['']
      
      

    })
  }

}
