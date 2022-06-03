import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { SpinnersComponent } from './spinners/spinners.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import {DataViewModule} from 'primeng/dataview';
import {SidebarModule} from 'primeng/sidebar';
import {ListboxModule} from 'primeng/listbox';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    SpinnersComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    InputNumberModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    AutoCompleteModule,
    DataViewModule,
    SidebarModule,
    ListboxModule
  ],
  exports: [
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    InputNumberModule,
    ButtonModule,
    SpinnersComponent,
    AutoCompleteModule,
    DataViewModule,
    SidebarModule,
    ListboxModule,
    MapComponent
  ]
})
export class SharedComponentsModule { }