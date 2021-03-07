import { Component, ElementRef, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IQuestion, QuizService } from './quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  public questionIndex: number = 0;
  public questions: IQuestion[] = [];
  public timer: number = 60;


  public answers: any;

  constructor(private snackBar: MatSnackBar, private quizService: QuizService, private router: Router) { }
  
  ngOnInit(): void {
    this.questions = this.quizService.getQuestions();
    this.questionTimer();
    this.renderCurrentQuestion();
  }

  renderCurrentQuestion() {
    if(this.questionIndex >= 10) {
      this.endQuiz()
    } else {
      this.timer = 60;
      this.answers = this.questions[this.questionIndex].answers;
    }


  }

  verifyAnswer(event: any) {
    if(event.currentTarget.innerText === this.questions[this.questionIndex].answer) {
      this.snackBar.open('Resposta correta!', undefined, {
        panelClass: ['correct'],
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration: 1000,
      });
      this.quizService.score++;
      setTimeout( () => this.nextQuestion() , 1000)
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
  }

  endQuiz() {
    console.log('O quiz acabou, indo para próxima tela')
    this.router.navigate(['quiz/result'])
  }

  questionTimer() {
    setInterval(() => {
      if(this.timer <= 0) {
        this.nextQuestion();
      } else {
        this.timer--
      }
    }, 1000)
  }
}
