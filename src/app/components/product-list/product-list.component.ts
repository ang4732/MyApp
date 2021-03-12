import { CartService } from './../../services/cart.service';
import { CartItem } from './../../common/cart-item';
import { Product } from './../../common/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[]=[]

  constructor(private productService:ProductService, private route:ActivatedRoute,
    private cartService:CartService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>this.process())    
  }


  process(){
    if (this.route.snapshot.paramMap.has("id")){
        var parametro:number=+ this.route.snapshot.paramMap.get("id")
        this.productService.getProductsByCategory(parametro).subscribe(res=>this.products=res)
    }
    else{
      this.productService.getProducts().subscribe(res=>this.products=res)
    }
  }

  addToCart(product:Product){
    var cartItem:CartItem=new CartItem(product)
    this.cartService.addToCart(cartItem)

  }



}
