import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositorioListComponent } from './repositorio-list/repositorio-list.component';
import { RepositorioDetalleComponent } from './repositorio-detalle/repositorio-detalle.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [RepositorioListComponent, RepositorioDetalleComponent],
  exports:[ RepositorioListComponent, RepositorioDetalleComponent]
})
export class RepositorioModule { }
