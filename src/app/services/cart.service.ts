import { CartItem } from './../common/cart-item';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  

  //totalQuantity: Subject<number> = new Subject<number>()
  //totalAmount: Subject<number> = new Subject<number>()

  totalQuantity: BehaviorSubject<number> = new BehaviorSubject<number>(0)
  totalAmount: BehaviorSubject<number> = new BehaviorSubject<number>(0)

  cartItems: CartItem[] = []

  constructor() { }

  addToCart(cartItem: CartItem) {
    var exitsItem: CartItem = null
    exitsItem = this.cartItems.find(c => cartItem.id == c.id)
    if (exitsItem != null) {
      exitsItem.quantity++
      //exitsItem.quantity=exitsItem.quantity+1
    }
    else {
      this.cartItems.push(cartItem)
    }
    this.computeTotals()
  }


  computeTotals() {
    var totalQuanty: number = 0
    var totalAmount: number = 0
    this.cartItems.forEach(ci => {
      totalQuanty += ci.quantity
      totalAmount += ci.unitPrice * ci.quantity
    })
    this.totalQuantity.next(totalQuanty)
    this.totalAmount.next(totalAmount)
  }

  clearAll(){
    this.cartItems=[]
    this.totalAmount.next(0)
    this.totalQuantity.next(0)
  }


}
