import { Component } from '@angular/core';
import { HoadonService } from '../services/hoadon.service';
@Component({
  selector: 'app-donhang',
  templateUrl: './donhang.component.html',
  styleUrls: ['./donhang.component.css']
})
export class DonhangComponent {
  Dh:any;
  p:number=1;
  term:any;

constructor(private hd:HoadonService){}
  ngOnInit():void{
    this.hd.getList1().subscribe(res =>{
      this.Dh =res;
    })
  }
}
