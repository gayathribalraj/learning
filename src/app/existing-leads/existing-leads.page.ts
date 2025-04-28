import { query } from '@angular/animations';
import { ɵnormalizeQueryParams } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-existing-leads',
  templateUrl: './existing-leads.page.html',
  styleUrls: ['./existing-leads.page.scss'],
  standalone:false
})
export class ExistingLeadsPage implements OnInit {

  personData =[];
  

  cardObj:any[] = []
    // {
    //   Name:"Gayathri",
    //   UserId:"123455787899",
    //   MobileNumber : "8520123789",
    //   Location:"chennai",
    //   Amount :"25,00000"
    // },
    // {
    //   Name:"Moni",
    //   UserId:"123455787849",
    //   MobileNumber : "8520123789",
    //   Location:"chennai",
    //   Amount :"25,00000"

    // },
    // {
    //   Name:"Neha",
    //   UserId:"123455787899",
    //   MobileNumber : "8520123789",
    //   Location:"chennai",
    //   Amount :"25,00000"

    // }

  


  // alertData: string = '';
  // storeData:string='';

  constructor( public router: Router) {

  }

  showDetailes(){
    this.router.navigate(['/show-detailes']);

   }
  
   

  // isAlertOpen = false;
  // isAlertNotOpen =false
  // alertButtons = ['Ok'];


  // setOpen(isOpen: boolean, values?:any) {
  //   this.isAlertOpen = isOpen;
  //   this.alertData =  JSON.stringify(values)
  //   this.storeData = this.alertData

  // }


 
  ngOnInit() {
    const getUserData:string | null = localStorage.getItem("persnolFormData");
    console.log(getUserData,"getUserData")
    if(getUserData){
      this.cardObj.push(JSON.parse(getUserData));
    }
    console.log(this.cardObj)
  }

}
