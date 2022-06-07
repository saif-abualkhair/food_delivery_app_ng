import { environment } from '../../../environments/environment';
import { Component, OnInit, AfterViewInit, ViewChild, AfterViewChecked, ElementRef, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as mb from 'mapbox-gl';
import { SpinnerService } from 'src/app/services/spinner-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('mapElement') mapElement!: ElementRef;
  @Input() isVisable: boolean = false;
  @Output() onCloseButton: EventEmitter<void> = new EventEmitter<void>();
  map!: mapboxgl.Map;
  style = 'mapbox://styles/saif-abualkhair/cl3yjk8sb001c15qsjil0w3ag?optimize=true';
  lat = 38.42350589925468;
  lng = 27.131224929897485;
  // {lng: 27.131224929897485, lat: 38.42350589925468} zoom 17.190906695079814
  isLoaded: boolean = false;
  constructor(private spinnerService: SpinnerService) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isVisable']?.currentValue && !this.isLoaded) {
      this.isLoaded = true;
      this.map = new mb.Map({
        accessToken: environment.mapbox.accessToken,
        container: this.mapElement.nativeElement,
        style: this.style,
        zoom: 17.190906695079814,
        center: [this.lng, this.lat],
        //this might be a violation of the terms of service
        //make sure you research this before using it
        attributionControl: false,
        antialias: false,
        interactive: true,
      });
      this.map.on('load', () => {
        // this.spinnerService.toggleSpinner();
      });

      this.map.on('render', () => {
        this.map.resize();
      });
    }
  }


  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap() {

  }

  onLocationSave() {
    console.log('center',this.map.getCenter(),'zoom', this.map.getZoom());
  }


  ngOnInit() {
  }

  onCloseButtonClick() {
    this.onCloseButton.emit();
  }
}