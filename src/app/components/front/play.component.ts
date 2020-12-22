import { Component, OnInit } from '@angular/core';
import { QuizzapiService } from 'src/app/services/quizzapi.service';


@Component({
  selector: 'qom-play',
  template: `
    <qom-newgame-form #form></qom-newgame-form>
    <div *ngIf="!form.showForm && !end">
      <qom-questions (finished)="onQuizzEnd($event)" [nb]="form.nbQuestions" [cat]="form.category" [difficulty]="form.difficulty"></qom-questions>
    </div>

    <div *ngIf="end">
      <qom-quizz-conclusion (replay)="onQuizzRestart($event)" [score]="quizz.score" [questions]="quizz.questions"></qom-quizz-conclusion>
    </div>
  `,
  styles: [
  ]
})
export class PlayComponent implements OnInit {
  end: boolean = false;

  quizz;

  constructor(public quizzService: QuizzapiService) { }

  ngOnInit(): void {
  }

  onQuizzEnd(event){
    this.end = true;
    this.quizz = event;
  }

  onQuizzRestart(event){
    if(event){
      window.location.reload();
    }
  }
}
