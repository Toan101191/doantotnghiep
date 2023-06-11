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
  user:any;
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
      this.user = JSON.parse(localStorage.getItem('user')||'[]');

    }
    get f(){return this.login.controls;}
      onsubmit():any{
        this.submited = true;
        if(this.login.invalid){
          return false;
        }
         this.nd.login(this.login.value.tk,this.login.value.mk).subscribe(res =>{
          if(res[0].makh ){
            localStorage.setItem('user',JSON.stringify(res[0]));

          alert('ĐĂNG NHẬP THÀNH CÔNG')
          window.location.reload()
          }
            else{
              Swal.fire('Sai tài khoản hoặc mật khẩu')

            }
        });
      }
}

