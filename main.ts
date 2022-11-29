import { Food } from "./src/classes/food";
import { BrazilTaxVisitor } from "./src/visitors/tax/BrazilTaxVisitor";

const hamburger = new Food('Hamburger', 10);

const cart = [
  { name: hamburger.getName(), price: hamburger.getPrice(), tax: 0 }
];

console.log('\nCurrent Cart: ' + JSON.stringify(cart) + '\n');

const brazilTaxVisitor = new BrazilTaxVisitor();

cart.map((c) => c.tax = hamburger.getTaxPrice(brazilTaxVisitor));

console.log('\nCart With TAX: ' + JSON.stringify(cart) + '\n');