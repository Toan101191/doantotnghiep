import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Observable} from'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TruyenService {
  readonly APIUrl ="https://localhost:7173/api";
  readonly PhotoUrl ="https://localhost:7173/Photos";

  constructor(private http:HttpClient) { }
  getList(): Observable<any>{
    return this.http.get<any>('https://localhost:7173/api/Truyen');
  }
  
  delete(id: number):Observable<any>{
    return this.http.delete<any>('https://localhost:7173/api/Truyen?id='+id);
  }
  add(data: any):Observable<any>{
    console.log(data);
    return this.http.post<any>('https://localhost:7173/api/Truyen', data);
  }
  update(data: any):Observable<any>{
    return this.http.put<any>('https://localhost:7173/api/Truyen', data);
  }
  getById(id:any):Observable<any>{
    return this.http.get<any>('https://localhost:7173/api/Truyen/Getbyid?id='+id)
  }
  Getnew():Observable<any>{
    return this.http.get<any>('https://localhost:7173/api/Truyen/Getnew');
  }
  getbycategory(id:any):Observable<any>{
    return this.http.get<any>('http://localhost:5296/api/Truyen/Get_by_category?id='+id);
  }
  taianh(val:any){
    return this.http.get<any>(this.APIUrl+'/Truyen/Savefile', val);
  }
}
