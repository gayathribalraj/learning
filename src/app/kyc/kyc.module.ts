import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KycPageRoutingModule } from './kyc-routing.module';

import { KycPage } from './kyc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KycPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [KycPage]
})
export class KycPageModule {}
