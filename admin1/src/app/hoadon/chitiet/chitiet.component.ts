import { Component } from '@angular/core';
import { HoadonService } from 'src/app/services/hoadon.service';
import { TruyenService } from 'src/app/services/truyen.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.component.html',
  styleUrls: ['./chitiet.component.css']
})
export class ChitietComponent {
  Cthd:any;
  id:any;
  kh:any ={};
  tenkh: any;
  sdt: any;
  diachi: any;
  constructor(private hd:HoadonService,
    private truyen:TruyenService,
    private _router:Router,
    private router:ActivatedRoute,private http:HttpClient

    ){}
  ngOnInit(): void {
    this.router.paramMap.subscribe(query =>{
      this.id = query.get("id");
      this.hd.getById1(this.id).subscribe(res =>{
        this.Cthd =res;
      })
    })
    this.http.get("https://localhost:7173/api/Chitiethoadon/getkh?id="+this.id).subscribe((x:any)=>{
      this.kh= x;
    })
  }
  public printHtml() {
    let html_order = '';
    this.kh.forEach((x: any) => {
     this.tenkh = x.tenkh;
     this.sdt = x.sdt;
     this.diachi = x.diachi;
    })
    this.Cthd.forEach((x: any) => {
      html_order += `
      <tr>
      <td>${x.tentruyen}</td>
      <td>${x.gia}</td>
      <td>${x.soluong}</td>
      <td>${x.gia * x.soluong}</td>
      </tr>
      `;
    });
    let data = `
    <section style="text-align: center;">
        <h1>HÓA ĐƠN </h1>
        <div class="ban">(Hoá đơn bán)</div>
        <div class="ngay">
            <p id="date"></p>
            <script>
                n = new Date();
                y = n.getFullYear();
                m = n.getMonth() + 1;
                d = n.getDate();
                document.getElementById("date").innerHTML = "Ngày " + d + " tháng " + m + " năm " + y;
            </script>
        </div>
    </section>

    <div class="le dam">Cửa hàng: Shop truyện cũ</div>
    <div class="le">Địa chỉ: Vĩnh Khúc - Văn Giang - Hưng Yên </div>
    <div class="le doi">Điện thoại: 0356964919</div>
    <div class="le doi">Số tài khoản: 180720019999</div>
    <div class="le dam">Người mua hàng: ${this.tenkh}</div>
    <div class="le">Điện thoại: ${this.sdt}</div>
    <div class="le">Địa chỉ: ${this.diachi}</div>
    <table>
    <tr></tr>
    </table>
    <table>
        <tr>
            <th>Tên sản phẩm</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
        </tr>
        ${html_order}
    </table>
    <div class="doi dam ky">Người mua hàng</div>
    <div class="doi dam ky">Người bán hàng</div>
    <div class="doi ky1">(Ký, ghi rõ họ tên)</div>
    <div class="doi ky1">(Ký, ghi rõ họ tên)</div>
    `;

    let popupWin: any = window.open(
      '',
      '_top',
      'top=0,left=0,height=100%,width=auto'
    );
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          .print table {
              margin-top: 15px;
              width: 100%;
          }
          print tr {
              line-height: 27px;
          }

          .print table,
          th,
          td {
              border: 1px solid black;
              border-collapse: collapse;
              text-align: center;
          }

          .print .ngay {
              font-style: italic;
              font-size: 15px;
              margin-bottom: 5px;
          }

          .print .ban {
              font-style: italic;
              font-size: 15px;
              margin: 3px 0px;
          }

          .print .dam {
              font-weight: bold;
          }

          .print .le {
              margin-bottom: 4px;
              font-size: 15px;
          }

          .print .doi {
              width: 50%;
              float: left;
          }

          .print .ky {
              text-align: center;
              margin-top: 20px;
          }

          .print .ky1 {
              font-style: italic;
              text-align: center;
              margin-top: 5px;
          }
      </style>
        </head>
      <body class='print' onload="window.print();window.close()">${data}</body>
      </html>`);
    popupWin.document.close();
  }
}
