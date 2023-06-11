import { Component } from '@angular/core';
import { NxbService } from '../services/nxb.service';
@Component({
  selector: 'app-nxb',
  templateUrl: './nxb.component.html',
  styleUrls: ['./nxb.component.css']
})
export class NxbComponent {
  Nxb:any; 
  p:number=1;

  term:any;
  constructor(private nxb:NxbService){}
    getAllNxb(){
      this.nxb.getList().subscribe(res =>{
       this.Nxb =res;
    })
  } 
     ngOnInit(): void {
       this.getAllNxb();
     }
     onEdit(id:number){
    
     }
     onDelete(id: number) {
      if(confirm("Bạn chắc chắn muốn xoá không")){
        this.nxb.delete(id).subscribe(res =>{
          this.nxb.getList().subscribe(res =>{
            this.Nxb = res;
          })
        })
      }
      window.location.reload()
    }
  
  }
  
  
