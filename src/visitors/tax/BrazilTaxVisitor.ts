import { Food } from "../../classes/food";
import { TaxVisitor } from "../../interfaces/taxVisitor";

export class BrazilTaxVisitor implements TaxVisitor {
  calculateTaxesForFood(food: Food): number {
    return food.getPrice() + (food.getPrice() * 0.1);
  }
}