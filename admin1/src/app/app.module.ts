import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { TruyenComponent } from './truyen/truyen.component';
import { LoaiComponent } from './loai/loai.component';
import { FormsModule } from '@angular/forms';

import { ThemComponent } from './truyen/them/them.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SuaComponent } from './truyen/sua/sua.component';
import { SuaLoaiComponent } from './loai/sua-loai/sua-loai.component';
import { ThemLoaiComponent } from './loai/them-loai/them-loai.component';
import { TgiaComponent } from './tgia/tgia.component';
import { ThemtgiaComponent } from './tgia/themtgia/themtgia.component';
import { SuatgiaComponent } from './tgia/suatgia/suatgia.component';
import { NhanvienComponent } from './nhanvien/nhanvien.component';
import { ThemnvComponent } from './nhanvien/themnv/themnv.component';
import { SuanvComponent } from './nhanvien/suanv/suanv.component';
import { KhachhangComponent } from './khachhang/khachhang.component';
import { ThemKhComponent } from './khachhang/them-kh/them-kh.component';
import { SuaKhComponent } from './khachhang/sua-kh/sua-kh.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { ThemTinComponent } from './tintuc/them-tin/them-tin.component';
import { SuaTinComponent } from './tintuc/sua-tin/sua-tin.component';
import { SlideComponent } from './slide/slide.component';
import { ThemSlideComponent } from './slide/them-slide/them-slide.component';
import { SuaSlideComponent } from './slide/sua-slide/sua-slide.component';
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
import { ChitietComponent } from './hoadon/chitiet/chitiet.component';
import { DonhangComponent } from './donhang/donhang.component';
import { SuadonComponent } from './donhang/suadon/suadon.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    TruyenComponent,
    LoaiComponent,
    ThemComponent,
    SuaComponent,
    SuaLoaiComponent,
    ThemLoaiComponent,
    TgiaComponent,
    ThemtgiaComponent,
    SuatgiaComponent,
    NhanvienComponent,
    ThemnvComponent,
    SuanvComponent,
    KhachhangComponent,
    ThemKhComponent,
    SuaKhComponent,
    TintucComponent,
    ThemTinComponent,
    SuaTinComponent,
    SlideComponent,
    ThemSlideComponent,
    SuaSlideComponent,
    NxbComponent,
    ThemNxbComponent,
    SuaNxbComponent,
    HoadonComponent,
    ThemHdComponent,
    QuyenComponent,
    ThemQComponent,
    SuaQComponent,

    DangnhapComponent,
    DangkiComponent,
    ChitietComponent,
    DonhangComponent,
    SuadonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
