import { AfterViewInit, Component, Renderer2, OnInit, } from '@angular/core';
import { LoaiService } from '../services/loai.service';
import { TgiaService } from '../services/tgia.service';
import { TruyenService } from '../services/truyen.service';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../services/home.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-loaisp',
  templateUrl: './loaisp.component.html',
  styleUrls: ['./loaisp.component.css']
})
export class LoaispComponent {
  user:any;
  id:number =0;
  term:any;
  Truyen:any;
  p:number=1;
  carts:any=this.home.GetCarts();

  constructor(private truyen: TruyenService,
     private loai: LoaiService, 
     private tgia: TgiaService,
      private _route: ActivatedRoute,
      private home:HomeService) { }
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')||'[]');

    this.id =this._route.snapshot.params['id'];
    
    this.truyen.getByCat(this.id).subscribe(data =>{
      this.Truyen =data;
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

