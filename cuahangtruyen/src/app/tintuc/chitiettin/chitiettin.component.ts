import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { TintucService } from 'src/app/services/tintuc.service';
@Component({
  selector: 'app-chitiettin',
  templateUrl: './chitiettin.component.html',
  styleUrls: ['./chitiettin.component.css']
})
export class ChitiettinComponent {
New:any;
id:number=0;
constructor(private _route:ActivatedRoute ,
  private tt:TintucService,
  private fb: FormBuilder,
  private router: Router,
){}
ngOnInit(): void {
  this.id =this._route.snapshot.params['id'];
  this.tt.getById(this.id).subscribe(data =>{
    this.New =data;
    
  })
}
}
