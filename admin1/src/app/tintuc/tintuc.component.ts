import { Component } from '@angular/core';
import { TintucService } from '../services/tintuc.service';
@Component({
  selector: 'app-tintuc',
  templateUrl: './tintuc.component.html',
  styleUrls: ['./tintuc.component.css']
})
export class TintucComponent {
  Tin:any; 
  term:any;
  p:number=1;

  constructor(private tin:TintucService){}
     ngOnInit(): void {
       this.tin.getList().subscribe(res =>{
        this.Tin =res;
     })
     }
     onEdit(id:number){
    
     }
     onDelete(id: number) {
      if(confirm("Bạn chắc chắn muốn xoá không")){
        this.tin.delete(id).subscribe(res =>{
          this.tin.getList().subscribe(res =>{
            this.Tin = res;
          })
        })
      }
      window.location.reload()
    }
  }
  

  
  