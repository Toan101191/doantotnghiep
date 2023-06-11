import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { query } from '@angular/animations';
import { QuyenService } from 'src/app/services/quyen.service';

@Component({
  selector: 'app-sua-q',
  templateUrl: './sua-q.component.html',
  styleUrls: ['./sua-q.component.css']
})
export class SuaQComponent {
  submited: boolean = false;
  Q:any;
  id:any;
  myPro:any;
  themquyen= this.fb.group({
    maquyen:[],
    tenquyen:['',Validators.required],
  });
  constructor(private fb:FormBuilder,
    private q:QuyenService,
    private _router:Router,
    private router:ActivatedRoute
    ){}
    ngOnInit(): void {
      this.router.paramMap.subscribe(query =>{
        this.id = query.get("id");
        this.q.getById(this.id).subscribe(res =>{
          this.myPro =res;
          this.themquyen = this.fb.group({
            maquyen:[this.myPro[0].maquyen,Validators.required],
            tenquyen:[this.myPro[0].tenquyen,Validators.required],
          })
        })
      })
    }
    get f(){return this.themquyen.controls;}
      onsubmit():any{
        this.submited = true;
        if(this.themquyen.invalid){
          return false;
        }
        this.q.update(this.themquyen.value).subscribe(res =>{
          alert('Sửa thành công')
          this._router.navigate(['quyen'])
        });
      }
}
