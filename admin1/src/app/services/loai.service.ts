import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoaiService {

  constructor(private http:HttpClient) { }
  getList(): Observable<any>{
    return this.http.get<any>('https://localhost:7173/api/TheLoai');
}
delete(id: number):Observable<any>{
return this.http.delete<any>('https://localhost:7173/api/TheLoai?id='+id);
}
add(data: any):Observable<any>{
  return this.http.post<any>('https://localhost:7173/api/TheLoai', data);
}
update(data: any):Observable<any>{
  return this.http.put<any>('https://localhost:7173/api/TheLoai', data);
}
getById(id:any):Observable<any>{
  return this.http.get<any>('https://localhost:7173/api/TheLoai/Getbyid?id='+id)
}
}
