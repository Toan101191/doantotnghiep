import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { query } from '@angular/animations';
import { NxbService } from 'src/app/services/nxb.service';

@Component({
  selector: 'app-sua-nxb',
  templateUrl: './sua-nxb.component.html',
  styleUrls: ['./sua-nxb.component.css']
})
export class SuaNxbComponent {
  submited: boolean = false;
  Nxb:any;
  id:any;
  myPro:any;
  themnxb= this.fb.group({
    manxb:[],
    tennxb:['',Validators.required],
    diachi:['',Validators.required],
    email:['',Validators.required],
    sdt:['',Validators.required],
  });
  constructor(private fb:FormBuilder,
    private nxb:NxbService,
    private _router:Router,
    private router:ActivatedRoute
    ){}
    ngOnInit(): void {
      this.router.paramMap.subscribe(query =>{
        this.id = query.get("id");
        this.nxb.getById(this.id).subscribe(res =>{
          this.myPro =res;
          this.themnxb = this.fb.group({
            manxb:[this.myPro[0].manxb,Validators.required],
            tennxb:[this.myPro[0].tennxb,Validators.required],
            diachi:[this.myPro[0].diachi,Validators.required],
            email:[this.myPro[0].email,Validators.required],
            sdt:[this.myPro[0].sdt,Validators.required]
          })
        })
      })
    }
    get f(){return this.themnxb.controls;}
      onsubmit():any{
        this.submited = true;
        if(this.themnxb.invalid){
          return false;
        }
        this.nxb.update(this.themnxb.value).subscribe(res =>{
          alert('Sửa thành công')
          this._router.navigate(['nxb'])
        });
      }
}
