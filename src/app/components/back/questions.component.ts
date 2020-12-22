import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/objects/question';
import { Score } from 'src/app/objects/score';
import { QuizzapiService } from 'src/app/services/quizzapi.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'qom-questions',
  template: `
      <div class="flex-container-col center">
      <h1 class="flex-item">Quizz : Question {{current_question}} / {{this.quizzService.getQuestions().length}} - Score : {{score.amount}}</h1>
      <div class="flex-item" *ngIf="this.quizzService.getQuestions().length!=0">
      <div *ngIf="this.current_question > 0;then value_question else init_content"></div>
        <ng-template #init_content><qom-question (answering)="onAnswer($event)" [question]="this.quizzService.getQuestions()[current_question-1]"></qom-question></ng-template>
        <ng-template #value_question><qom-question (answering)="onAnswer($event)" [question]="this.quizzService.getQuestions()[current_question-1]"
        [value]="this.score.evaluateQuestion(this.quizzService.getQuestions()[this.current_question-1])"></qom-question></ng-template>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class QuestionsComponent implements OnInit {
  @Input() nb: number;
  @Input() cat: number;
  @Input() difficulty: string;

  score_step: number = 50;

  current_question = 0;
  score: Score;

  @Output() finished = new EventEmitter<number>();

  constructor(private _snackBar: MatSnackBar, public quizzService: QuizzapiService) {
    if(this.cat != -1)
      this.score_step = this.score_step * 0.5;
  }

  ngOnInit(): void {
    //Setting up base score
    this.quizzService.initQuestions(this.nb, this.cat, this.difficulty);
    this.score = new Score([], 0);
  }

  onAnswer(event){
    if(event == -2){
      if(this.current_question == 0){
        this.score = new Score(this.quizzService.getQuestions(), 50);
      }else{
        console.error("Unexpected answer from the question page");
      }
    }

    if(event == -1){
      this.score.invalidateQuestion(this.quizzService.getQuestions()[this.current_question-1]);
      this.openSnackBar("Wrong answer ! You lost " + this.score.evaluateQuestion(this.quizzService.getQuestions()[this.current_question-1]), "Dismiss");
    }
    else if(event == 1){
      this.openSnackBar("Good answer ! You got " + this.score.evaluateQuestion(this.quizzService.getQuestions()[this.current_question-1]), "Dismiss");
      this.score.validateQuestion(this.quizzService.getQuestions()[this.current_question-1]);
    }

    if(this.current_question != this.quizzService.getQuestions().length){
      this.current_question++;
    }else{
      this.finished.emit(this.score.amount);
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
