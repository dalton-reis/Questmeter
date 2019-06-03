import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorAtividadeApresentacaoPage } from './professor-atividade-apresentacao.page';

describe('ProfessorAtividadeApresentacaoPage', () => {
  let component: ProfessorAtividadeApresentacaoPage;
  let fixture: ComponentFixture<ProfessorAtividadeApresentacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorAtividadeApresentacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorAtividadeApresentacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
