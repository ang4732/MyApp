import { CheckoutService } from './../../services/checkout.service';
import { Purchase } from './../../common/purchase';
import { OrderItem } from './../../common/order-item';
import { Order } from './../../common/order';
import { Address } from './../../common/address';
import { Customer } from './../../common/customer';
import { CartItem } from './../../common/cart-item';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  totalAmount:number=0
  totalQuantity:number=0

  customer:Customer=new Customer()
  shippingAddress:Address=new Address()
  billingAddress:Address = new Address()

  cartItems:CartItem[]=[]

  constructor(private cartService:CartService,
    private checkoutService:CheckoutService, private router:Router) { }

  ngOnInit(): void {
     this.cartItems= this.cartService.cartItems
     this.cartService.totalAmount.subscribe(res=>this.totalAmount=res)
     this.cartService.totalQuantity.subscribe(res=>this.totalQuantity=res)
  }


  placeOrder(){
    var order=new Order()
    order.totalPrice=this.totalAmount
    order.totalQuantity = this.totalQuantity

    var orderItems:OrderItem[]=[]
    this.cartService.cartItems.forEach(ci=>{
      var oi:OrderItem=new OrderItem(ci)
      orderItems.push(oi)
    })

    var purchase:Purchase=new Purchase()
    purchase.customer = this.customer
    purchase.billingAddress = this.billingAddress
    purchase.shippingAddress = this.shippingAddress
    purchase.order = order
    purchase.orderItems = orderItems

    this.checkoutService.placeOrder(purchase).subscribe({
      next:res=>{
        this.cartService.clearAll()
        //navegar a la pagina de place order 
        this.router.navigateByUrl("/place-order/"+res.trackingNumber)
      },
      error:err=>console.log(err)
    })
  }

}
