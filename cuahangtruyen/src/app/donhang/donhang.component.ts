import { Component } from '@angular/core';
import { HoadonService } from 'src/app/services/hoadon.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { query } from '@angular/animations';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-donhang',
  templateUrl: './donhang.component.html',
  styleUrls: ['./donhang.component.css']
})
export class DonhangComponent {
  user:any;
  Dh:any;
  id:any;
  p:number=1;

  constructor(private hd:HoadonService,
    private _router:Router,
    private router:ActivatedRoute,

    ){}
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')||'[]');

    this.router.paramMap.subscribe(query =>{
      this.id = query.get("id");
      this.hd.getById1(this.id).subscribe(res =>{
        this.Dh =res;
        
      })
    })
  }
  onDelete(id:number){
    this.hd.delete1(id).subscribe(res =>{
      Swal.fire({
        icon: 'success',
        title: 'Cảm ơn bạn đã mua hàng',
        showConfirmButton: false,
        timer: 5000
      })
      })
      this._router.navigate(['/'])
}
}

