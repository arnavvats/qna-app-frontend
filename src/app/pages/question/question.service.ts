import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CONSTANTS} from '../../shared/constants/constants';

@Injectable({providedIn: 'root'})
export class QuestionService implements Resolve<any> {
  constructor(private http: HttpClient) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
      const questionId = route.params.id;
      return  this.http.get(CONSTANTS.question(questionId));
  }
}
