import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  isLoading: boolean = false;
  $detectToggleSpinner: Subject<boolean> = new Subject<boolean>();
  constructor() { }

  toggleSpinner() {
    this.isLoading = !this.isLoading;
    this.$detectToggleSpinner.next(this.isLoading);
  }
}