import {environment} from '../../../environments/environment';

export const CONSTANTS  = {
  login: environment.baseUrl + 'login',
  questions: environment.baseUrl + 'questions',
  question: (id) => environment.baseUrl + 'question/' + id,
  topics: environment.baseUrl + 'topics',
  answers: environment.baseUrl + 'answers'
};

