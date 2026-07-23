import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  cartItems: any[] = []
  grandTotal: number = 0

  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {

    this.loadCart()

  }

  loadCart() {

    this.pizzaService.getCart().subscribe((data: any) => {

      this.cartItems = data

      this.calculateTotal()

    })

  }

  calculateTotal() {

    this.grandTotal = 0

    this.cartItems.forEach(item => {
      this.grandTotal += item.price * item.quantity
    })

  }

  increase(item: any) {

    item.quantity++

    this.pizzaService.updateCart(item._id, { quantity: item.quantity })
      .subscribe(() => this.calculateTotal())

  }

  decrease(item: any) {

    if (item.quantity > 1) {

      item.quantity--

      this.pizzaService.updateCart(item._id, {
        quantity: item.quantity
      }).subscribe(() => this.calculateTotal())

    } else {

      // quantity = 1 → delete item
      this.pizzaService.deleteCart(item._id)
        .subscribe(() => {

          this.loadCart()

        })

    }

  }

  deleteItem(id: any) {

    this.pizzaService.deleteCart(id)
      .subscribe(() => {

        this.loadCart()

      })

  }

}