import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { TruyenComponent } from './truyen/truyen.component';
import { ThemComponent } from './truyen/them/them.component';
import { SuaComponent } from './truyen/sua/sua.component';
import { LoaiComponent } from './loai/loai.component';
import { SuaLoaiComponent } from './loai/sua-loai/sua-loai.component';
import { ThemLoaiComponent } from './loai/them-loai/them-loai.component';
import { ThemtgiaComponent } from './tgia/themtgia/themtgia.component';
import { SuatgiaComponent } from './tgia/suatgia/suatgia.component';
import { TgiaComponent } from './tgia/tgia.component';
import { NhanvienComponent } from './nhanvien/nhanvien.component';
import { ThemnvComponent } from './nhanvien/themnv/themnv.component';
import { SuanvComponent } from './nhanvien/suanv/suanv.component';
import { KhachhangComponent } from './khachhang/khachhang.component';
import { ThemKhComponent } from './khachhang/them-kh/them-kh.component';
import { SuaKhComponent } from './khachhang/sua-kh/sua-kh.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { SuaTinComponent } from './tintuc/sua-tin/sua-tin.component';
import { ThemTinComponent } from './tintuc/them-tin/them-tin.component';
import { SlideComponent } from './slide/slide.component';
import { SuaSlideComponent } from './slide/sua-slide/sua-slide.component';
import { ThemSlideComponent } from './slide/them-slide/them-slide.component';
import { NxbComponent } from './nxb/nxb.component';
import { ThemNxbComponent } from './nxb/them-nxb/them-nxb.component';
import { SuaNxbComponent } from './nxb/sua-nxb/sua-nxb.component';
import { HoadonComponent } from './hoadon/hoadon.component';
import { ThemHdComponent } from './hoadon/them-hd/them-hd.component';
import { QuyenComponent } from './quyen/quyen.component';
import { ThemQComponent } from './quyen/them-q/them-q.component';
import { SuaQComponent } from './quyen/sua-q/sua-q.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkiComponent } from './dangki/dangki.component';
import { GuardGuard } from './services/guard.guard';
import { ChitietComponent } from './hoadon/chitiet/chitiet.component';
import { DonhangComponent } from './donhang/donhang.component';
import { SuadonComponent } from './donhang/suadon/suadon.component';
const routes: Routes = [
  {path:'',component:DangnhapComponent},
  {path:'sign-in',component:DangkiComponent},

  {path:'admin',component:AdminComponent,canActivate:[GuardGuard]},
  {path:'donhang',children:[
    {path:'',component:DonhangComponent,canActivate:[GuardGuard]},
    {path:'sua/:id',component:SuadonComponent,canActivate:[GuardGuard]}
  ]},
  {path:'slide',children:[
    {path:'',component:SlideComponent,canActivate:[GuardGuard]},
    {path:'them',component:ThemSlideComponent,canActivate:[GuardGuard]},
    {path:'sua/:id',component:SuaSlideComponent,canActivate:[GuardGuard]}
  ]},
  {path:'quyen',children:[
    {path:'',component:QuyenComponent,canActivate:[GuardGuard]},
    {path:'them',component:ThemQComponent,canActivate:[GuardGuard]},
    {path:'sua/:id',component:SuaQComponent,canActivate:[GuardGuard]}
  ]},
  {path:'hoadon',children:[
    {path:'',component:HoadonComponent,canActivate:[GuardGuard]},
    {path:'them',component:ThemHdComponent,canActivate:[GuardGuard]},
    {path:'chitiet/:id',component:ChitietComponent,canActivate:[GuardGuard]},
  ]},
  {path:'nxb',children:[
    {path:'',component:NxbComponent,canActivate:[GuardGuard]},
    {path:'them',component:ThemNxbComponent,canActivate:[GuardGuard]},
    {path:'sua/:id',component:SuaNxbComponent,canActivate:[GuardGuard]}
  ]},
  {path:'khachhang',children:[
    {path:'',component:KhachhangComponent,canActivate:[GuardGuard]},
    {path:'them',component:ThemKhComponent,canActivate:[GuardGuard]},
    {path:'sua/:id',component:SuaKhComponent,canActivate:[GuardGuard]}
  ]},
  {path:'tintuc',children:[
    {path:'',component:TintucComponent,canActivate:[GuardGuard]},
    {path:'them',component:ThemTinComponent,canActivate:[GuardGuard]},
    {path:'sua/:id',component:SuaTinComponent,canActivate:[GuardGuard]}
  ]},
  {path:'nhanvien',children:[
    {path:'',component:NhanvienComponent,canActivate:[GuardGuard]},
    {path:'them',component:ThemnvComponent,canActivate:[GuardGuard]},
    {path:'sua/:id',component:SuanvComponent,canActivate:[GuardGuard]}
  ]},
  {path:'truyen',children:[
    {path:'',component:TruyenComponent,canActivate:[GuardGuard]},
    {path:'them',component:ThemComponent,canActivate:[GuardGuard]},
    {path:'sua/:id',component:SuaComponent,canActivate:[GuardGuard]}
  ]},
  {path:'loai',children:[
    {path:'',component:LoaiComponent,canActivate:[GuardGuard]},
    {path:'them',component:ThemLoaiComponent,canActivate:[GuardGuard]},
    {path:'sua/:id',component:SuaLoaiComponent,canActivate:[GuardGuard]}
  ]},
  {path:'tgia',children:[
    {path:'',component:TgiaComponent,canActivate:[GuardGuard]},
    {path:'them',component:ThemtgiaComponent,canActivate:[GuardGuard]},
    {path:'sua/:id',component:SuatgiaComponent,canActivate:[GuardGuard]}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
