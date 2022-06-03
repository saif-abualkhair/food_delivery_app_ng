import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { SpinnersComponent } from './spinners/spinners.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import {DataViewModule} from 'primeng/dataview';


@NgModule({
  declarations: [
    SpinnersComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    InputNumberModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    AutoCompleteModule,
    DataViewModule
  ],
  exports: [
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    InputNumberModule,
    ButtonModule,
    SpinnersComponent,
    AutoCompleteModule,
    DataViewModule
  ]
})
export class SharedComponentsModule { }