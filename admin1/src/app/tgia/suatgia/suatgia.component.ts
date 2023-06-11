import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TgiaService } from 'src/app/services/tgia.service';
import { query } from '@angular/animations';

@Component({
  selector: 'app-suatgia',
  templateUrl: './suatgia.component.html',
  styleUrls: ['./suatgia.component.css']
})
export class SuatgiaComponent {
  submited: boolean = false;
  Tgia:any;
  id:any;
  myPro:any;
  themtgia= this.fb.group({
    matg:[],
    tentg:['',Validators.required],
    diachi:['',Validators.required],
    hinhanh:['',Validators.required],
    sdt:['',Validators.required],
  });
  constructor(private fb:FormBuilder,
    private tgia:TgiaService,
    private _router:Router,
    private router:ActivatedRoute
    ){}
    ngOnInit(): void {
      this.router.paramMap.subscribe(query =>{
        this.id = query.get("id");
        this.tgia.getById(this.id).subscribe(res =>{
          this.myPro =res;
          this.themtgia = this.fb.group({
            matg:[this.myPro[0].matg,Validators.required],
            tentg:[this.myPro[0].tentg,Validators.required],
            diachi:[this.myPro[0].diachi,Validators.required],
            hinhanh:[this.myPro[0].hinhanh,Validators.required],
            sdt:[this.myPro[0].sdt,Validators.required]
          })
        })
      })
    }
    get f(){return this.themtgia.controls;}
      onsubmit():any{
        this.submited = true;
        if(this.themtgia.invalid){
          return false;
        }
        this.tgia.update(this.themtgia.value).subscribe(res =>{
          this._router.navigate(['tgia'])
        });
      }
}
