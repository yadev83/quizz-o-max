import { Question } from './question';
import { Score } from './score';

export class QuizzResults{
  score: Score;
  questions: Array<Question>;

  constructor(score, questions){
    this.score = score;
    this.questions = questions;
  }
}
