import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NguoidungServices {
  constructor(private http:HttpClient) { }
  getList():Observable<any>{
    return this.http.get<any>('https://localhost:7173/api/Khachhang');
  }
  delete(id:number):Observable<any>{
    return this.http.delete<any>('https://localhost:7173/api/Khachhang?id='+id);
  }
  add(data:any):Observable<any>{
    return this.http.post<any>('https://localhost:7173/api/Khachhang',data);
  }
  update(data:any):Observable<any>{
    return this.http.put<any>('https://localhost:7173/api/Khachhang',data);
  }
  getById(id:any):Observable<any>{
    return this.http.get<any>('https://localhost:7173/api/Khachhang/getbyid?id='+id)
  }
  login(tk:any,mk:any):Observable<any>{
    return this.http.get<any>('https://localhost:7173/api/Khachhang/login?username='+tk+'&password='+mk)
  }
  isloggedIn(){
    return !!localStorage.getItem('user');
  }
}
