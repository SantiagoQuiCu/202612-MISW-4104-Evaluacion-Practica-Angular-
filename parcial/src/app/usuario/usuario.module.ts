import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [UsuarioListComponent, UsuarioDetalleComponent],
  exports: [UsuarioListComponent,UsuarioDetalleComponent]
})
export class UsuarioModule { }
