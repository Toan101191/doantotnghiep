import { Component } from '@angular/core';
import { SlideService } from '../services/slide.service';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent {
  Sl:any; 
  searchText:any;
  p:number=1;
  term:any;

  constructor(private sl:SlideService){}
    getAllSlide(){
      this.sl.getList().subscribe(res =>{
       this.Sl =res;
    })
  } 
     ngOnInit(): void {
       this.getAllSlide();
     }
     onEdit(id:number){
    
     }
     onDelete(id: number) {
      if(confirm("Bạn chắc chắn muốn xoá không")){
        this.sl.delete(id).subscribe(res =>{
          this.sl.getList().subscribe(res =>{
            this.Sl = res;
          })
        })
      }
      window.location.reload()
    }
  
  }
  
  