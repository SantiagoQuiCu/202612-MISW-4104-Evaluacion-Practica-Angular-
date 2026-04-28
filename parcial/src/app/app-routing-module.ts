import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioListComponent } from './usuario/usuario-list/usuario-list.component';
import { RepositorioListComponent } from './repositorio/repositorio-list/repositorio-list.component';
import { RepositorioDetalleComponent } from './repositorio/repositorio-detalle/repositorio-detalle.component';

export const routes: Routes = [
  { path: '', component: UsuarioListComponent},
  { path:'repositorios', component: RepositorioListComponent},
  { path:'repositorios/:id', component: RepositorioDetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
