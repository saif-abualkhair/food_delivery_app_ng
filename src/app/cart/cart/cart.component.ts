import { Component, Input, OnInit } from '@angular/core';
import { ItemForReturn } from 'src/app/models/items/item-for-return';
import { ItemForList } from 'src/app/models/items/ItemForList.model';
import { ResponseResult } from 'src/app/models/shared/response.result.model';
import { MockupService } from 'src/app/services/mockup.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  ngOnInit(): void {
  }
 
}
