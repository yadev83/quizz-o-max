import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/objects/question';
import { QuizzapiService } from 'src/app/services/quizzapi.service';

@Component({
  selector: 'qom-questions',
  template: `
    <h1>Quizz : Question {{current_question}} / {{this.quizzService.getAll().length}} - Score : {{score}}</h1>
    <div class="flex-container-col center">
      <div class="flex-item" *ngIf="this.quizzService.getAll().length!=0">
        <qom-question (answering)="onAnswer($event)" [question]="this.quizzService.getAll()[current_question-1]"></qom-question>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class QuestionsComponent implements OnInit {
  @Input() nb: number;
  current_question = 1;
  score = 0;

  @Output() finished = new EventEmitter<number>();

  constructor(public quizzService: QuizzapiService) {
  }

  ngOnInit(): void {
    //Setting up base score
    this.score = this.nb*20;
    this.quizzService.getRandom(this.nb);
  }

  onAnswer(event){
    this.score += event;

    if(this.current_question != this.quizzService.getAll().length){
      this.current_question++;
    }else{
      this.finished.emit(this.score);
    }
  }

}
