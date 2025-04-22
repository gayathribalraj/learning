import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone:false,
})
export class HomePage implements OnInit {

  constructor(public router:Router) {
    
   }

   data =[
    {
      name:'Gayathri',
      mobile:'488855555',
      amount:123545
  
    },
    {
      name:'sure',
      mobile:'488855555',
      amount:123545
  
    },
    {
      name:'moni',
      mobile:'488855555',
      amount:123545
  
    },

   ]


  routeCard(datas:any){
    this.router.navigate(['/dashboard'],{queryParams:{test:JSON.stringify(datas)}})
    console.log(datas)
  }

  ngOnInit() {
  }

}
