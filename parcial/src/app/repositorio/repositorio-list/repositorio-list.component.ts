import { Component, OnInit } from '@angular/core';
import { Repositorio } from '../repositorio';
import { RepositorioService } from '../repositorio.service';

@Component({
  selector: 'app-repositorio-list',
  standalone: false,
  templateUrl: './repositorio-list.component.html',
  styleUrls: ['./repositorio-list.component.css']
})
export class RepositorioListComponent implements OnInit {
  repositorios : Array<Repositorio> = [];

  constructor(private repositorioService : RepositorioService) { }

  getRepositorios():void{
    this.repositorioService.getRepositorios().subscribe((repo)=>{
      this.repositorios = repo;
      console.log(this.repositorios)
    })

  }
  

  

  ngOnInit() {
    this.getRepositorios();
  }

}
