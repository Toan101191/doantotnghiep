import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NhanvienService } from 'src/app/services/nhanvien.service';


@Component({
  selector: 'app-themnv',
  templateUrl: './themnv.component.html',
  styleUrls: ['./themnv.component.css']
})
export class ThemnvComponent {
  submited: boolean = false;
  Nv:any;
  themnv= this.fb.group({
    tennv:['',Validators.required],
    sdt:['',Validators.required],
    diachi:['',Validators.required],
    hinhanh:['',Validators.required],
  });
  constructor(private fb:FormBuilder,
    private nv:NhanvienService,
    private _router:Router

    ){}
    ngOnInit(): void {
      
    }
    get f(){return this.themnv.controls;}
      onsubmit():any{
        this.submited = true;
        if(this.themnv.invalid){
          return false;
        }
        this.nv.add(this.themnv.value).subscribe(res =>{
          this._router.navigate(['nhanvien'])
        });
      }
}

