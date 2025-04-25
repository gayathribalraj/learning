import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowDetailesPageRoutingModule } from './show-detailes-routing.module';

import { ShowDetailesPage } from './show-detailes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowDetailesPageRoutingModule
  ],
  declarations: [ShowDetailesPage]
})
export class ShowDetailesPageModule {}
