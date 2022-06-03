import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { SavedAddressesComponent } from './header/saved-addresses/saved-addresses.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SavedAddressesComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
