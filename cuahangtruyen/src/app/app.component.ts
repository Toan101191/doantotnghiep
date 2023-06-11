import { Component,OnInit } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoaiService } from './services/loai.service';
import { NguoidungServices } from './services/nguoidung.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:any;
  title = 'cuahangtruyen';
  Loai:any;
  term:any;
  constructor(private loai:LoaiService,
    private nd:NguoidungServices,
    private _router:Router){}
  ngOnInit(): void{
    this.user = JSON.parse(localStorage.getItem('user')||'[]');
    console.log(this.user)
    this.loai.getList().subscribe(res =>{
      this.Loai = res;
    })
  }
  logout(){
    localStorage.removeItem('user');
    window.location.reload()
  }
  clearcart(){
    sessionStorage.clear();

  }
}
