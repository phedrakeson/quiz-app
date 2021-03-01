import { Component, ElementRef, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IQuestion, QuizService } from './quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  public questionIndex: number = 0;
  public questions: IQuestion[] = [];

  public answers: any;

  constructor(private snackBar: MatSnackBar, private quizService: QuizService) { }
  
  ngOnInit(): void {
    this.renderCurrentQuestion();
  }

  renderCurrentQuestion() {
    this.questions = this.quizService.getQuestions();
    this.answers = this.questions[this.questionIndex].answers;
    console.log({questions: this.questions });
  }

  verifyAnswer(event: any) {
    if(event.currentTarget.innerText === this.questions[this.questionIndex].answer) {
      this.snackBar.open('Resposta correta!', undefined, {
        panelClass: ['correct'],
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration: 1000,
      });
      this.nextQuestion();
    }
    else {
      this.snackBar.open('Resposta errada!', undefined, {
        panelClass: ['incorrect'],
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration: 1000,
      });
      setTimeout( () => this.nextQuestion() , 1000)
    }
  }

  nextQuestion() {
    this.questionIndex += 1;
    this.renderCurrentQuestion();
    console.log(this.questionIndex);
  }
}
