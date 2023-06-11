import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { query } from '@angular/animations';
import { NguoidungServices } from 'src/app/services/nguoidung.service';
import { QuyenService } from 'src/app/services/quyen.service';
@Component({
  selector: 'app-sua-kh',
  templateUrl: './sua-kh.component.html',
  styleUrls: ['./sua-kh.component.css']
})
export class SuaKhComponent {
  submited: boolean = false;
  Kh:any;
  Q:any;
  id:any;
  myPro:any;
  themkh= this.fb.group({
    makh:[],
    tenkh:['',Validators.required],
    diachi:['',Validators.required],
    tk:['',Validators.required],
    mk:['',Validators.required],
    sdt:['',Validators.required],
    maquyen:['',Validators.required],
  });
  constructor(private fb:FormBuilder,
    private kh:NguoidungServices,
    private _router:Router,
    private router:ActivatedRoute,
    private q:QuyenService
    ){}
    ngOnInit(): void {
      this.q.getList().subscribe(res =>{
        this.Q =res;
      })
      this.router.paramMap.subscribe(query =>{
        this.id = query.get("id");
        this.kh.getById(this.id).subscribe(res =>{
          this.myPro =res;
          this.themkh = this.fb.group({
            makh:[this.myPro[0].makh,Validators.required],
            tenkh:[this.myPro[0].tenkh,Validators.required],
            diachi:[this.myPro[0].diachi,Validators.required],
            tk:[this.myPro[0].tk,Validators.required],
            mk:[this.myPro[0].mk,Validators.required],
            sdt:[this.myPro[0].sdt,Validators.required],
            maquyen:[this.myPro[0].maquyen,Validators.required],
          })
        })
      })
    }
    get f(){return this.themkh.controls;}
      onsubmit():any{
        this.submited = true;
        if(this.themkh.invalid){
          return false;
        }
        this.kh.update(this.themkh.value).subscribe(res =>{
          this._router.navigate(['khachhang'])
        });
      }
}
