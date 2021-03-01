import { Directive, ElementRef } from '@angular/core';
import { QuizComponent } from 'src/app/features/quiz/quiz.component';

@Directive({
  selector: '[appTimer]'
})
export class TimerDirective {

  public timer: number = 60;
  constructor(el: ElementRef, private quizComponent: QuizComponent) {
    setInterval(() => {
      if(this.timer <= 0) {
        clearInterval();
        this.quizComponent.nextQuestion;
      } else {
        this.timer--
        el.nativeElement.innerText = this.timer
      }
    }, 1000)
  }
}
