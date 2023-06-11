import { Component } from '@angular/core';
import { QuyenService } from '../services/quyen.service';
@Component({
  selector: 'app-quyen',
  templateUrl: './quyen.component.html',
  styleUrls: ['./quyen.component.css']
})
export class QuyenComponent {
  QUyen:any; 
  term:any;
  p:number=1;

  constructor(private q:QuyenService){}
    getAllq(){
      this.q.getList().subscribe(res =>{
       this.QUyen =res;
    })
  } 
     ngOnInit(): void {
       this.getAllq();
     }
     onEdit(id:number){
    
     }
     onDelete(id: number) {
      if(confirm("Bạn chắc chắn muốn xoá không")){
        this.q.delete(id).subscribe(res =>{
          this.q.getList().subscribe(res =>{
            this.QUyen = res;
          })
        })
      }
      window.location.reload()
    }
  
  }
  
  
