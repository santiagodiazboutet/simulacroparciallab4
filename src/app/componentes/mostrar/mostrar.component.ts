import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/interface/pelicula';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {
  @Input() pais:Pelicula;

  constructor() { }

  ngOnInit(): void {
  }
  accion(){
    this.pais=null;
  }
}
