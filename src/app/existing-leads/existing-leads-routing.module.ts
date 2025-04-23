import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExistingLeadsPage } from './existing-leads.page';

const routes: Routes = [
  {
    path: '',
    component: ExistingLeadsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExistingLeadsPageRoutingModule {}
