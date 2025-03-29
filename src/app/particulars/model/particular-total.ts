import { ParticularItem } from "./particular-item";

export interface ParticularTotal {
    items: ParticularItem[];
    discount: number;
    tax: number;
}
