import { Injectable } from '@angular/core';

export interface IQuestion {
  question: string;
  answers: any[],
  answer: string;
}

@Injectable({
  providedIn: 'root'
})

export class QuizService {
  constructor() { }
  public questionIndex: number = 0;
  public questions: IQuestion[] = [
    {
      question: 'Método de array para modificar cada item e retornar uma array nova',
      answers: [
        { text: 'forEach'},
        { text: 'log'},
        { text: 'map'},
        { text: 'filter'}
      ],
      answer: 'map'
    },
    {
      question: 'Método de array que retorna dentro de uma array nova todos os itens avaliados como true',
      answers: [
        { text: 'filter'},
        { text: 'pop'},
        { text: 'find'},
        { text: 'reduce'}
      ],
      answer: 'filter'
    },
    {
      question: 'outra pergunta',
      answers: [
        { text: '1'},
        { text: '2'},
        { text: '3'},
        { text: '4'}
      ],
      answer: '4'
    },
    {
      question: 'outra pergunta',
      answers: [
        { text: '1'},
        { text: '2'},
        { text: '3'},
        { text: '4'}
      ],
      answer: '4'
    },
    {
      question: 'outra pergunta',
      answers: [
        { text: '1'},
        { text: '2'},
        { text: '3'},
        { text: '4'}
      ],
      answer: '4'
    },
    {
      question: 'outra pergunta',
      answers: [
        { text: '1'},
        { text: '2'},
        { text: '3'},
        { text: '4'}
      ],
      answer: '4'
    },
    {
      question: 'outra pergunta',
      answers: [
        { text: '1'},
        { text: '2'},
        { text: '3'},
        { text: '4'}
      ],
      answer: '4'
    },
    {
      question: 'outra pergunta',
      answers: [
        { text: '1'},
        { text: '2'},
        { text: '3'},
        { text: '4'}
      ],
      answer: '4'
    },
    {
      question: 'outra pergunta',
      answers: [
        { text: '1'},
        { text: '2'},
        { text: '3'},
        { text: '4'}
      ],
      answer: '4'
    },
    {
      question: 'outra pergunta',
      answers: [
        { text: '1'},
        { text: '2'},
        { text: '3'},
        { text: '4'}
      ],
      answer: '4'
    },
  ];

  getQuestions() {
    return this.questions;
  }
}
