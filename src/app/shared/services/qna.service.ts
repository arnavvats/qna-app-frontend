import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CONSTANTS} from '../constants/constants';

@Injectable({providedIn: 'root'})
export class QnaService {
  constructor(private auth: AuthService, private http: HttpClient) {}
  submitAnswer(data) {
    if (!this.auth.loggedIn$.value) {
      return of(Error('Not logged in'));
    }
    return this.http.post(CONSTANTS.answers, data);
  }
}
