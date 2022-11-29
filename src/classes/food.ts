import { Product } from "../interfaces/product";
import { TaxVisitor } from "../interfaces/taxVisitor";

export class Food implements Product {
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getName(): string {
    return this.name;
  }
  getPrice(): number {
    return this.price;
  }

  getTaxPrice(v: TaxVisitor): number {
    return v.calculateTaxesForFood(this);
  }
}