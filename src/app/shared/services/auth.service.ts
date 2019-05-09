import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CONSTANTS} from '../constants/constants';
import {map} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
  public loggedIn$: BehaviorSubject<boolean>;
  public user = null;


  constructor(private http: HttpClient) {
    this.loggedIn$ = new BehaviorSubject(!!localStorage.getItem('token'));
    this.user = JSON.parse(localStorage.getItem('user'));
  }
  login(data) {
    return this.http.post(CONSTANTS.login, data).pipe(map((res: any) => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('user', JSON.stringify(res.user));
      this.user = res.user;
      this.loggedIn$.next(true);
    }));
  }
  logout() {
    localStorage.clear();
    this.user = null;
    this.loggedIn$.next(false);
  }
}
