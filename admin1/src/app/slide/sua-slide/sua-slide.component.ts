import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { query } from '@angular/animations';
import { SlideService } from 'src/app/services/slide.service';

@Component({
  selector: 'app-sua-slide',
  templateUrl: './sua-slide.component.html',
  styleUrls: ['./sua-slide.component.css']
})
export class SuaSlideComponent {

submited: boolean = false;
  Sl:any;
  id:any;
  myPro:any;
  themslide= this.fb.group({
    maslide:[],
    hinhanh:['',Validators.required],
  });
  constructor(private fb:FormBuilder,
    private sl:SlideService,
    private _router:Router,
    private router:ActivatedRoute
    ){}
    ngOnInit(): void {
      this.router.paramMap.subscribe(query =>{
        this.id = query.get("id");
        this.sl.getById(this.id).subscribe(res =>{
          this.myPro =res;
          this.themslide = this.fb.group({
            maslide:[this.myPro[0].maslide,Validators.required],
            hinhanh:[this.myPro[0].hinhanh,Validators.required],
          })
        })
      })
    }
    get f(){return this.themslide.controls;}
      onsubmit():any{
        this.submited = true;
        if(this.themslide.invalid){
          return false;
        }
        this.sl.update(this.themslide.value).subscribe(res =>{
          this._router.navigate(['/slide'])
        });
      }
}
