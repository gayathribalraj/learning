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
      Name:'Gayathri',
      Mobile:'488855555',
      Amount:123545,
      Location:"Chennai",
      progress:0.20
  
    },
    {
      Name:'Neha',
      Mobile:'488855555',
      Amount:123545,
      Location:"Thirunelveli",
      progress:0.50

  
    },
    {
      Name:'Monika',
      Mobile:'488855555',
      Amount:123545,
      Location:"Madhurai",
      progress:0.80

  
    }

   ]


   


  routeCard(datas:any){
    this.router.navigate(['/dashboard'],{queryParams:{test:JSON.stringify(datas)}})
    console.log(datas)
  }

  public progress = 0;


  ngOnInit() {
    setInterval(() => {
      this.progress += 0.01;

      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (this.progress > 1) {
        setTimeout(() => {
          this.progress = 0;
        }, 1000);
      }
    }, 50);
  }

}
