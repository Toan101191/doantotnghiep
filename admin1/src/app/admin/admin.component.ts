import { Component,OnInit } from '@angular/core';
import { NguoidungServices } from '../services/nguoidung.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  user:any;
  constructor(private nd:NguoidungServices,
    private _router:Router
    ){
  }
  ngOnInit(){
    this.user = JSON.parse(localStorage.getItem('user')||'[]');
    
  }
  logout(){
    localStorage.removeItem('user');
    this._router.navigate(['/'])
  }
}
