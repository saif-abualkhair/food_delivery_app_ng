import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAddressSideBarOnScreen: boolean = false;
  isMapSideBarOnScreen: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showSavedAddresses() {
    this.isAddressSideBarOnScreen = true
  }

  showMap() {
    this.isMapSideBarOnScreen = true
  }

  onAddNewLocation(){
    this.isAddressSideBarOnScreen = false;
    this.showMap();
  }
}
