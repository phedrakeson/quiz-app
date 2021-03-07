import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFinalComponent } from './quiz-final.component';

describe('QuizFinalComponent', () => {
  let component: QuizFinalComponent;
  let fixture: ComponentFixture<QuizFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
