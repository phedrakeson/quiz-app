import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz/quiz.service';

@Component({
  selector: 'app-quiz-final',
  templateUrl: './quiz-final.component.html',
  styleUrls: ['./quiz-final.component.scss']
})
export class QuizFinalComponent implements OnInit {

  public score = this.quizService.score;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
  }

}
