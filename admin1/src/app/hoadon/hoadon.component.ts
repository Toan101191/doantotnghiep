import { Component } from '@angular/core';
import { NguoidungServices } from '../services/nguoidung.service';
import { NhanvienService } from '../services/nhanvien.service';
import { HoadonService } from '../services/hoadon.service';
@Component({
  selector: 'app-hoadon',
  templateUrl: './hoadon.component.html',
  styleUrls: ['./hoadon.component.css']
})
export class HoadonComponent {
  Hd:any[] = []; 
  searchText:any;
  Kh:any;
  p:number=1;
  selectedDate: string = '';
  Nv:any;
  selectedMonth: number = 0;
  selectedYear: number = 0;
  term:any;

  constructor(private hd:HoadonService,private kh:NguoidungServices,private nv:NhanvienService){}
    getAllHd(){
      this.hd.getList().subscribe(res =>{
       this.Hd =res;
       this.kh.getList().subscribe(res1 =>{
        this.Kh =res1;
      })
    })
  } 
     ngOnInit(): void {
       this.getAllHd();
       this.hd.getList().subscribe(res =>{
        this.Hd =res;
      })
     }
     onEdit(id:number){
    
     }
     onDelete(id: number) {
      if(confirm("Bạn chắc chắn muốn xoá không")){
        this.hd.delete(id).subscribe(res =>{
          this.hd.getList().subscribe(res =>{
            this.Hd = res;
          })
        })
      }
      window.location.reload()
    }
  calculateTotal(): number {
    const filteredInvoices = this.Hd.filter(invoice => {
      const invoiceDate = new Date(invoice.ngaygd);
      const selectedDate = new Date(this.selectedDate);
      // So sánh ngày bằng cách so sánh năm, tháng và ngày
      return (
        invoiceDate.getFullYear() === selectedDate.getFullYear() &&
        invoiceDate.getMonth() === selectedDate.getMonth() &&
        invoiceDate.getDate() === selectedDate.getDate()
      );
    });
    return filteredInvoices.reduce((total, invoice) => total + invoice.gia, 0);
  }
  calculateTotal1(): number {
    const filteredInvoices = this.Hd.filter(invoice => {
      const invoiceDate = new Date(invoice.ngaygd);
      return invoiceDate.getMonth() + 1 === this.selectedMonth && invoiceDate.getFullYear() === this.selectedYear;
    });
    return filteredInvoices.reduce((total, invoice) => total + invoice.gia, 0);
  }
  }
  
  
