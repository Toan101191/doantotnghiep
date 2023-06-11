import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { query } from '@angular/animations';
import { HoadonService } from 'src/app/services/hoadon.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-suadh',
  templateUrl: './suadh.component.html',
  styleUrls: ['./suadh.component.css']
})
export class SuadhComponent {
  submited: boolean = false;
  Dh:any;
  id:any;
  myPro:any;
  suadh= this.fb.group({
    madon:[],
    tinhtrang:['',Validators.required],
    mahd:['',Validators.required],
    mact:['',Validators.required],
    makh:['',Validators.required],
  });
  constructor(private fb:FormBuilder,
    private hd:HoadonService,
    private _router:Router,
    private router:ActivatedRoute
    ){}
    ngOnInit(): void {
      this.router.paramMap.subscribe(query =>{
        this.id = query.get("id");
        this.hd.getById3(this.id).subscribe(res =>{
          this.myPro =res;
          this.suadh = this.fb.group({
            madon:[this.myPro[0].madon,Validators.required],
            tinhtrang:[this.myPro[0].tinhtrang,Validators.required],
            mahd:[this.myPro[0].mahd,Validators.required],
            mact:[this.myPro[0].mact,Validators.required],
            makh:[this.myPro[0].makh,Validators.required],
          })
        })
      })
    }
    get f(){return this.suadh.controls;}
      onsubmit():any{
        this.submited = true;
        if(this.suadh.invalid){
          return false;
        }
        this.hd.update1(this.suadh.value).subscribe(res =>{
          Swal.fire({
            icon: 'success',
            showConfirmButton: false,
            width:'200px',
            timer: 5000
          })
          this._router.navigate(['/'])
        });
      }
}

