import { Component, OnInit } from '@angular/core';
import { CartItem } from './cart-item';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {
  cartItem : CartItem = {
    imageUrl: 'headphones.jpg',
    name: 'Auriculares',
    price: 50
  }
  constructor() { }

  ngOnInit(): void {
  }

}
