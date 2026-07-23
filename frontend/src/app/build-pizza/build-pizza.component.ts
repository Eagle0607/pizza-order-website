import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-build-pizza',
  templateUrl: './build-pizza.component.html',
  styleUrls: ['./build-pizza.component.css']
})

export class BuildPizzaComponent implements OnInit {

  ingredients: any[] = []
  crusts: any[] = []
  sauces: any[] = []
  cheeses: any[] = []

  selectedIngredients: any[] = []
  selectedCrust: any = null
  selectedSauce: any = null
  selectedCheese: any = null

  totalCost: number = 0

  customPizzaCount: number = 1

  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {

    this.pizzaService.getIngredients()
      .subscribe((data: any) => {
        this.ingredients = data
      })

    this.pizzaService.getCrusts()
      .subscribe((data: any) => {
        this.crusts = data
      })

    this.pizzaService.getSauces()
      .subscribe((data: any) => {
        this.sauces = data
      })

    this.pizzaService.getCheeses()
      .subscribe((data: any) => {
        this.cheeses = data
      })

  }

  toggleIngredient(event: any, item: any) {

    if (event.target.checked) {

      this.selectedIngredients.push(item)

    }
    else {

      this.selectedIngredients =
        this.selectedIngredients.filter(i => i._id !== item._id)

    }

    this.calculateTotal()

  }

  selectCrust(crust: any) {

    this.selectedCrust = crust
    this.calculateTotal()

  }

  selectSauce(sauce: any) {

    this.selectedSauce = sauce
    this.calculateTotal()

  }

  selectCheese(cheese: any) {

    this.selectedCheese = cheese
    this.calculateTotal()

  }

  calculateTotal() {

    this.totalCost = 0

    this.selectedIngredients.forEach(i => {
      this.totalCost += i.price
    })

    if (this.selectedCrust) {
      this.totalCost += this.selectedCrust.price
    }

    if (this.selectedSauce) {
      this.totalCost += this.selectedSauce.price
    }

    if (this.selectedCheese) {
      this.totalCost += this.selectedCheese.price
    }

  }

  buildPizza() {

    if (!this.selectedCrust || !this.selectedSauce || !this.selectedCheese) {

      alert("Please select Crust (*), Cheese (*), and Sauce (*)")

      return

    }

    const ingredientNames = this.selectedIngredients
      .map(i => i.name)
      .join(", ")

    const pizza = {

      name: "Custom Pizza " + this.customPizzaCount,

      price: this.totalCost,

      quantity: 1,

      image: "assets/veggie.jpg",

      ingredients: ingredientNames,

      crust: this.selectedCrust.name,

      cheese: this.selectedCheese.name,

      sauce: this.selectedSauce.name

    }

    this.pizzaService.addToCart(pizza)
      .subscribe(() => {

        alert("Custom Pizza added to cart")

        this.customPizzaCount++

      })

  }

}