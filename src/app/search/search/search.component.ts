import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemForList } from 'src/app/models/items/ItemForList.model';
import { MockupService } from 'src/app/services/mockup.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  itemsForList!: ItemForList[];


  constructor(private mockupService: MockupService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  search(term: string) {
    this.mockupService.searchItemByTerm(term).subscribe(data => {
      this.itemsForList = data.data;
    });
  }

  ngOnInit(): void {
    this.itemsForList = this.activatedRoute.snapshot.data['resolve'].data;
  }


  routeToItem(id: number) {
    this.router.navigate([`/item/${id}`]);
  }
}