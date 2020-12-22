import { Question } from './question';

export class Score{
  amount: number;
  base_value: number;

  constructor(question_set: Array<Question>, base_value: number){
    this.base_value = base_value;
    this.amount = 0;

    for(let question of question_set){
      this.amount += this.evaluateQuestion(question);
    }
  }

  validateQuestion(question: Question){
    this.amount += this.evaluateQuestion(question);
  }

  invalidateQuestion(question: Question){
    this.amount -= this.evaluateQuestion(question);
  }

  evaluateQuestion(question: Question): number{
    if(question.difficulty == "easy"){
      return this.base_value * 0.5;
    }
    if(question.difficulty == "medium"){
      return this.base_value;
    }
    if(question.difficulty == "hard"){
      return this.base_value * 1.5;
    }
  }
}
