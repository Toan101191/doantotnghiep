import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { LoaiService } from 'src/app/services/loai.service';
import { TgiaService } from 'src/app/services/tgia.service';
import { TruyenService } from 'src/app/services/truyen.service';
import { NxbService } from 'src/app/services/nxb.service';
@Component({
  selector: 'app-sua',
  templateUrl: './sua.component.html',
  styleUrls: ['./sua.component.css']
})
export class SuaComponent {
  submited: boolean = false;
  loais: any;
  Tgia: any;
  id: any;
  myPro: any;
  Nxb:any;
  themtruyen = this.fb.group({
    matruyen:[''],
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
    private tgia: TgiaService,
    private router: ActivatedRoute,
    private nxb:NxbService
  ) { }

  ngOnInit(): void {
    this.loai.getList().subscribe(res => {
      this.loais = res;
    }),
      this.tgia.getList().subscribe(res => {
        this.Tgia = res;
      })
      this.nxb.getList().subscribe(res => {
        this.Nxb = res;
      })
    this.router.paramMap.subscribe(query => {
      this.id = query.get("id");
      this.truyen.getById(this.id).subscribe(res => {
        this.myPro = res;
        this.themtruyen = this.fb.group({
          matruyen: [this.myPro[0].matruyen, Validators.required],
          tentruyen: [this.myPro[0].tentruyen, Validators.required],
          hinhanh: [this.myPro[0 ].hinhanh, Validators.required],
          matl: [this.myPro[0].matl, Validators.required],
          matg: [this.myPro[0].matg, Validators.required],
          manxb: [this.myPro[0].manxb, Validators.required],
          gia: [this.myPro[0].gia, Validators.required],
          mota: [this.myPro[0].mota, Validators.required],
          soluong: [this.myPro[0].soluong, Validators.required],
        });

      })
    })
  }
  get f() { return this.themtruyen.controls; }

  onsubmit(): any {
    this.submited = true;
    if (this.themtruyen.invalid) {
      return false;
    }
    this.truyen.update(this.themtruyen.value).subscribe(res => {
      alert('sửa thành công');
      this._router.navigate(['/truyen']);
    });
  }
}
