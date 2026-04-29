/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UsuarioListComponent } from './usuario-list.component';
import { faker } from '@faker-js/faker';
import { Usuario } from '../usuario';
import { UsuarioDetalleComponent } from '../usuario-detalle/usuario-detalle.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UsuarioListComponent', () => {
  let component: UsuarioListComponent;
  let fixture: ComponentFixture<UsuarioListComponent>;
  let debug: DebugElement;
  let numUsuario: number = 30;
  let usuarioArray: Array<Usuario> = [];

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioListComponent,
        UsuarioDetalleComponent
      ],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioListComponent);
    component = fixture.componentInstance;
    usuarioArray = [];

    for (let i = 0; i < numUsuario; i++) {
      const usuario = new Usuario(
        faker.number.int(),
        faker.internet.username(),
        faker.person.fullName(),
        faker.internet.email(),
        faker.image.avatar(),
        faker.person.jobTitle(),
        faker.location.city(),
        [faker.number.int(), faker.number.int()]
      )
      component.usuarios.push(usuario);
      usuarioArray.push(usuario);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('usuarios debe tener 30 elementos', () => {
    expect(component.usuarios.length).toBe(numUsuario);
  });

  it('deben existir 30 tarjetas', () => {
    expect(debug.queryAll(By.css('.profile-card'))).toHaveSize(numUsuario);
  });

  it('deben existir 30 imagenes de perfil', () => {
    expect(debug.queryAll(By.css('.profile-img-container img'))).toHaveSize(numUsuario);
  });

  it('deben existir 30 nombres', () => {
    expect(debug.queryAll(By.css('.card-title'))).toHaveSize(numUsuario);
  });

  it('deben existir 30 usernames', () => {
    expect(debug.queryAll(By.css('.text-muted.small'))).toHaveSize(numUsuario);
  });

  it('deben existir 30 emails', () => {
    expect(debug.queryAll(By.css('.badge-user'))).toHaveSize(numUsuario);
  });

  it('deben existir 30 botones ver detalle', () => {
    expect(debug.queryAll(By.css('.view-profile-link'))).toHaveSize(numUsuario);
  });

  it('las imagenes deben coincidir con las del componente', () => {
    const imagenes = debug.queryAll(By.css('.profile-img-container img'));
    imagenes.forEach((img, i) => {
      const src = img.nativeElement.getAttribute('src');
      expect(src).toBe(usuarioArray[i].avatarUrl);
    });
  });

  it('los nombres deben coincidir con los del componente', () => {
    const nombres = debug.queryAll(By.css('.card-title'));
    nombres.forEach((nombre, i) => {
      const name = nombre.nativeElement.innerHTML.trim();
      expect(name).toBe(usuarioArray[i].name);
    });
  });

  it('los roles deben coincidir con los del componente', () => {
    const roles = debug.queryAll(By.css('.badge-user'));
    roles.forEach((badge, i) => {
      const role = badge.nativeElement.innerHTML.trim();
      expect(role).toBe(usuarioArray[i].role);
    });
  });

  it('los usernames deben coincidir con los del componente', () => {
    const usernames = debug.queryAll(By.css('.text-muted.small'));
    usernames.forEach((username, i) => {
      const user = username.nativeElement.innerHTML.trim();
      expect(user).toBe(usuarioArray[i].username);
    });
  });
});
