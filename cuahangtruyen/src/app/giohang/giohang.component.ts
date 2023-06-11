import { Component,OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-giohang',
  templateUrl: './giohang.component.html',
  styleUrls: ['./giohang.component.css']
})
export class GiohangComponent {
  carts:any=[];
  totalPrice: number= this.home.getCartTotalPrice();
  constructor(private home:HomeService,
    ){}
  ngOnInit():void{
    this.carts = this.home.GetCarts();
  }
  subTotal(cart:any){
    return cart.soluong * cart.gia;
  }
  updateSl(idx:number,ev: any){
    let newsL = ev.target.value;
    newsL = newsL > 0? newsL:1;
    newsL = newsL <=100 ? newsL:100;
    this.carts[idx].soluong = newsL;
    this.home.SaveCart(this.carts);
    this.totalPrice= this.home.getCartTotalPrice();

  }
  giamsl(idx:number,qtt:number){
    let newsL =qtt-1;
    newsL = newsL > 0? newsL:1;
    this.carts[idx].soluong = newsL;
    this.home.SaveCart(this.carts);
    this.totalPrice= this.home.getCartTotalPrice();

  }
  tangsl(idx:number,qtt:number){
    let newsL =qtt+1;
    newsL = newsL <=100 ? newsL:100;
    this.carts[idx].soluong = newsL;
    this.home.SaveCart(this.carts);
    this.totalPrice= this.home.getCartTotalPrice();

  }
  removecart(idx:number){
    if(confirm('bạn có muốn xoá sản phẩm này không?')){
      this.carts.splice(idx, 1); 
    this.home.SaveCart(this.carts);
    this.totalPrice= this.home.getCartTotalPrice();
    }
  }
  clearcart(){
    sessionStorage.clear();
    window.location.reload()
  }
}
