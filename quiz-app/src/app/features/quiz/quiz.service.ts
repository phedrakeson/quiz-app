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

  public score: number = 0;

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
      question: 'O que === tem de diferente de ==?',
      answers: [
        { text: 'Nada'},
        { text: 'Verifica valor e tipo'},
        { text: 'Verifica somente o tipo'},
        { text: 'Atribui um valor'}
      ],
      answer: 'Verifica valor e tipo'
    },
    {
      question: 'O que “1” + 2 + 4 retorna?',
      answers: [
        { text: '7'},
        { text: '"7"'},
        { text: '124'},
        { text: '"124"'}
      ],
      answer: '"124"'
    },
    {
      question: 'Qual a diferença entre undefined e null?',
      answers: [
        { text: 'Undefined significa que o valor ainda não foi definido, já null é um bug'},
        { text: 'Undefined significa que o valor ainda não foi definido, já null é um erro'},
        { text: 'Null significa que o valor ainda não foi definido, já undefined é um erro'},
        { text: 'Nenhuma'}
      ],
      answer: 'Undefined significa que o valor ainda não foi definido, já null é um erro'
    },
    {
      question: 'Java === Javascript?',
      answers: [
        { text: 'Sim'},
        { text: 'Não'},
        { text: 'Não sei'},
        { text: 'Python?'}
      ],
      answer: 'Não'
    },
    {
      question: 'Método para retornar um número como string',
      answers: [
        { text: 'Number'},
        { text: 'transform'},
        { text: 'numberToString'},
        { text: 'toString'}
      ],
      answer: 'toString'
    },
    {
      question: 'O que o método .click() faz?',
      answers: [
        { text: 'Nada'},
        { text: 'Simula um clique no objeto'},
        { text: 'Simula um clique na página'},
        { text: 'Simula um clique no browser'}
      ],
      answer: 'Simula um clique no objeto'
    },
    {
      question: 'Método para limitar o número de casas decimais',
      answers: [
        { text: 'toFixed'},
        { text: 'toDecimals'},
        { text: 'toPrecision'},
        { text: 'maxDecimals'}
      ],
      answer: 'toFixed'
    },
    {
      question: 'Diferença entre For In e For Of loops',
      answers: [
        { text: 'For In retorna as chaves enquanto For Of retorna o conteúdo em si'},
        { text: 'For Of retorna as chaves enquanto For In retorna o conteúdo em si'},
        { text: 'For Of funciona apenas com objetos'},
        { text: 'For In funciona apenas com iteráveis'}
      ],
      answer: 'For In retorna as chaves enquanto For Of retorna o conteúdo em si'
    },
  ];

  getQuestions() {
    return this.questions;
  }
}
