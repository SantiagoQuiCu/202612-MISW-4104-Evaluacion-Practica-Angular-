/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { UsuarioDetalleComponent } from './usuario-detalle.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Usuario } from '../usuario';
import { Repositorio } from '../../repositorio/repositorio';

describe('UsuarioDetalleComponent', () => {
  let component: UsuarioDetalleComponent;
  let fixture: ComponentFixture<UsuarioDetalleComponent>;
  let debug: DebugElement;
  let numRepositorios: number = 3;
  let repositorioArray: Array<Repositorio> = [];
  let usuarioTest: Usuario;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioDetalleComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioDetalleComponent);
    component = fixture.componentInstance;
    repositorioArray = [];

    // Crear usuario de prueba
    usuarioTest = new Usuario(
      faker.number.int(),
      faker.internet.username(),
      faker.person.fullName(),
      faker.internet.email(),
      faker.image.avatar(),
      faker.person.jobTitle(),
      faker.location.city(),
      []
    );

    // Crear repositorios de prueba y asignarlos directo al componente
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
      repositorioArray.push(repositorio);
    }

    component.UsuarioDetalle = usuarioTest;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('repositorios debe tener 3 elementos', () => {
    expect(component.repositorios.length).toBe(numRepositorios);
  });

  it('deben existir 3 tarjetas de repositorio', () => {
    expect(debug.queryAll(By.css('.repositorio'))).toHaveSize(numRepositorios);
  });

  it('deben existir 3 titulos', () => {
    expect(debug.queryAll(By.css('.repo-title'))).toHaveSize(numRepositorios);
  });

  it('deben existir 3 badges de estrellas', () => {
    expect(debug.queryAll(By.css('.badge-stars'))).toHaveSize(numRepositorios);
  });

  it('deben existir 3 descripciones', () => {
    expect(debug.queryAll(By.css('.description'))).toHaveSize(numRepositorios);
  });

  it('deben existir 3 lenguajes', () => {
    expect(debug.queryAll(By.css('.language'))).toHaveSize(numRepositorios);
  });

  it('deben existir 3 fechas', () => {
    expect(debug.queryAll(By.css('.createdAt'))).toHaveSize(numRepositorios);
  });


  it('los nombres deben coincidir con los del componente', () => {
    const nombres = debug.queryAll(By.css('.repo-title'));
    nombres.forEach((nombre, i) => {
      const name = nombre.nativeElement.innerHTML.trim();
      expect(name).toBe(repositorioArray[i].name);
    });
  });

  it('las estrellas deben coincidir con las del componente', () => {
    const estrellas = debug.queryAll(By.css('.badge-stars'));
    estrellas.forEach((estrella, i) => {
      const stars = estrella.nativeElement.textContent.trim();
      expect(stars).toContain(String(repositorioArray[i].stars));
    });
  });

  it('las descripciones deben coincidir con las del componente', () => {
    const descripciones = debug.queryAll(By.css('.description'));
    descripciones.forEach((descripcion, i) => {
      const desc = descripcion.nativeElement.textContent.trim();
      expect(desc).toBe(repositorioArray[i].description);
    });
  });
  it('las descripciones deben coincidir con las del componente', () => {
    const descripciones = debug.queryAll(By.css('.description'));
    descripciones.forEach((descripcion, i) => {
      const desc = descripcion.nativeElement.textContent.trim();
      expect(desc).toBe(repositorioArray[i].description);
    });
  });

  it('los lenguajes deben coincidir con los del componente', () => {
    const lenguajes = debug.queryAll(By.css('.language'));
    lenguajes.forEach((lenguaje, i) => {
      const language = lenguaje.nativeElement.textContent.trim();
      expect(language).toBe(repositorioArray[i].language);
    });
  });

  it('las fechas deben coincidir con las del componente', () => {
    const fechas = debug.queryAll(By.css('.createdAt'));
    fechas.forEach((fecha, i) => {
      const createdAt = fecha.nativeElement.textContent.trim();
      expect(createdAt).toBe(repositorioArray[i].createdAt);
    });
  });

});
