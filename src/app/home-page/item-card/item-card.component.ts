import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemForList } from 'src/app/models/items/ItemForList.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  @Input() itemForList!: ItemForList;
  @Input() isLastItem: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  routeToItem() {
    this.router.navigate([`/item/${this.itemForList.id}`]);
  }
}
