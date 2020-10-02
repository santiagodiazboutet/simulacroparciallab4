import { ActorlistadoComponent } from '../componentes/actorlistado/actorlistado.component';

export interface Pelicula {


  img_src:string,
  nombre:string,
  fecha_estreno:string,
  id:number,
  tipo:"terror"| "comedia" | "amor" | "otros",
  cant_publico:number
  actor:Actor[];
}
export interface Actor{
  id:number,
  Nombre:String,
  apellido:String,
  sexo:String,
  fecha_nacimiento:String,
  Foto:String;
}
