/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RepositorioDetalleComponent } from './repositorio-detalle.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Repositorio } from '../repositorio';
import { Usuario } from '../../usuario/usuario';
import { faker } from '@faker-js/faker';

describe('RepositorioDetalleComponent', () => {
  let component: RepositorioDetalleComponent;
  let fixture: ComponentFixture<RepositorioDetalleComponent>;
  let debug: DebugElement;
  let repositorioTest: Repositorio;
  let usuarioTest: Usuario;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [RepositorioDetalleComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositorioDetalleComponent);
    component = fixture.componentInstance;
    repositorioTest = new Repositorio(
      faker.number.int(),
      faker.lorem.words(2),
      faker.lorem.sentence(),
      faker.helpers.arrayElement(['TypeScript', 'JavaScript', 'Python', 'Java']),
      faker.number.int({ min: 0, max: 1000 }),
      faker.date.past().toISOString().split('T')[0],
      faker.number.int()
    );

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

    component.repositorio = repositorioTest;
    component.usuario = usuarioTest;

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('el nombre del repositorio debe coincidir con el del componente', () => {
    const nombre = debug.query(By.css('.repo-name'));
    expect(nombre.nativeElement.textContent.trim()).toBe(repositorioTest.name);
  });

  it('la descripcion del repositorio debe coincidir con la del componente', () => {
    const descripcion = debug.query(By.css('.repo-description'));
    expect(descripcion.nativeElement.textContent.trim()).toBe(repositorioTest.description);
  });

  it('el lenguaje del repositorio debe coincidir con el del componente', () => {
    const lenguaje = debug.query(By.css('.repo-language'));
    expect(lenguaje.nativeElement.textContent.trim()).toBe(repositorioTest.language);
  });

  it('la fecha del repositorio debe coincidir con la del componente', () => {
    const fecha = debug.query(By.css('.repo-date'));
    expect(fecha.nativeElement.textContent.trim()).toBe(repositorioTest.createdAt);
  });

  it('las estrellas del repositorio deben coincidir con las del componente', () => {
    const estrellas = debug.query(By.css('.repo-stars'));
    expect(estrellas.nativeElement.textContent.trim()).toContain(String(repositorioTest.stars));
  });

  it('la imagen del owner debe coincidir con la del componente', () => {
    const avatar = debug.query(By.css('.owner-avatar'));
    expect(avatar.nativeElement.getAttribute('src')).toBe(usuarioTest.avatarUrl);
  });

  it('el nombre del owner debe coincidir con el del componente', () => {
    const nombre = debug.query(By.css('.owner-name'));
    expect(nombre.nativeElement.textContent.trim()).toBe(usuarioTest.name);
  });

  it('el username del owner debe coincidir con el del componente', () => {
    const username = debug.query(By.css('.owner-username'));
    expect(username.nativeElement.textContent.trim()).toBe(usuarioTest.username);
  });

  it('el rol del owner debe coincidir con el del componente', () => {
    const role = debug.query(By.css('.owner-role'));
    expect(role.nativeElement.textContent.trim()).toBe(usuarioTest.role);
  });

  it('la ubicacion del owner debe coincidir con la del componente', () => {
    const location = debug.query(By.css('.owner-location'));
    expect(location.nativeElement.textContent.trim()).toBe(usuarioTest.location);
  });

  it('el email del owner debe coincidir con el del componente', () => {
    const email = debug.query(By.css('.owner-email'));
    expect(email.nativeElement.textContent.trim()).toBe(usuarioTest.email);
  });

});
