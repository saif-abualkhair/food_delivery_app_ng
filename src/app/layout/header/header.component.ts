import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAddressSideBarOnScreen: boolean = false;
  isMapSideBarOnScreen: boolean = false;
  constructor(private spinnerService: SpinnerService) { }

  ngOnInit(): void {
  }

  showSavedAddresses() {
    this.isAddressSideBarOnScreen = true
  }

  showMap() {
    this.isMapSideBarOnScreen = true
  }

  onAddNewLocation() {
    this.isAddressSideBarOnScreen = false;
    this.spinnerService.toggleSpinner();
    this.showMap();
  }

  onCloseButton() {
    this.isMapSideBarOnScreen = false
  }
}
