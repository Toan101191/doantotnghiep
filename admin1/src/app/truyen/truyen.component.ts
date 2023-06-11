import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoaiService } from 'src/app/services/loai.service';
import { TgiaService } from 'src/app/services/tgia.service';
import { TruyenService } from 'src/app/services/truyen.service';
import { NxbService } from '../services/nxb.service';
@Component({
  selector: 'app-truyen',
  templateUrl: './truyen.component.html',
  styleUrls: ['./truyen.component.css']
})
export class TruyenComponent {
  title:string="Truyện Manager";
  Truyen:any;
  Loai:any;
  Tgia:any;
  term:any;
  p:number=1;
  Ten:any;
  Nxb:any;
  constructor(private truyen:TruyenService,
    private loai:LoaiService
    ,private tgia:TgiaService
    ,private nxb:NxbService) { }
  getAll(){
    this.truyen.getList().subscribe(res =>{
      
      this.Truyen =res;
      this.tgia.getList().subscribe(res1 =>{
        this.Tgia =res1;
      })
      this.nxb.getList().subscribe(res1 =>{
        this.Nxb =res1;
      })
    })
  }
 gettgia(){
  this.tgia.getList().subscribe(res =>{
      
    this.Tgia =res;
})
 }
  getloai(){
    this.loai.getList().subscribe(res =>{
      
      this.Loai =res;
     
    })
  }
  getnxb(){
    this.nxb.getList().subscribe(res =>{
      
      this.Nxb =res;
     
    })
  }
  ngOnInit(): void {
    this.getAll();
    this.getloai();
    this.gettgia();
    this.getnxb();
  }
  onDelete(id: number) {
    if(confirm("Bạn chắc chắn muốn xoá không")){
      this.truyen.delete(id).subscribe(res =>{
        this.truyen.getList().subscribe(res =>{
          this.Truyen = res;
        })
      })
    }
    window.location.reload()
  }
  
}
