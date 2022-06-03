import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner-service.service';
@Component({
  selector: 'app-spinners',
  templateUrl: './spinners.component.html',
  styleUrls: ['./spinners.component.css']
})
export class SpinnersComponent implements OnInit {
  isLoading: boolean = false;

  constructor(public spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.bindToggleSpinnerChanges();
  }

  bindToggleSpinnerChanges() {
    this.spinnerService.$detectToggleSpinner.subscribe(v => {
      this.toggleSpinner(v);
    });
  }

  toggleSpinner(isLoading: boolean) {
    this.isLoading = isLoading;
  }
}