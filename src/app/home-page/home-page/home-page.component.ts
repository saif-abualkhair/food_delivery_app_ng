import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemForList } from 'src/app/models/items/ItemForList.model';
import { MockupService } from 'src/app/services/mockup.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  itemsForList!: ItemForList[]

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getItemsForList();
  }

  getItemsForList() {
    this.itemsForList = this.activatedRoute.snapshot.data['resolve'].data;
  }
}