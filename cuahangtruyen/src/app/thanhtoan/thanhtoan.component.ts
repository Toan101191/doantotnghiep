import { Component,OnInit } from '@angular/core';
import { NguoidungServices } from '../services/nguoidung.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HomeService } from '../services/home.service';
import { FormBuilder, Validators } from '@angular/forms';
import { HoadonService } from '../services/hoadon.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-thanhtoan',
  templateUrl: './thanhtoan.component.html',
  styleUrls: ['./thanhtoan.component.css']
})
export class ThanhtoanComponent implements OnInit {
  carts:any={};
  totalPrice: number= this.home.getCartTotalPrice();
  user:any;
  currentDate: Date;
  submited: boolean = false;
  themhd = this.fb.group({
    makh: ['', Validators.required],
    ngaygd: [new Date(), Validators.required],
    gia: [this.totalPrice, Validators.required],
    matruyen: ['', Validators.required],
    soluong: ['', Validators.required],
  });
  constructor(
    private hd:HoadonService,
    private fb:FormBuilder,
    private nd:NguoidungServices,
    private _router:Router,
    private home:HomeService,
    private api:HttpClient,
    
    ){this.currentDate = new Date();}
  ngOnInit(): void{
    this.user = JSON.parse(localStorage.getItem('user')||'[]');
    this.carts = this.home.GetCarts();
    this.themhd = this.fb.group({
      makh: [this.user.makh, Validators.required],
      ngaygd: [new Date(), Validators.required],
      gia: [this.totalPrice, Validators.required],
      matruyen: [this.carts.matruyen, Validators.required],
      soluong: [this.carts.soluong, Validators.required],
    });
  }
  get f() { return this.themhd.controls; }
  post(value:any):void{
    var matr = (document.getElementById("matruyen") as HTMLInputElement).value;
    var soluong = (document.getElementById("soluong") as HTMLInputElement).value;

    let obj:any={};
    obj = {
      "hoadon": {
        "makh": value.makh,
        "ngaygd":value.ngaygd,
        "gia": value.gia
      },
      "donhang": {
        "tinhtrang": 1,
      }
    }
    obj.chitiethoadon=[];
    this.carts.forEach((element:any) => {
        obj.chitiethoadon.push({
          "matruyen": element.matruyen,
          "soluong": Number(element.soluong)
        })
    });
    
    console.log(obj);
    this.api.post('https://localhost:7173/api/Hoadon',obj).subscribe(x=>{
      Swal.fire({
        icon: 'success',
        padding:'top',
        title: 'Cảm ơn bạn đã mua hàng',
        showConfirmButton: false,
        timer: 5000
      })
      this.clearcart();
      this._router.navigate(['/'])

      console.log(obj);
    })  
  }
  clearcart(){
    sessionStorage.clear();
  }
}
