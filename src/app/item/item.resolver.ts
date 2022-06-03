import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, tap } from "rxjs";
import { ItemForReturn } from "../models/items/item-for-return";
import { ResponseResult } from "../models/shared/response.result.model";
import { MockupService } from "../services/mockup.service";

@Injectable({ providedIn: 'root' })
export class ItemResolver implements Resolve<ResponseResult<ItemForReturn>> {
    constructor(private mockupService: MockupService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<ResponseResult<ItemForReturn>> | Promise<ResponseResult<ItemForReturn>> | ResponseResult<ItemForReturn> {
        let id: number = parseInt(route.params['id']);
        return this.mockupService.getItemById(id).pipe(tap(
            v => {
                if (v.success === false || v.warning === true) {
                    console.log(v.message);
                }
            },
            err => {
                console.log(err);
            }));
    }
}