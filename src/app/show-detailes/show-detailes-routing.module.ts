import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowDetailesPage } from './show-detailes.page';

const routes: Routes = [
  {
    path: '',
    component: ShowDetailesPage,
    children:[
      {
        path: 'personal-details',
        loadChildren: () => import('../personal-details/personal-details.module').then( m => m.PersonalDetailsPageModule)
      },
      {
        path: 'kyc',
        loadChildren: () => import('../kyc/kyc.module').then( m => m.KycPageModule)
      },
      {
        path: 'address',
        loadChildren: () => import('../address/address.module').then( m => m.AddressPageModule)
      }
     
    
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowDetailesPageRoutingModule {}
