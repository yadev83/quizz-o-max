import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment'
import { Question } from '../objects/question';
import { apiResponse } from '../objects/apiResponse';
import { Category } from '../objects/category';
import { categoryResponse } from '../objects/categoryResponse';

@Injectable({
  providedIn: 'root'
})
export class QuizzapiService {
  private questions: Array<Question> = [];
  private trivia_categories: Array<Category> = [];

  constructor(private http: HttpClient) {
    this.initCategories();
  }

  private initCategories(){
    this.trivia_categories = [];
    this.http.get<categoryResponse>(environment.categories).subscribe((data) => {
      for(let result of data.trivia_categories){
        let category: Category = new Category(result.id, result.name);
        this.trivia_categories.push(category);
      }
    });
  }

  initQuestions(amount, category, difficulty){
    this.questions = [];

    let request: string = environment.openquizz + "amount=" + amount;
    if(category != -1)
      request = request + "&category=" + category;
    if(difficulty != "Any Difficulty")
      request = request + "&difficulty=" + difficulty;

    this.http.get<apiResponse>(request).subscribe((data) => {
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

  getQuestions(): Array<Question>{
    return this.questions;
  }

  getCategories(): Array<Category>{
    return this.trivia_categories;
  }
}
