import { Component } from '@angular/core';
import { NhanvienService } from '../services/nhanvien.service';
@Component({
  selector: 'app-nhanvien',
  templateUrl: './nhanvien.component.html',
  styleUrls: ['./nhanvien.component.css']
})
export class NhanvienComponent {
  Nv:any; 
  term:any;
  p:number=1;

  constructor(private nv:NhanvienService){}
    getAllNvien(){
      this.nv.getList().subscribe(res =>{
       this.Nv =res;
    })
  } 
     ngOnInit(): void {
       this.getAllNvien();
     }
     onEdit(id:number){
    
     }
     onDelete(id: number) {
      if(confirm("Bạn chắc chắn muốn xoá không")){
        this.nv.delete(id).subscribe(res =>{
          this.nv.getList().subscribe(res =>{
            this.Nv = res;
          })
        })
      }
      window.location.reload()
    }
  
  }
  
  