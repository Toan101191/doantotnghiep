import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GiohangComponent } from './giohang/giohang.component';
import { ChitietComponent } from './chitiet/chitiet.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import { LoaispComponent } from './loaisp/loaisp.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { ChitiettinComponent } from './tintuc/chitiettin/chitiettin.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { AboutComponent } from './about/about.component';
import { ThanhtoanComponent } from './thanhtoan/thanhtoan.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { GuardGuard } from './services/guard.guard';
import { DonhangComponent } from './donhang/donhang.component';
import { DangkiComponent } from './dangki/dangki.component';
import { ChitiethdComponent } from './chitiethd/chitiethd.component';
import { SuadhComponent } from './donhang/suadh/suadh.component';
import { DhdamuaComponent } from './dhdamua/dhdamua.component';
const routes: Routes = [
  {path:'thanhtoan',component:ThanhtoanComponent,canActivate:[GuardGuard]},
  {path:'login',component:DangnhapComponent},
  {path:'login/dangki',component:DangkiComponent},
  {path:'chitiethd/:id',component:ChitiethdComponent,canActivate:[GuardGuard]},
  {path:'donhang/suadh/:id',component:SuadhComponent,canActivate:[GuardGuard]},
  {path:'donhang/:id',component:DonhangComponent,canActivate:[GuardGuard]},
  {path:'donhang/donhang1/:id',component:DhdamuaComponent,canActivate:[GuardGuard]},
  {path:'',component:HomeComponent},
  {path:'giohang',component:GiohangComponent,canActivate:[GuardGuard]},
  {path:'chitiet/:id',component:ChitietComponent},
  {path:'sp',component:SanphamComponent},
  {path:'lsp/:id',component:LoaispComponent},
  {path:'lienhe',component:LienheComponent},
  {path:'about',component:AboutComponent},

  {path:'tt',children:[
    {path:'',component:TintucComponent},
    {path:'tt/:id',component:ChitiettinComponent},
  ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
