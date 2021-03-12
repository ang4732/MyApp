import { environment } from './../../environments/environment';
import { Category } from './../common/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url:string ="http://localhost:8080/api/categories"

  //inyectando el objeto httpClient
  constructor(private httpClient:HttpClient) { }

  getCategories():Observable<Category[]>{
    return this.httpClient.get<getResponse>(environment.uriCategoria).pipe(
      map(res=>res._embedded.categories)
    )

  }
}

interface getResponse{
  _embedded:{
    "categories":Category[]
  }
}

