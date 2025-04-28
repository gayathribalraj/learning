import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.page.html',
  styleUrls: ['./personal-details.page.scss'],
  standalone:false

})
export class PersonalDetailsPage implements OnInit {
     persnolForm!:FormGroup;
  constructor(public formBuilder:FormBuilder) { }

  persnoldata:persData[]= [] ;
  ngOnInit() {
    this.persnolForm = this.formBuilder.group({
      name:[''],
      dob:[''],
      age:[''],
      gender:['']

    })
  }

  saveData(){

    console.log(this.persnolForm.value)

   localStorage.setItem("persnolFormData", JSON.stringify(this.persnolForm.value));
    // console.log("UserData"+ UserData)

   


   


  }

}

export interface persData{
  name : string,
  dob :string,
  age : string,
  gender:string

}
