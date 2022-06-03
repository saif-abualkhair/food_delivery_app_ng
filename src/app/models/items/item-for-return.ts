import { ForReturnBase } from "../shared/for-return.base";
import { TimeToPrepare } from "./time-to-prepare.model";
import { KeyValuePair } from "../shared/key-value-pair.model";

export interface ItemForReturn extends ForReturnBase {
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    timeToPrepare: TimeToPrepare;
    rating: number;
    sizes: KeyValuePair<number>[];
}