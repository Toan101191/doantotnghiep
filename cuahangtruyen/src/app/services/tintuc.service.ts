import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TintucService {

  constructor(private http:HttpClient) { }
  getList():Observable<any>{
    return this.http.get<any>('https://localhost:7173/api/Tintuc');
  }
  delete(id:number):Observable<any>{
    return this.http.delete<any>('https://localhost:7173/api/Tintuc?id='+id);
  }
  add(data:any):Observable<any>{
    return this.http.post<any>('https://localhost:7173/api/Tintuc',data);
  }
  update(data:any):Observable<any>{
    return this.http.put<any>('https://localhost:7173/api/Tintuc',data);
  }
  getById(id:any):Observable<any>{
    return this.http.get<any>('https://localhost:7173/api/Tintuc/getbyid?id='+id)
  }
  getNew():Observable<any>{
    return this.http.get<any>('https://localhost:7173/api/Tintuc/Getnew');
  }
}

