import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IState, GetIsAuth } from './state';
import { map } from 'rxjs/operators';

@Injectable({providedIn:'root'})
export class AppGuard implements CanActivate {

  constructor(private store:Store<IState>, private router:Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree{
    return this.store.pipe(select(GetIsAuth), map((isAuth)=>{
        if(isAuth){
            return true;
        }else{
            this.router.navigateByUrl('/auth');
            return false;
        }
    }))
  }
}
