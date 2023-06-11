import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoaiService } from 'src/app/services/loai.service'; 

@Component({
  selector: 'app-them-loai',
  templateUrl: './them-loai.component.html',
  styleUrls: ['./them-loai.component.css']
})
export class ThemLoaiComponent {
  submited: boolean = false;
  Loai:any;
  themloai= this.fb.group({
    tentl:['',Validators.required],
    mota:['',Validators.required],
});
constructor(private fb:FormBuilder,
  private loai:LoaiService,
  private _router:Router

  ){}
  get f(){return this.themloai.controls;}
      onsubmit():any{
        this.submited = true;
        if(this.themloai.invalid){
          return false;
        }
        this.loai.add(this.themloai.value).subscribe(res =>{
          this._router.navigate(['loai'])
        });
      }
}

