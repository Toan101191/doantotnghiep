import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NxbService } from 'src/app/services/nxb.service';
@Component({
  selector: 'app-them-nxb',
  templateUrl: './them-nxb.component.html',
  styleUrls: ['./them-nxb.component.css']
})
export class ThemNxbComponent {
  submited: boolean = false;
  Nxb:any;
  themnxb= this.fb.group({
    tennxb:['',Validators.required],
    diachi:['',Validators.required],
    email:['',Validators.required],
    sdt:['',Validators.required],
  });
  constructor(private fb:FormBuilder,
    private nxb:NxbService,
    private _router:Router

    ){}
    ngOnInit(): void {
      
    }
    get f(){return this.themnxb.controls;}
      onsubmit():any{
        this.submited = true;
        if(this.themnxb.invalid){
          return false;
        }
        this.nxb.add(this.themnxb.value).subscribe(res =>{
          this._router.navigate(['nxb'])
        });
      }
}
