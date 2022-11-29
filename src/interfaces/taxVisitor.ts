import { Food } from "../classes/food";

export interface TaxVisitor {
  calculateTaxesForFood(food: Food): number;
}