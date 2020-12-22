import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from 'src/app/objects/question';
import { Score } from 'src/app/objects/score';
import { ScoresService } from 'src/app/services/scores.service';

@Component({
  selector: 'qom-quizz-conclusion',
  template: `
    <div class="flex-container-col center">
      <h1>Well done, {{score.uname}} ! You finished the quizz with a score of "{{score.amount}}" points !</h1>
      <h1>You answered correctly to {{score.valid_answers}} out of {{score.nb_questions}} questions !</h1>
      <button class="inner-element" (click)="replay.emit(true)" mat-button>Play again !</button>
      <div *ngFor="let question of questions">
        <div class="flex-item">
          <h3>{{question.question}}</h3>
          <div *ngIf="question.result" [style.color]="'green'">
          You got that one right !
          </div>
          <div *ngIf="!question.result" [style.color]="'red'">
            You missed that one !
          </div>
          - Possible answers : <span *ngFor="let answer of question.answers">
            <span *ngIf="answer == question.correct_answer" [style.color]="'green'">{{answer}}, </span>
            <span *ngIf="answer != question.correct_answer">{{answer}}, </span></span>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class QuizzConclusionComponent implements OnInit {
  @Input() questions: Array<Question>;
  @Input() score: Score;

  @Output() replay = new EventEmitter<boolean>();

  constructor(public scoresService: ScoresService) { }

  ngOnInit(): void {
    this.scoresService.create(this.score);
  }
}
