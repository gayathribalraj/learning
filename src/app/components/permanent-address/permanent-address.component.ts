import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-permanent-address',
  templateUrl:'./permanent-address.component.html',
  styleUrls: ['./permanent-address.component.scss'],
  standalone:false
})
export class PermanentAddressComponent  implements OnInit {
  permentAddressForm!:FormGroup;



  constructor(public formBuilder:FormBuilder) { 

    this.permentAddressForm =this.formBuilder.group({
      street:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      zip:['',Validators.required]


    })


  }
    ngOnInit() {}

}
