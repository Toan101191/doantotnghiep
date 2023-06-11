import { Route, Router } from '@angular/router';
import { LoaiService } from '../services/loai.service';
import { TruyenService } from '../services/truyen.service';
import {AfterViewInit, Component,Renderer2 , OnInit,} from '@angular/core';
import { TgiaService } from '../services/tgia.service';
import { TintucService } from '../services/tintuc.service';
import { SlideService } from '../services/slide.service';
import { HomeService } from '../services/home.service';
import { NguoidungServices } from '../services/nguoidung.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user:any;
  searchText:any;
  Truyen:any;
  Loai:any;
  Tgia:any;
  New:any;
  newhome:any;
  Tt:any;
  Sl:any;
  term:any;
  p:number=1;
  carts:any=this.home.GetCarts();
  constructor(private truyen:TruyenService,
    private loai:LoaiService,
    private tgia:TgiaService,
    private tt:TintucService,
    private _router: Router,
    private sl:SlideService,
    private home:HomeService
    ) { }
  
    ngOnInit(): void{
      this.user = JSON.parse(localStorage.getItem('user')||'[]');
      this.truyen.getList().subscribe(res =>{
        this.Truyen = res;
      })
      this.truyen.Getnew().subscribe(res =>{
        this.New = res;
      })
      this.truyen.Getnewhome().subscribe(res =>{
        this.newhome= res;
      })
      this.tgia.getList().subscribe(res =>{
        this.Tgia = res;  
      })
      this.loai.getList().subscribe(res =>{
        this.Loai = res;
      })
      this.tt.getNew().subscribe(res =>{
        this.Tt = res;
      })
      this.sl.getList().subscribe(res =>{
        this.Sl = res;
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
      console.log(this.carts)
      Swal.fire({
        icon: 'success',
        title: 'Thêm vào giỏ hàng thành công',
        width:'300px',
        showConfirmButton: false,
        timer: 5000
      })

    }
  }
  