import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowDetailesPage } from './show-detailes.page';

const routes: Routes = [
  {
    path: '',
    component: ShowDetailesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowDetailesPageRoutingModule {}
