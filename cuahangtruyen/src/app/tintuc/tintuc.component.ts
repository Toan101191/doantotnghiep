import {AfterViewInit, Component,Renderer2 , OnInit,} from '@angular/core';
import { TintucService } from '../services/tintuc.service';

@Component({
  selector: 'app-tintuc',
  templateUrl: './tintuc.component.html',
  styleUrls: ['./tintuc.component.css']
})
export class TintucComponent {
  Tt:any;
  p:number=0;
  constructor(
    private tt:TintucService,
    ) { }
    ngOnInit(): void{
      this.tt.getList().subscribe(res =>{
        this.Tt = res;
      })
    }
}
