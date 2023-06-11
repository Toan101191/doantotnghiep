import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TruyenService } from '../services/truyen.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { TgiaService } from '../services/tgia.service';
import { LoaiService } from '../services/loai.service';
import { HomeService } from '../services/home.service';
import { NguoidungServices } from '../services/nguoidung.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.component.html',
  styleUrls: ['./chitiet.component.css']
})
export class ChitietComponent {
  user:any;
  submited: boolean = false;
  id:number =0;
  Dsl:any;
  Truyen:any;
  Tgia:any;
  Loai:any;
  carts:any=this.home.GetCarts();
  constructor(private _route:ActivatedRoute ,
    private truyen:TruyenService,
    private fb: FormBuilder,
    private router: Router,
    private tgia:TgiaService,
    private loai:LoaiService,
    private home:HomeService
  ){}
  gettg(){
    this.tgia.getList().subscribe(res =>{
      this.Tgia =res;
    })
  }
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')||'[]');

    this.gettg();
    this.id =this._route.snapshot.params['id'];
    this.truyen.getById(this.id).subscribe(data =>{
      this.Truyen =data;
      
      this.truyen.getByidc(data[0].matl).subscribe(data =>{
        this.Dsl =data;
      })
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
    })    // this.router.navigate([['chitiet/:id']]);

  }

}
