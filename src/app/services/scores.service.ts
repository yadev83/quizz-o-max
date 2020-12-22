import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Score } from '../objects/score';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  scores : Array<Score> = [];

  constructor(private http:HttpClient) {
    this.requestAll();
  }

  private requestAll(){
    this.scores = [];
    this.http.get<Array<Score>>(environment.localScoreApi).subscribe((data) =>{
      for(let score of data){
        let addition: Score = new Score([], 50);
        addition.amount = score.amount;
        addition.nb_questions = score.nb_questions;
        addition.uname = score.uname;
        addition.valid_answers = score.valid_answers;

        this.scores.push(addition);
      }
    });
  }

  create(score: Score){
    this.http.post<Score>(environment.localScoreApi, score).subscribe((data) => {
      console.log('POST request successful ', data);
    }, (error) => {
      console.log('POST request raised an error ', error);
    });
    this.scores.push(score);
  }

}
