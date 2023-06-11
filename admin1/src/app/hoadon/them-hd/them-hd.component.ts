import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { HoadonService } from 'src/app/services/hoadon.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-them-hd',
  templateUrl: './them-hd.component.html',
  styleUrls: ['./them-hd.component.css']
})
export class ThemHdComponent {
  submited: boolean = false;
  Hd:any;
  themhd= this.fb.group({
    makh:['',Validators.required],
    ngaygd:['',Validators.required],
    gia:['',Validators.required],
    matruyen:['',Validators.required],
    soluong:['',Validators.required],
  });
  constructor(private fb:FormBuilder,
    private hd:HoadonService,
    private _router:Router,
    private api:HttpClient
    ){}
    ngOnInit(): void {
      
    }
    get f(){return this.themhd.controls;}
      onsubmit():any{
        this.submited = true;
        if(this.themhd.invalid){
          return false;
        }
        this.hd.add(this.themhd.value).subscribe(res =>{
          console.log(this.themhd)
          this._router.navigate(['hoadon'])
        });
      }
      post(value:any):void{
        let obj = {
          "hoadon": {
            "makh": value.makh,
            "ngaygd": "2023-06-01T02:37:44.027Z",
            "gia": value.gia
          },
          "chitiethoadon": {
            "matruyen": value.matruyen,
            "soluong": value.soluong
          },
          "donhang": {
            "tinhtrang": 1,
          }
        }
        this.api.post('https://localhost:7173/api/Hoadon',obj).subscribe(x=>{
          alert("Thêm thành công")
          this._router.navigate(['hoadon'])

          console.log(obj);
        })
          
      }
}



