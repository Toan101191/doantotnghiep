import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NguoidungServices } from 'src/app/services/nguoidung.service';
import { QuyenService } from 'src/app/services/quyen.service';

@Component({
  selector: 'app-them-kh',
  templateUrl: './them-kh.component.html',
  styleUrls: ['./them-kh.component.css']
})
export class ThemKhComponent {
  submited: boolean = false;
  Kh:any;
  Q:any;
  themkh= this.fb.group({
    tenkh:['',Validators.required],
    sdt:['',Validators.required],
    diachi:['',Validators.required],
    tk:['',Validators.required],
    mk:['',Validators.required],
  });
  constructor(private fb:FormBuilder,
    private kh:NguoidungServices,
    private _router:Router,
    private q:QuyenService

    ){}
    ngOnInit(): void {
      this.q.getList().subscribe(res =>{
        this.Q =res;
      })
    }
    get f(){return this.themkh.controls;}
      onsubmit():any{
        this.submited = true;
        if(this.themkh.invalid){
          return false;
        }
        this.kh.add(this.themkh.value).subscribe(res =>{
          this._router.navigate(['khachhang'])
        });
      }
}


