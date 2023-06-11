import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NguoidungServices } from './nguoidung.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private nd:NguoidungServices,private router:Router){}
  canActivate(){
    if(this.nd.isloggedIn()){
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
  
}
