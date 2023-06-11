import { Component } from '@angular/core';
import { NguoidungServices } from '../services/nguoidung.service';
import { QuyenService } from '../services/quyen.service';
@Component({
  selector: 'app-khachhang',
  templateUrl: './khachhang.component.html',
  styleUrls: ['./khachhang.component.css']
})
export class KhachhangComponent {
  Nd:any;
  p:number=1;

  Q:any; 
  term:any;
  constructor(private nd:NguoidungServices,
    private q:QuyenService){}
    getAllKh(){
      this.nd.getList().subscribe(res =>{
       this.Nd =res;
    })
  } 
     ngOnInit(): void {
       this.getAllKh();
       this.q.getList().subscribe(res =>{
        this.Q =res;
      })
     }
     
     onEdit(id:number){
    
     }
     onDelete(id: number) {
      if(confirm("Bạn chắc chắn muốn xoá không")){
        this.nd.delete(id).subscribe(res =>{
          this.nd.getList().subscribe(res =>{
            this.Nd = res;
          })
        })
      }
      window.location.reload()
    }
  
  }
  
  
