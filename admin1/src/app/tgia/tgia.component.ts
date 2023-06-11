import { Component, OnInit } from '@angular/core';
import { TgiaService } from 'src/app/services/tgia.service';

@Component({
  selector: 'app-tgia',
  templateUrl: './tgia.component.html',
  styleUrls: ['./tgia.component.css']
})
export class TgiaComponent {
  Tgia:any; 
  term:any;
p:number=1;

constructor(private tgia:TgiaService){}
  getAllTgia(){
    this.tgia.getList().subscribe(res =>{
     this.Tgia =res;
  })
} 
   ngOnInit(): void {
     this.getAllTgia();
   }
   onEdit(id:number){
  
   }
   onDelete(id: number) {
    if(confirm("Bạn chắc chắn muốn xoá không")){
      this.tgia.delete(id).subscribe(res =>{
        this.tgia.getList().subscribe(res =>{
          this.Tgia = res;
        })
      })
    }
    window.location.reload()
  }

}

