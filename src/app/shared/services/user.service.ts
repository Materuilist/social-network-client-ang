import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { setUserInfo } from 'src/app/state/actions/user';
import { UserInfo } from '../models/entities/userInfo.class';
import { setLoading, setInfoMessage } from 'src/app/state/actions/layout';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { InfoMessage, InfoMessageTypes } from '../models/UI/info-message.class';

@Injectable({ providedIn: 'root' })
export class UserService extends ApiService {
  public authenticate(login: string, password: string, isRegister: boolean) {
    return this.post(`auth/sign${isRegister ? 'up' : 'in'}`, {
      login,
      password,
    });
  }

  public logout() {
    localStorage.removeItem('jwt');
    this.store.dispatch(setUserInfo({ userInfo: null }));
    this.router.navigateByUrl('/auth');
  }

  public updateInfo(info: any) {
    this.store.dispatch(setLoading({isLoading:true}))
    return this.post('user/update', info).pipe(
      tap((response) => {
        if (typeof response === 'string') {
          this.store.dispatch(
            setInfoMessage({
              infoMessage: new InfoMessage(response, InfoMessageTypes.Error),
            })
          );
        } else {
          localStorage.setItem('jwt', response.token);
          this.store.dispatch(setUserInfo({userInfo:response.userInfo}));
          this.store.dispatch(setLoading({isLoading:false}));
        }
      })
    );
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
