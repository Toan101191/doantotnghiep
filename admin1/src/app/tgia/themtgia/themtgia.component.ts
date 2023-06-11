import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { TgiaService } from 'src/app/services/tgia.service';

@Component({
  selector: 'app-themtgia',
  templateUrl: './themtgia.component.html',
  styleUrls: ['./themtgia.component.css']
})
export class ThemtgiaComponent {
  submited: boolean = false;
  Tgia:any;
  themtgia= this.fb.group({
    tentg:['',Validators.required],
    diachi:['',Validators.required],
    hinhanh:['',Validators.required],
    sdt:['',Validators.required],
  });
  constructor(private fb:FormBuilder,
    private tgia:TgiaService,
    private _router:Router

    ){}
    ngOnInit(): void {
      
    }
    get f(){return this.themtgia.controls;}
      onsubmit():any{
        this.submited = true;
        if(this.themtgia.invalid){
          return false;
        }
        this.tgia.add(this.themtgia.value).subscribe(res =>{
          this._router.navigate(['tgia'])
        });
      }
}
