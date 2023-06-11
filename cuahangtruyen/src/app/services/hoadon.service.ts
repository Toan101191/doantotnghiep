import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoadonService {

  constructor(private http:HttpClient) { }
  getList():Observable<any>{
    return this.http.get<any>('https://localhost:7173/api/Hoadon');
  }
  delete(id:number):Observable<any>{
    return this.http.delete<any>('https://localhost:7173/api/Hoadon?id='+id);
  }
  add(data:any):Observable<any>{
    return this.http.post<any>('https://localhost:7173/api/Hoadon',data);
  }
  update(data:any):Observable<any>{
    return this.http.put<any>('https://localhost:7173/api/Hoadon',data);
  }
  getById(id:any):Observable<any>{
    return this.http.get<any>('https://localhost:7173/api/Hoadon/getbyid?id='+id)
  }
  getById1(id:any):Observable<any>{
    return this.http.get<any>('https://localhost:7173/api/Donhang/getbyid?id='+id)
  }
  getById3(id:any):Observable<any>{
    return this.http.get<any>('  https://localhost:7173/api/Donhang/getbyid1?id='+id)
  }
  update1(data:any):Observable<any>{
    return this.http.put<any>('https://localhost:7173/api/Donhang',data);
  }
  delete1(id:number):Observable<any>{
    return this.http.delete<any>('https://localhost:7173/api/Donhang?id='+id);
  }
  getById2(id:any):Observable<any>{
    return this.http.get<any>('https://localhost:7173/api/Chitiethoadon/getbyid?id='+id)
  } 
}
