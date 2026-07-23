import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-order-pizza',
  templateUrl: './order-pizza.component.html',
  styleUrls: ['./order-pizza.component.css']
})

export class OrderPizzaComponent implements OnInit {

  pizzas:any = [];

  constructor(private pizzaService:PizzaService){}

  ngOnInit(){

    this.pizzaService.getPizzas()
    .subscribe((data:any)=>{
      this.pizzas = data;
    });

  }

  addToCart(pizza:any){

    const item = {
      name: pizza.name,
      price: pizza.price,
      quantity:1,
      image:pizza.image
    };

    this.pizzaService.addToCart(item).subscribe(()=>{
      alert("Pizza added to cart");
    });

  }

}