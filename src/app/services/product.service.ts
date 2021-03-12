import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Product } from './../common/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<Product[]>{

    return this.getBaseProduct(environment.uriProductos)
  }

  getProductsByCategory(id:number):Observable<Product[]>{
    var urlCategory = environment.uriProductoCategoria+id
    return this.getBaseProduct(urlCategory)
  }

  getBaseProduct(url:string):Observable<Product[]>{
    return this.httpClient.get<getResponseProduct>(url).pipe(
      map(res=>res._embedded.products)
    )
  }
}

interface getResponseProduct{
  _embedded:{
    products:Product[]
  }
}




