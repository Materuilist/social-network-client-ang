import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/state';

@Injectable({ providedIn: 'root' })
export class ApiService {
  protected url: string = 'http://localhost:3200/';

  constructor(private http: HttpClient, protected store:Store<IState>) {}

  private joinPath(path: string): string {
    return this.url.concat(path);
  }

  private processResponse(response$: Observable<any>) {
    return response$.pipe(
      catchError((err: HttpErrorResponse) => {
        return of(err.error);
      }),
      map((response: any) => {
        if (response.hasOwnProperty('message')) {
          return response.message;
        }
        return response;
      })
    );
  }

  public get(path: string) {
    return this.processResponse(this.http.get(this.joinPath(path)));
  }

  public post(path: string, body: any) {
    return this.processResponse(this.http.post(this.joinPath(path), body));
  }
}
