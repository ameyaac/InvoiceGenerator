import { ParticularItem } from "./particular-item";

export interface ParticularTotal {
    items: ParticularItem[];
    subTotal: number;
    discount: number;
    tax: number;
    grandTotal: number;
}
