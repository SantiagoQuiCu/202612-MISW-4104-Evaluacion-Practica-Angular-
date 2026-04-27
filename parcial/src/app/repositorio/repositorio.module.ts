import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositorioListComponent } from './repositorio-list/repositorio-list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RepositorioListComponent],
  exports:[ RepositorioListComponent]
})
export class RepositorioModule { }
