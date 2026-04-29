/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RepositorioListComponent } from './repositorio-list.component';
import { faker } from '@faker-js/faker';
import { Repositorio } from '../repositorio';
import { RepositorioDetalleComponent } from '../repositorio-detalle/repositorio-detalle.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('RepositorioListComponent', () => {
  let component: RepositorioListComponent;
  let fixture: ComponentFixture<RepositorioListComponent>;
  let debug: DebugElement;
  let numRepositorios: number = 30;
  let repositoriosArray: Array<Repositorio> = [];

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [RepositorioListComponent,
        RepositorioDetalleComponent
      ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositorioListComponent);
    component = fixture.componentInstance;
    repositoriosArray = [];

    for (let i = 0; i < numRepositorios; i++) {
      const repositorio = new Repositorio(
        faker.number.int(),
        faker.lorem.words(2),
        faker.lorem.sentence(),
        faker.helpers.arrayElement(['TypeScript', 'JavaScript', 'Python', 'Java']),
        faker.number.int({ min: 0, max: 1000 }),
        faker.date.past().toISOString().split('T')[0],
        faker.number.int()
      );
      component.repositorios.push(repositorio);
      repositoriosArray.push(repositorio);
    }


    fixture.detectChanges();
    debug = fixture.debugElement;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('repositorios debe tener 30 elementos', () => {
    expect(component.repositorios.length).toBe(numRepositorios);
  });

  it('deben existir 30 tarjetas', () => {
    expect(debug.queryAll(By.css('.repo-card'))).toHaveSize(numRepositorios);
  });

  it('deben existir 30 titulos', () => {
    expect(debug.queryAll(By.css('.repo-title'))).toHaveSize(numRepositorios);
  });

  it('deben existir 30 badges de estrellas', () => {
    expect(debug.queryAll(By.css('.badge-stars'))).toHaveSize(numRepositorios);
  });

  it('deben existir 30 botones ver detalle', () => {
    expect(debug.queryAll(By.css('.btn-outline-primary'))).toHaveSize(numRepositorios);
  });

  it('los nombres deben coincidir con los del componente', () => {
    const nombres = debug.queryAll(By.css('.repo-title'));
    nombres.forEach((nombre, i) => {
      const name = nombre.nativeElement.innerHTML.trim();
      expect(name).toBe(repositoriosArray[i].name);
    });
  });

  it('las estrellas deben coincidir con las del componente', () => {
    const estrellas = debug.queryAll(By.css('.badge-stars'));
    estrellas.forEach((estrella, i) => {
      const stars = estrella.nativeElement.textContent.trim();
      expect(stars).toContain(String(repositoriosArray[i].stars));
    });
  });

  it('los botones ver detalle deben tener el routerLink correcto', () => {
    const botones = debug.queryAll(By.css('.btn-outline-primary'));
    botones.forEach((boton, i) => {
      const href = boton.nativeElement.getAttribute('href');
      expect(href).toContain(String(repositoriosArray[i].id));
    });
  });

  it('las descripciones deben coincidir con las del componente', () => {
    const descripciones = debug.queryAll(By.css('.text-muted:not(.small)'));
    descripciones.forEach((descripcion, i) => {
      const desc = descripcion.nativeElement.textContent.trim();
      expect(desc).toBe(repositoriosArray[i].description);
    });
  });
});
