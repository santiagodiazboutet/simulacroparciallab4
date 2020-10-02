import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import{Pelicula} from "../../interface/pelicula"
@Component({
  selector: 'app-tablapelicula',
  templateUrl: './tablapelicula.component.html',
  styleUrls: ['./tablapelicula.component.css']
})
export class TablapeliculaComponent implements OnInit {
  @Input() listaPeliculas:Array<Pelicula>;
  @Output() mandaPelicula:EventEmitter<any>;
  @Output() mandaLista:EventEmitter<any>;

  constructor() {
    this.listaPeliculas=new Array<Pelicula>();
    this.mandaPelicula=new EventEmitter<any>();
   }

  ngOnInit(): void {
  }

  seleccionaPelicula(pais){

    this.mandaPelicula.emit(pais);
  }

}
