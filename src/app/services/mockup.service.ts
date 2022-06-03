import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';
import { ItemForReturn } from '../models/items/item-for-return';
import { ItemForList } from '../models/items/ItemForList.model';
import { ResponseResult } from '../models/shared/response.result.model';

@Injectable({
  providedIn: 'root'
})
export class MockupService {

  url: string = '../assets/data/';

  constructor(private httpClient: HttpClient) { }

  getItemsForList() {
    let url = `${this.url}getItemsForList.json`;
    return this.httpClient.get<ResponseResult<ItemForList[]>>(url).pipe(
      delay(this.getSimulatdeResponseTime()));
  }

  getItemById(id: number) {
    let url = `${this.url}getItemsForReturn.json`;
    return this.httpClient.get<ResponseResult<ItemForReturn[]>>(url).pipe(
      delay(this.getSimulatdeResponseTime()),
      map(v => {
        let item = v.data.find(item => { return item.id === id; })
        return { data: item, message: '', success: true, warning: false } as ResponseResult<ItemForReturn>;
      }));
  }

  searchItemByTerm(term: string) {
    let url = `${this.url}getItemsForList.json`;
    return this.httpClient.get<ResponseResult<ItemForList[]>>(url).pipe(
      delay(this.getSimulatdeResponseTime()),
      map(v => {
        if (term === '' || term === undefined || term === null)
          return v;

        let items = v.data.filter(item => {
          return item.title.toLowerCase().includes(term.toLowerCase());
        });
        return { data: items, message: '', success: true, warning: false } as ResponseResult<ItemForList[]>;
      }));
  }

  getSimulatdeResponseTime() {
    return Math.floor(Math.random() * (2000 - 1000 + 1) + 1000);
  }
}
