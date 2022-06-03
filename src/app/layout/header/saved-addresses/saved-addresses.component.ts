import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-saved-addresses',
  templateUrl: './saved-addresses.component.html',
  styleUrls: ['./saved-addresses.component.css']
})


export class SavedAddressesComponent implements OnInit {
  @Output() onAddNewLocation:EventEmitter<void> = new EventEmitter<void>();
  formGroup!: FormGroup;
  cities: City[];

  constructor(private formBuilder: FormBuilder) {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.formGroup = this.formBuilder.group({
      address: [null]
    });
  }

  onAddNewLocationClick(){
    this.onAddNewLocation.emit();
  }

}


interface City {
  name: string,
  code: string
}