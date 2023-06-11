import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { QuyenService } from 'src/app/services/quyen.service';
@Component({
  selector: 'app-them-q',
  templateUrl: './them-q.component.html',
  styleUrls: ['./them-q.component.css']
})
export class ThemQComponent {
  submited: boolean = false;
  Q:any;
  themquyen= this.fb.group({
    tenquyen:['',Validators.required],
  });
  constructor(private fb:FormBuilder,
    private q:QuyenService,
    private _router:Router

    ){}
    ngOnInit(): void {
      
    }
    get f(){return this.themquyen.controls;}
      onsubmit():any{
        this.submited = true;
        if(this.themquyen.invalid){
          return false;
        }
        this.q.add(this.themquyen.value).subscribe(res =>{
          this._router.navigate(['quyen'])
        });
      }
}
