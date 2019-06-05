import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoAtividadeAbrirPage } from './aluno-atividade-abrir.page';

describe('AlunoAtividadeAbrirPage', () => {
  let component: AlunoAtividadeAbrirPage;
  let fixture: ComponentFixture<AlunoAtividadeAbrirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoAtividadeAbrirPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoAtividadeAbrirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
