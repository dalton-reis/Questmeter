import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoPerfilPage } from './aluno-perfil.page';

describe('AlunoPerfilPage', () => {
  let component: AlunoPerfilPage;
  let fixture: ComponentFixture<AlunoPerfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoPerfilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
