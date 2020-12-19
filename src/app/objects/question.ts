export class Question{
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: Array<string>;

  answers: Array<string>;

  constructor(category, type, difficulty, question, correct_answer, incorrect_answers){
    this.category = category;
    this.type = type;
    this.difficulty = difficulty;
    this.question = question;
    this.correct_answer = correct_answer;
    this.incorrect_answers = incorrect_answers;

    this.answers = [];
    for(let option of incorrect_answers){
      this.answers.push(option);
    }
    this.answers.push(correct_answer);
  }
};
