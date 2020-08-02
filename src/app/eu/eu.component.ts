import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css']
})

export class EuComponent implements OnInit {
  
  nome:string = 'Luis Alberto Ruiz Gomez';
  idade:number = 27;
  gostos:string = 'Viajar, Artes Marciales e Economia';
  residencia:string = 'Venezuela, Rio de Janeiro';
  logo:string = 'assets/luisaquario.jpg'
  

    getNome() {
    return this.nome;
    }

    getIdade() {
    return this.idade;
    }

    getGostos() {
    return this.gostos;
    }

    getResidencia() {
      return this.residencia;
    }


  constructor() { }

  ngOnInit(): void {
  }

}
