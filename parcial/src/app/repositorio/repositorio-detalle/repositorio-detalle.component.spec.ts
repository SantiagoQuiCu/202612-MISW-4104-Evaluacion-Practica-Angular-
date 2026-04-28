/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RepositorioDetalleComponent } from './repositorio-detalle.component';

describe('RepositorioDetalleComponent', () => {
  let component: RepositorioDetalleComponent;
  let fixture: ComponentFixture<RepositorioDetalleComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ RepositorioDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositorioDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
