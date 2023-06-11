import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { SlideService } from 'src/app/services/slide.service';
@Component({
  selector: 'app-them-slide',
  templateUrl: './them-slide.component.html',
  styleUrls: ['./them-slide.component.css']
})
export class ThemSlideComponent {
  submited: boolean = false;
  Sl:any;
  themslide= this.fb.group({
    hinhanh:['',Validators.required],
  });
  constructor(private fb:FormBuilder,
    private sl:SlideService,
    private _router:Router

    ){}
    ngOnInit(): void {
      
    }
    get f(){return this.themslide.controls;}
      onsubmit():any{
        this.submited = true;
        if(this.themslide.invalid){
          return false;
        }
        this.sl.add(this.themslide.value).subscribe(res =>{
          alert('Thêm mới thành công')
          this._router.navigate(['slide'])
        });
      }
}

