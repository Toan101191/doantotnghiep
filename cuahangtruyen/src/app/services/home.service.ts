import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }
  GetCarts(){
    let cartJson =sessionStorage.getItem('cart');
    if(cartJson){
      return JSON.parse(cartJson);
    }else{
      return [];
    }
  }
  SaveCart(carts:any){
    let cartJson =JSON.stringify(carts);
      sessionStorage.setItem('cart',cartJson);
  }
  getCartTotalPrice(){
    let  carts = this.GetCarts();
    let total : number =0 ;
    carts.forEach((item:any) => {
      total +=item.soluong * item.gia;
    });
    return total;
  }
}
