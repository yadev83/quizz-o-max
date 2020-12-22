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
      You finished the quizz with a score of : {{final_score}}
    </div>
  `,
  styles: [
  ]
})
export class PlayComponent implements OnInit {
  end: boolean = false;

  final_score;

  constructor(public quizzService: QuizzapiService) { }

  ngOnInit(): void {
  }

  onQuizzEnd(event){
    this.end = true;
    this.final_score = event;
  }
}
