import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { AltapeliculaComponent } from './componentes/altapelicula/altapelicula.component';
import { AltaactorComponent } from './componentes/altaactor/altaactor.component';
import { ActorlistadoComponent } from './componentes/actorlistado/actorlistado.component';
import { PeliculalistadoComponent } from './componentes/peliculalistado/peliculalistado.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { TablapeliculaComponent } from './componentes/tablapelicula/tablapelicula.component';
import { HttpClientModule } from '@angular/common/http';
import { MostrarComponent } from './componentes/mostrar/mostrar.component';
import { BorrarComponent } from './componentes/borrar/borrar.component';
import { ModificarComponent } from './componentes/modificar/modificar.component';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    AltapeliculaComponent,
    AltaactorComponent,
    ActorlistadoComponent,
    PeliculalistadoComponent,
    BienvenidoComponent,
    TablapeliculaComponent,
    MostrarComponent,
    BorrarComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
