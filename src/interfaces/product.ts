import { TaxVisitor } from "./taxVisitor";

export interface Product {
  getName(): string;
  getPrice(): number;
  getTaxPrice(v: TaxVisitor): number;
}