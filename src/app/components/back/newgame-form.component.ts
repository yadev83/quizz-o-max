import { EventEmitter, ViewChild } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { QuizzapiService } from 'src/app/services/quizzapi.service';

@Component({
  selector: 'qom-newgame-form',
  template: `
    <div class="flex-container-col center">
      <form *ngIf="showForm" [formGroup]="newgameForm" (ngSubmit)="onSubmit(newgameForm.value)">
        <div class="flex-item">
          <label for="numberOfQuestions">Number of questions</label>
          <input required id="numberOfQuestions" type="number" formControlName="numberOfQuestions">
        </div>
        <button class="button" mat-button type="submit">Play</button>
      </form>
    </div>
  `,
  styles: [
  ]
})
export class NewgameFormComponent implements OnInit {
  newgameForm;
  showForm = true;

  nbQuestions = 20;

  constructor(private formBuilder: FormBuilder) {
    this.newgameForm = this.formBuilder.group({
      numberOfQuestions: this.nbQuestions
    });
  }

  onSubmit(newgameData){
    this.nbQuestions = newgameData.numberOfQuestions;
    this.newgameForm.reset();
    console.warn("The number of questions have been chosen", newgameData);
    this.showForm = false;
  }

  ngOnInit(): void {
  }

}
