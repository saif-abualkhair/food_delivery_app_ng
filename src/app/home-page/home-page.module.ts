import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { ItemCardComponent } from './item-card/item-card.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    ItemCardComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
