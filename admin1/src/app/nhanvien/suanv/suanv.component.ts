import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { query } from '@angular/animations';
import { NhanvienService } from 'src/app/services/nhanvien.service';
@Component({
  selector: 'app-suanv',
  templateUrl: './suanv.component.html',
  styleUrls: ['./suanv.component.css']
})
export class SuanvComponent {
  submited: boolean = false;
  Nv:any;
  id:any;
  myPro:any;
  themnv= this.fb.group({
    manv:[],
    tennv:['',Validators.required],
    diachi:['',Validators.required],
    hinhanh:['',Validators.required],
    sdt:['',Validators.required],
  });
  constructor(private fb:FormBuilder,
    private nv:NhanvienService,
    private _router:Router,
    private router:ActivatedRoute
    ){}
    ngOnInit(): void {
      this.router.paramMap.subscribe(query =>{
        this.id = query.get("id");
        this.nv.getById(this.id).subscribe(res =>{
          this.myPro =res;
          this.themnv = this.fb.group({
            manv:[this.myPro[0].manv,Validators.required],
            tennv:[this.myPro[0].tennv,Validators.required],
            diachi:[this.myPro[0].diachi,Validators.required],
            hinhanh:[this.myPro[0].hinhanh,Validators.required],
            sdt:[this.myPro[0].sdt,Validators.required]
          })
        })
      })
    }
    get f(){return this.themnv.controls;}
      onsubmit():any{
        this.submited = true;
        if(this.themnv.invalid){
          return false;
        }
        this.nv.update(this.themnv.value).subscribe(res =>{
          this._router.navigate(['nhanvien'])
        });
      }
}
