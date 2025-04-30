import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddressPageRoutingModule } from './address-routing.module';

import { AddressPage } from './address.page';
import { PermanentAddressComponent } from '../components/permanent-address/permanent-address.component';
import { PresentAddressComponent } from '../components/present-address/present-address.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddressPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddressPage, PermanentAddressComponent, PresentAddressComponent]
})
export class AddressPageModule {}
