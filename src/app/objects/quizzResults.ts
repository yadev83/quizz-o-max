import { Question } from './question';

export class QuizzResults{
  score: number;
  questions: Array<Question>;

  constructor(score, questions){
    this.score = score;
    this.questions = questions;
  }
}
