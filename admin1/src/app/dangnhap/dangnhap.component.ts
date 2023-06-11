import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { query } from '@angular/animations';
import { NguoidungServices } from '../services/nguoidung.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent {
  submited: boolean = false;
  Nd:any;
  login= this.fb.group({
    tk:['',Validators.required],
    mk:['',Validators.required],
  });
  
  constructor(private fb:FormBuilder,
    private nd:NguoidungServices,
    private _router:Router

    ){}
    ngOnInit(): void {
      
    }
    get f(){return this.login.controls;}
      onsubmit():any{
        this.submited = true;
        if(this.login.invalid){
          return false;
        }
         this.nd.login(this.login.value.tk,this.login.value.mk).subscribe(res =>{
          if(res[0].makh && res[0].maquyen==1 ||res[0].maquyen==3){
            localStorage.setItem('user',JSON.stringify(res[0]));
            Swal.fire({
              icon: 'success',
              title: 'Đăng nhập thành công',
              showConfirmButton: false,
              timer: 5000
            })
              this._router.navigate(['./admin']);
          }
            else{
              Swal.fire('Không thể truy cập')
            }
        });
      }
}

