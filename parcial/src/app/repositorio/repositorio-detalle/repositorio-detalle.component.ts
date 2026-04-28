import { Component, Input, OnInit } from '@angular/core';
import { Repositorio } from '../repositorio';
import { UsuarioService } from '../../usuario/usuario.service';
import { Usuario } from '../../usuario/usuario';
import { RepositorioService } from '../repositorio.service';

@Component({
  selector: 'app-repositorio-detalle',
  standalone: false,
  templateUrl: './repositorio-detalle.component.html',
  styleUrls: ['./repositorio-detalle.component.css']
})
export class RepositorioDetalleComponent implements OnInit {
  @Input() id!: number;
  usuario!:Usuario;
  repositorio!:Repositorio;

  constructor(private usuarioService: UsuarioService, private repositorioService:RepositorioService) { }

  getUsuarios(id:number):void{
    this.usuarioService.getUsuarios().subscribe(users=>{
      let usuario= users.find(e=> (e.id ==id))!;
      this.usuario = usuario;
      console.log(usuario);
    })

  }
  getRepositorio(id:number):void{
    this.repositorioService.getRepositorios().subscribe(repos=>{
      let repositorio = repos.find(e=>(e.id==id))!;
      this.repositorio = repositorio;
      console.log(repositorio);
      this.getUsuarios(this.repositorio.ownerId);
    })
  }

  ngOnInit() {
    console.log(this.id);
    this.getRepositorio(this.id);
  }

}
