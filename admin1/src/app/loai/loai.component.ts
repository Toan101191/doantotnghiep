import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoaiService } from 'src/app/services/loai.service';
@Component({
  selector: 'app-loai',
  templateUrl: './loai.component.html',
  styleUrls: ['./loai.component.css']
})
export class LoaiComponent {
  Loai: any;
  term:any;
p:number=1;
  loaiForm = this.fb.group({
    Tentl: ''
  });
  constructor(private loai: LoaiService, private fb: FormBuilder) { }
  getAll() {
    this.loai.getList().subscribe(res => {

      this.Loai = res;
    })
  }
  ngOnInit(): void {
    this.getAll();
  }
  onEdit(id: number) {
    alert('clicked on button' + id)
  }
  onDelete(id: number) {
    if(confirm("Bạn chắc chắn muốn xoá không")){
      this.loai.delete(id).subscribe(res =>{
        this.loai.getList().subscribe(res =>{
          this.Loai = res;
        })
      })
    }
    window.location.reload()
  }
  onsubmit() {
    console.log(this.loaiForm.value);
    this.loai.add(this.loaiForm.value).subscribe(res => {
      this.getAll();
      this.loaiForm.reset();
    })
    window.location.reload()
  }
}
