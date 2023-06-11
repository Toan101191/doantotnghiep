import { Component,OnInit } from '@angular/core';
import { TruyenService } from '../services/truyen.service';
import { LoaiService } from '../services/loai.service';
import { HomeService } from '../services/home.service';
import { NguoidungServices } from '../services/nguoidung.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-sanpham',
  templateUrl: './sanpham.component.html',
  styleUrls: ['./sanpham.component.css']
})
export class SanphamComponent {
  user:any;
  Truyen:any;
  p:number=1;
  term:any;
  Loai:any;
  carts:any=this.home.GetCarts();
constructor(private truyen:TruyenService,
  private loai:LoaiService,
  private home:HomeService,
  ){}
ngOnInit(): void{
  this.user = JSON.parse(localStorage.getItem('user')||'[]');

  this.truyen.getList().subscribe(res =>{
    this.Truyen = res;
  })
  this.loai.getList().subscribe(res =>{
    this.Loai = res;
  })
}
login1(){
  alert('Đăng nhập để thực hiện')
  window.location.reload()
}
onAddTocard(Truyen:any){
  let idx = this.carts.findIndex((item: any) => {
    return item.matruyen == Truyen.matruyen
  });
  if(idx >= 0){
    this.carts[idx].soluong +=1;
  }
  else{
    let cartitem: any={
      hinhanh: Truyen.hinhanh,
      matruyen: Truyen.matruyen,
      tentruyen: Truyen.tentruyen,
      gia:Truyen.gia,
      soluong:1,
      subtotal:function(){
        return this.gia *this.soluong;
      }
    }
    this.carts.push(cartitem);
  }
  //lưu vào locostorage
  this.home.SaveCart(this.carts);

  Swal.fire({
    icon: 'success',
    title: 'Thêm vào giỏ hàng thành công',
    showConfirmButton: false,
    width:'300px',

    timer: 5000
  })
}
}
