import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment'
import { Question } from '../objects/question';
import { apiResponse } from '../objects/apiResponse';

@Injectable({
  providedIn: 'root'
})
export class QuizzapiService {
  private apiUrl = environment.openquizz;

  questions: Array<Question> = [];

  constructor(private http: HttpClient) {
    this.getRandom(10);
  }

  private getRandom(amount){
    this.questions = [];
    this.http.get<apiResponse>(this.apiUrl + "amount=" + amount).subscribe((data) => {
      for(let result of data.results){
        let question: Question = new Question(result.category,
          result.type,
          result.difficulty,
          result.question,
          result.correct_answer,
          result.incorrect_answers);

          this.questions.push(question);
      }
    });
  }

  getAll(): Array<Question>{
    return this.questions;
  }
}
