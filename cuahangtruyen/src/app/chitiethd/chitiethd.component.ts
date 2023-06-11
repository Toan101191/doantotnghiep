import { Component } from '@angular/core';
import { HoadonService } from 'src/app/services/hoadon.service';
import { TruyenService } from 'src/app/services/truyen.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { query } from '@angular/animations';
@Component({
  selector: 'app-chitiethd',
  templateUrl: './chitiethd.component.html',
  styleUrls: ['./chitiethd.component.css']
})
export class ChitiethdComponent {

  Cthd:any;
  id:any;
  constructor(private hd:HoadonService,
    private truyen:TruyenService,
    private _router:Router,
    private router:ActivatedRoute,

    ){}
  ngOnInit(): void {
    this.router.paramMap.subscribe(query =>{
      this.id = query.get("id");
      this.hd.getById2(this.id).subscribe(res =>{
        this.Cthd =res;
        
      })
    })
  }
}

