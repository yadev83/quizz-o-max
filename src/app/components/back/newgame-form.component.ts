import { EventEmitter, ViewChild } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Category } from 'src/app/objects/category';
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
        <div class="flex-item">
          <label for="category">Category</label>
          <select required id="category" formControlName="category">
            <option value="-1" selected>Any Category</option>
            <option *ngFor="let option of categories" [value]="option.id">{{option.name}}</option>
          </select>
        </div>
        <div class="flex-item">
          <label for="difficulty">Difficulty</label>
          <select required id="difficulty" formControlName="difficulty">
            <option value="Any Difficulty" selected>Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
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
  category = -1;
  difficulty = "Any Difficulty";

  categories: Array<Category> = [];

  constructor(private formBuilder: FormBuilder, public quizzapi: QuizzapiService) {
    this.newgameForm = this.formBuilder.group({
      numberOfQuestions: this.nbQuestions,
      category: this.category,
      difficulty: this.difficulty
    });
  }

  onSubmit(newgameData){
    this.nbQuestions = newgameData.numberOfQuestions;
    this.category = newgameData.category;
    this.difficulty = newgameData.difficulty;

    this.newgameForm.reset();
    this.showForm = false;
  }

  ngOnInit(): void {
    this.categories = this.quizzapi.getCategories();
  }

}
