import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NguoidungServices } from 'src/app/services/nguoidung.service';
import { QuyenService } from '../services/quyen.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dangki',
  templateUrl: './dangki.component.html',
  styleUrls: ['./dangki.component.css']
})
export class DangkiComponent {
  submited: boolean = false;
  Kh:any;
  Q:any;
  themkh= this.fb.group({
    tenkh:['',Validators.required],
    sdt:['',Validators.required],
    diachi:['',Validators.required],
    tk:['',Validators.required],
    mk:['',Validators.required],
  });
  constructor(private fb:FormBuilder,
    private kh:NguoidungServices,
    private _router:Router,
    private q:QuyenService

    ){}
    ngOnInit(): void {
      this.q.getList().subscribe(res =>{
        this.Q =res;
      })
    }
    get f(){return this.themkh.controls;}
      onsubmit():any{
        this.submited = true;
        if(this.themkh.invalid){
          return false;
        }
        
        this.kh.isexist(this.themkh.value.tk).subscribe(res => {
          if (res) {
            alert('Tài khoản đã tồn tại');
          } else {
            this.kh.add(this.themkh.value).subscribe(() => {
              Swal.fire({
                icon: 'success',
                title: 'Đăng kí thành công',
                showConfirmButton: false,
                width:'300px',
          
                timer: 5000
              })    // this.router.navigate([['chitiet/:id']]);
              this._router.navigate(['login']);
            });
          }
        });
      }
}

