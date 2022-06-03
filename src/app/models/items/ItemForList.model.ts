import { ForListBase } from "../shared/for-list.base";
import { TimeToPrepare } from "./time-to-prepare.model";

export interface ItemForList extends ForListBase{
    title: string;
    price: number;
    imageUrl: string;
    timeToPrepare:TimeToPrepare;
    rating: number;
}