import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CONSTANTS} from '../../shared/constants/constants';

@Injectable({providedIn: 'root'})
export class QuestionListService implements Resolve<any> {
  constructor(private http: HttpClient) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const topicId = route.queryParams.topic_id || null;
    if (topicId) {
      return  this.http.get(CONSTANTS.questions, {params: {topic_id: topicId}});
    } else {
      return this.http.get(CONSTANTS.questions);
    }
  }
}
