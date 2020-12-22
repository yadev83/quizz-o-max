export class Question{
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: Array<string>;

  answers: Array<string>;
  result: boolean;

  constructor(category, type, difficulty, question, correct_answer, incorrect_answers){
    this.category = category;
    this.type = type;
    this.difficulty = difficulty;
    this.question = this.format_html(question);
    this.correct_answer =  this.format_html(correct_answer);
    this.incorrect_answers = incorrect_answers;
    this.result = false;

    this.answers = [];
    for(let option of incorrect_answers){
      this.answers.push(this.format_html(option));
    }
    this.answers.push(this.correct_answer);
    this.shuffleAnswers();
  }

  private shuffleAnswers() {
    for (let i = this.answers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.answers[i], this.answers[j]] = [this.answers[j], this.answers[i]];
    }
  }

  private format_html(str): string{
    let result : string = str.replace(/&quot;/g, '\"');
    result = result.replace(/&ldquo;/g, '\“');
    result = result.replace(/&rdquo;/g, '\”');
    result = result.replace(/&#039;/g, '\'');

    return result;
  }
};
