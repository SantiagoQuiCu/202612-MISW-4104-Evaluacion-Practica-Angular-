import { Component, OnChanges, OnInit,SimpleChanges } from '@angular/core';
import { Usuario } from '../usuario';
import { Repositorio } from '../../repositorio/repositorio';
import { RepositorioService } from '../../repositorio/repositorio.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-usuario-detalle',
  standalone: false,
  templateUrl: './usuario-detalle.component.html',
  styleUrls: ['./usuario-detalle.component.css']
})
export class UsuarioDetalleComponent implements OnChanges{
  @Input() UsuarioDetalle!: Usuario ;
  repositorios:Array<Repositorio>=[];

  constructor(private repositorioService: RepositorioService) { }

  getRepositorios(repoIds:Array<number>):void{
    if (repoIds.length>0){
      this.repositorioService.getRepositorios().subscribe(repos=>{
        repos.filter(r=>{
           repoIds.forEach(element=>{
            if(element===r.id){this.repositorios.push(r)}
           })
        });
      })
    }
    console.log(this.repositorios);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['UsuarioDetalle'] && this.UsuarioDetalle) {
      this.getRepositorios(this.UsuarioDetalle.repoIds);
    }
  }
}
