import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ItemForReturn } from 'src/app/models/items/item-for-return';
import { SpinnerService } from 'src/app/services/spinner-service.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})



export class ItemComponent implements OnInit, OnDestroy {
  itemsForReturn!: ItemForReturn;
  formGroup!: FormGroup;
  calculatedPrice: number = 0;
  $onQuantityChanges?: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private formBuild: FormBuilder, private spinnerService: SpinnerService) { }

  ngOnDestroy(): void {
    this.$onQuantityChanges?.unsubscribe();
  }

  ngOnInit(): void {
    this.itemsForReturn = this.activatedRoute.snapshot.data['resolve'].data as ItemForReturn;
    this.calculatedPrice = this.itemsForReturn.price;
    this.buildFormGroup();
  }

  buildFormGroup() {
    this.formGroup = this.formBuild.group({
      size: [null],
      quantity: [1]
    });
    this.bindQuantityChanges();
  }

  bindQuantityChanges() {
    this.$onQuantityChanges = this.formGroup.get('quantity')?.valueChanges.subscribe(value => {
      this.calculatedPrice = this.itemsForReturn.price * value;
    });
  }

  addToCart() {
    let model = this.formGroup.value as { size: number, quantity: number };
    this.spinnerService.toggleSpinner();
    setTimeout(() => {
      this.spinnerService.toggleSpinner();
      this.router.navigate(['/cart']);
    }
      , 2000);
  }
}