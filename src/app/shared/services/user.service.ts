import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { setUserInfo } from 'src/app/state/actions/user';
import { UserInfo } from '../models/entities/userInfo.class';
import { setLoading } from 'src/app/state/actions/layout';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService extends ApiService {
  public authenticate(login: string, password: string, isRegister: boolean) {
    return this.post(`auth/sign${isRegister ? 'up' : 'in'}`, {
      login,
      password,
    });
  }

  public async ping() {
    let interval: NodeJS.Timeout;
    const checkValidity = new Observable((subscriber) => {
      const cleanUp = () => {
        this.store.dispatch(setUserInfo({ userInfo: null }));
        localStorage.removeItem('jwt');
        this.router.navigateByUrl('/auth');
      };
      const jwt = localStorage.getItem('jwt');
      if (!jwt) {
        cleanUp();
        return subscriber.complete();
      }
      this.get('auth/ping').subscribe((res) => {
        const isTokenValid = typeof res !== 'string';
        if (!isTokenValid) {
          cleanUp();
          return subscriber.complete();
        }
        this.store.dispatch(
          setUserInfo({
            userInfo: new UserInfo(
              res.login,
              res.avatar,
              res.requestedFriends,
              res.friends
            ),
          })
        );
        return subscriber.complete();
      });
    });
    //проверка сразу
    this.store.dispatch(setLoading({ isLoading: true }));
    await checkValidity.toPromise();
    this.store.dispatch(setLoading({ isLoading: false }));
    //каждые 10 минут проверка валидности токена
    interval = setInterval(() => {
      checkValidity.subscribe();
    }, 600000);

    return () => clearInterval(interval);
  }
}
