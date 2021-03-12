import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css']
})
export class CartStatusComponent implements OnInit {
  totalAmount:number=0
  totalQuantity:number=0

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.totalAmount.subscribe(res=>this.totalAmount=res)
    this.cartService.totalQuantity.subscribe(res=>this.totalQuantity=res)
  }

}
