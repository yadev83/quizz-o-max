import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzConclusionComponent } from './quizz-conclusion.component';

describe('QuizzConclusionComponent', () => {
  let component: QuizzConclusionComponent;
  let fixture: ComponentFixture<QuizzConclusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizzConclusionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzConclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
