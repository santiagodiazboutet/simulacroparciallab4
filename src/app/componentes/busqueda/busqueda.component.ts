import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/interface/pelicula';
import { MiHttpService } from 'src/app/servicios/mi-http.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  nombre:string;
  peliculas:Array<Pelicula>;
  peliculasbup:Array<Pelicula>;
  aMostrar:Pelicula;
  constructor(private httpservice:MiHttpService) {
    this.httpservice.obtenerPaises("https://run.mocky.io/v3/a7b438d3-d156-43ab-aa6d-3c773a02aeee").subscribe((paises: any) => {
      this.peliculas=paises;
      this.peliculasbup=paises;
    }, error => {
      console.log('Error');
    });
   }

  ngOnInit(): void {
  }
  Buscar(){
    this.peliculas=new Array<Pelicula>();
    this.peliculasbup.forEach(val=>{
      if(val.nombre.includes(this.nombre)){
        this.peliculas.push(val);
      }
    })
  }
  Detallar(peli){
this.aMostrar=peli;
  }
}
