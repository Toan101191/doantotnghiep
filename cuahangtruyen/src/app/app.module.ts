import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GiohangComponent } from './giohang/giohang.component';
import { ChitietComponent } from './chitiet/chitiet.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoaispComponent } from './loaisp/loaisp.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { ChitiettinComponent } from './tintuc/chitiettin/chitiettin.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LienheComponent } from './lienhe/lienhe.component';
import { AboutComponent } from './about/about.component';
import { ThanhtoanComponent } from './thanhtoan/thanhtoan.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DonhangComponent } from './donhang/donhang.component';
import { DangkiComponent } from './dangki/dangki.component';
import { ChitiethdComponent } from './chitiethd/chitiethd.component';
import { SuadhComponent } from './donhang/suadh/suadh.component';
import { DhdamuaComponent } from './dhdamua/dhdamua.component';
import { TimkiemComponent } from './timkiem/timkiem.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GiohangComponent,
    ChitietComponent,
    SanphamComponent,
    LoaispComponent,
    TintucComponent,
    ChitiettinComponent,
    LienheComponent,
    AboutComponent,
    ThanhtoanComponent,
    DangnhapComponent,
    DonhangComponent,
    DangkiComponent,
    ChitiethdComponent,
    SuadhComponent,
    DhdamuaComponent,
    TimkiemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    SweetAlert2Module,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
