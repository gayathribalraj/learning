import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-existing-leads',
  templateUrl: './existing-leads.page.html',
  styleUrls: ['./existing-leads.page.scss'],
  standalone:false
})
export class ExistingLeadsPage implements OnInit {

  

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

  progress:number=0;

  constructor( public router: Router, private activatedrouter:ActivatedRoute) {

  }

    showpop(popval:any){
    try{

      this.router.navigate(['/personal-details'], { queryParams: { key:JSON.stringify(popval) }})
      console.log("datas"+popval)
    }catch(error){
      console.log("datas"+error)
    }
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
      
      this.cardObj = JSON.parse(getUserData);
    }
    console.log(this.cardObj)
  }

}
