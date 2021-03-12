import { CartItem } from './../../common/cart-item';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  totalAmount:number=0;

  items:CartItem[]=[]

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.items=this.cartService.cartItems

    this.cartService.totalAmount.subscribe(res=>this.totalAmount=res)

  }

  clearAll(){
    this.cartService.clearAll();
    this.items=[]
  }

}
