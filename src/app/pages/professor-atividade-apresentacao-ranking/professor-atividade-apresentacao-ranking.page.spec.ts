import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorAtividadeApresentacaoRankingPage } from './professor-atividade-apresentacao-ranking.page';

describe('ProfessorAtividadeApresentacaoRankingPage', () => {
  let component: ProfessorAtividadeApresentacaoRankingPage;
  let fixture: ComponentFixture<ProfessorAtividadeApresentacaoRankingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorAtividadeApresentacaoRankingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorAtividadeApresentacaoRankingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
