import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Products } from '../model/products';



@Injectable({
  providedIn: 'root'
})
export class ProServiceService {
  product: Products[];
  selectedPro: Products;
  readonly baseURL = 'http://localhost:50350/api/list/';

  constructor(private http: HttpClient) { }
  getAllProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.baseURL);
  }



  postNewProducts(product) {
    console.log(product);
   
    return this.http.post(this.baseURL + 'add', product);


  }

  updateProducts(product) {
    console.log(product);
    console.log(product.p_id);
    
    
    return this.http.put(this.baseURL + 'update/', product);
  }

  deleteProducts(p_id: number) {
    console.log(this.baseURL + `${p_id}`);
    return this.http.delete(this.baseURL + `${p_id}`);
  }
 
}