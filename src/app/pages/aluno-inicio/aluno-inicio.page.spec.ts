import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoInicioPage } from './aluno-inicio.page';

describe('AlunoInicioPage', () => {
  let component: AlunoInicioPage;
  let fixture: ComponentFixture<AlunoInicioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoInicioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoInicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
