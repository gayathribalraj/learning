import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  data: any[] = [];

  constructor(public router: Router) {}

  routeCard(datas: any) {
    this.router.navigate(['/dashboard'], { queryParams: { test: JSON.stringify(datas) } });
    console.log(datas);
  }

  public progress = 0;

  ngOnInit() {
    const storedData = localStorage.getItem('kycDatase');
    if (storedData) {
      this.data = JSON.parse(storedData);  
    }


}
}
