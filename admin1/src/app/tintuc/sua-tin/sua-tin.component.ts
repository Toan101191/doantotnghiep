import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TintucService } from 'src/app/services/tintuc.service';
import { query } from '@angular/animations';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-sua-tin',
  templateUrl: './sua-tin.component.html',
  styleUrls: ['./sua-tin.component.css']
})
export class SuaTinComponent {
  submited: boolean = false;
  Tin:any;
  id:any;
  myPro:any;
  themtin= this.fb.group({
    matin:[],
    tieude:['',Validators.required],
    nd:['',Validators.required],
    hinhanh:['',Validators.required],
    loaitin:['',Validators.required],
    ngay:[new Date(),Validators.required],
  });
  constructor(private fb:FormBuilder,
    private tin:TintucService,
    private _router:Router,
    private router:ActivatedRoute
    ){}
    ngOnInit(): void {
      this.router.paramMap.subscribe(query =>{
        this.id = query.get("id");
        this.tin.getById(this.id).subscribe(res =>{
          this.myPro =res;
          this.themtin = this.fb.group({
            matin:[this.myPro[0].matin,Validators.required],
            tieude:[this.myPro[0].tieude,Validators.required],
            nd:[this.myPro[0].nd,Validators.required],
            hinhanh:[this.myPro[0].hinhanh,Validators.required],
            loaitin:[this.myPro[0].loaitin,Validators.required],
            ngay:[new Date(),Validators.required],          })
        })
      })
    }
    get f(){return this.themtin.controls;}
      onsubmit():any{
        this.submited = true;
        if(this.themtin.invalid){
          return false;
        }
        this.tin.update(this.themtin.value).subscribe(res =>{
          Swal.fire({
            icon: 'success',
            title: 'sửa thành công',
            showConfirmButton: false,
            timer: 2500
          })
          this._router.navigate(['tintuc'])
        });
      }
}
