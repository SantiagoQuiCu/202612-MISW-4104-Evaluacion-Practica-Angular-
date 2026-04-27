import { Component, OnInit, Inject } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-list',
  standalone: false,
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
  usuarios : Array<Usuario>= [];

  constructor( @Inject(UsuarioService) private usuarioService : UsuarioService) { }

  getUsuarios():void{
    this.usuarioService.getUsuarios().subscribe((user) =>{
      this.usuarios = user;
      console.log(this.usuarios);

    });
  }

  ngOnInit() {
    this.getUsuarios();
  };

}
