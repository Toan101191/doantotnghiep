import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoaiService } from 'src/app/services/loai.service';
import { TgiaService } from 'src/app/services/tgia.service';
import { TruyenService } from 'src/app/services/truyen.service';
import { NxbService } from 'src/app/services/nxb.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-them',
  templateUrl: './them.component.html',
  styleUrls: ['./them.component.css']
})
export class ThemComponent {
  submited: boolean = false;
  loais: any;
  Tgia:any;
  Nxb:any;
  themtruyen = this.fb.group({
    tentruyen: ['', Validators.required],
    hinhanh: ['', Validators.required],
    matl: ['', Validators.required],
    matg: ['', Validators.required],
    manxb: ['', Validators.required],
    gia: ['', Validators.required],
    mota: ['', Validators.required],
    soluong: ['', Validators.required],

  });
  constructor(private fb: FormBuilder,
    private truyen: TruyenService,
    private _router: Router,
    private loai: LoaiService,
    private tgia:TgiaService,
    private nxb:NxbService
  ) { }
  
  ngOnInit(): void {
    this.loai.getList().subscribe(res => {
      this.loais = res;
    }),
    this.tgia.getList().subscribe(res =>{
      this.Tgia =res;
    })
    this.nxb.getList().subscribe(res =>{
      this.Nxb =res;
    })
    this.themtruyen = this.fb.group({
      tentruyen: ['', Validators.required],
      hinhanh: ['', Validators.required],
      matl: ['', Validators.required],
      matg: ['', Validators.required],
      manxb: ['', Validators.required],
      gia: ['', Validators.required],
      mota: ['', Validators.required],
      soluong:['',Validators.required]
    });
  }
  get f() { return this.themtruyen.controls; }
  onsubmit(): any {
    
    this.submited = true;
    if (this.themtruyen.invalid) {
      return false;
    }
    this.truyen.add(this.themtruyen.value).subscribe(res => {
      Swal.fire({
        icon: 'success',
        title: 'Thêm thành công!',
        showConfirmButton: false,
        timer: 5000
      })
      this._router.navigate(['truyen']);
      
    });
  }

}
