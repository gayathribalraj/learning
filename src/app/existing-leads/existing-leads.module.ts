import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExistingLeadsPageRoutingModule } from './existing-leads-routing.module';

import { ExistingLeadsPage } from './existing-leads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExistingLeadsPageRoutingModule
  ],
  declarations: [ExistingLeadsPage]
})
export class ExistingLeadsPageModule {}
