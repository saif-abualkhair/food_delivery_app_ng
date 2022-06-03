import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, tap } from "rxjs";
import { ItemForList } from "../models/items/ItemForList.model";
import { ResponseResult } from "../models/shared/response.result.model";
import { MockupService } from "../services/mockup.service";

@Injectable({ providedIn: 'root' })
export class SearchResolver implements Resolve<ResponseResult<ItemForList[]>> {
    constructor(private mockupService: MockupService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<ResponseResult<ItemForList[]>> | Promise<ResponseResult<ItemForList[]>> | ResponseResult<ItemForList[]> {
        return this.mockupService.getItemsForList().pipe(tap(v => {
            if (v.success === false || v.warning === true) {
                console.log(v.message);
            }
        },
            err => {
                console.log(err);
            }));
    }
}