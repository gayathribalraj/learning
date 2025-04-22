import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone:false
})
export class DashboardPage implements OnInit {

  userdet :any

  constructor(public activatedRoute:ActivatedRoute) { 

    this.activatedRoute.queryParams.subscribe((data:any)=>{
      
      this.userdet=JSON.parse(data['test']);
      console.log(data['test'],"ssss")

      
      


    })



    
    
  }

  ngOnInit() {
    
  }



}
