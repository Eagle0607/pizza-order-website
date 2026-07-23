import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PizzaService {

  apiURL = "http://localhost:5000/api";

  constructor(private http: HttpClient) { }

  getPizzas() {
    return this.http.get(this.apiURL + "/pizzas");
  }

  getIngredients() {
    return this.http.get(this.apiURL + "/ingredients");
  }

  getCrusts() {
    return this.http.get(this.apiURL + "/crusts");
  }

  getSauces() {
    return this.http.get(this.apiURL + "/sauces");
  }

  getCheeses() {
    return this.http.get(this.apiURL + "/cheeses");
  }

  getCart() {
    return this.http.get(this.apiURL + "/cart");
  }

  addToCart(data: any) {
    return this.http.post(this.apiURL + "/cart", data);
  }

  updateCart(id: any, data: any) {
    return this.http.put(this.apiURL + "/cart/" + id, data);
  }

  deleteCart(id: any) {
    return this.http.delete(this.apiURL + "/cart/" + id);
  }

}