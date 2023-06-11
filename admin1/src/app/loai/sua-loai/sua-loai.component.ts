import { query } from '@angular/animations';
import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { LoaiService } from 'src/app/services/loai.service'; 

@Component({
  selector: 'app-sua-loai',
  templateUrl: './sua-loai.component.html',
  styleUrls: ['./sua-loai.component.css']
})
export class SuaLoaiComponent {
  submited: boolean = false;
  Loai:any;
  id:any;
  myPro:any;
  themloai= this.fb.group({
    matl:[],
    tentl:['',Validators.required],
    mota:['',Validators.required],
});
constructor(private fb:FormBuilder,
  private loai:LoaiService,
  private _router:Router,
  private router:ActivatedRoute

  ){}
  ngOnInit():void{
    this.router.paramMap.subscribe(query =>{
      this.id =query.get("id");
      this.loai.getById(this.id).subscribe(res =>{
        this.myPro = res;
        this.themloai = this.fb.group({
          matl :[this.myPro[0].matl,Validators.required],
          tentl:[this.myPro[0].tentl,Validators.required],
          mota:[this.myPro[0].mota,Validators.required]
        });
      })
    })
  }
  get f(){return this.themloai.controls;}
      onsubmit():any{
        this.submited = true;
        if(this.themloai.invalid){
          return false;
        }
        this.loai.update(this.themloai.value).subscribe(res =>{
          alert('Sửa thành công')
          console.log(this.themloai.value)
          this._router.navigate(['loai'])
        });
      }
}
