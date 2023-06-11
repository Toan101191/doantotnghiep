import { TintucService } from 'src/app/services/tintuc.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-them-tin',
  templateUrl: './them-tin.component.html',
  styleUrls: ['./them-tin.component.css']
})
export class ThemTinComponent {
  submited: boolean = false;
  Tin:any;
  themtin= this.fb.group({
    tieude:['',Validators.required],
    nd:['',Validators.required],
    hinhanh:['',Validators.required],
    loaitin:['',Validators.required],
    ngay:[new Date(),Validators.required],
  });
  constructor(private fb:FormBuilder,
    private tin:TintucService,
    private _router:Router

    ){}
    ngOnInit(): void {
      
    }
    get f(){return this.themtin.controls;}
      onsubmit():any{
        this.submited = true;
        if(this.themtin.invalid){
          return false;
        }
        this.tin.add(this.themtin.value).subscribe(res =>{
          Swal.fire({
            icon: 'success',
            title: 'thêm mới thành công',
            showConfirmButton: false,
            timer: 2500
          })
          this._router.navigate(['tintuc'])
        });
      }
}
