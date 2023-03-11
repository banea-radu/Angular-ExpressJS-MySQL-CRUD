import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get("http://localhost:5000/api/products");
  }

  addNewProduct(product: any) {
    return this.http.post("http://localhost:5000/api/products", product);
  }

  updateProduct(product: any) {
    return this.http.put("http://localhost:5000/api/products/:" + product.CodIdx, product);
  }

  deleteProduct(product: any) {
    return this.http.delete("http://localhost:5000/api/products/" + product.CodIdx);
  }
}
