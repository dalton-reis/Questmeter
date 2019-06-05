import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorAtividadeApresentacaoTurmaPage } from './professor-atividade-apresentacao-turma.page';

describe('ProfessorAtividadeApresentacaoTurmaPage', () => {
  let component: ProfessorAtividadeApresentacaoTurmaPage;
  let fixture: ComponentFixture<ProfessorAtividadeApresentacaoTurmaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorAtividadeApresentacaoTurmaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorAtividadeApresentacaoTurmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
