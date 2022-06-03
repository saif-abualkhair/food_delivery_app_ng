import { environment } from '../../../environments/environment';
import { Component, OnInit, ChangeDetectorRef, AfterViewInit, ViewChild, AfterViewChecked, ElementRef, Output, EventEmitter } from '@angular/core';
import * as mb from 'mapbox-gl';
import { SpinnerService } from 'src/app/services/spinner-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {
  @ViewChild('mapElement') mapElement!: ElementRef;
  @Output() onCloseButton: EventEmitter<void> = new EventEmitter<void>();
  map!: mapboxgl.Map;
  style = 'mapbox://styles/saif-abualkhair/cl3yjk8sb001c15qsjil0w3ag';
  lat = 31.949510049586394;
  lng = 35.92225156154075;
  constructor(private spinnerService: SpinnerService) { }


  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap() {
    this.map = new mb.Map({
      accessToken: environment.mapbox.accessToken,
      container: this.mapElement.nativeElement,
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat],
      //this might be a violation of the terms of service
      //make sure you research this before using it
      attributionControl: false,
      antialias: true,
      interactive: true,
    });
    this.map.on('load', () => {
      this.spinnerService.toggleSpinner();
    });

    this.map.on('render', () => {
      this.map.resize();
    });
  }

  onLocationSave() {
    console.log(this.map.getCenter());
  }


  ngOnInit() {
  }

  onCloseButtonClick() {
    this.onCloseButton.emit();
  }
}