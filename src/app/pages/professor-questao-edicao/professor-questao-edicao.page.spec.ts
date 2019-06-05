import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorQuestaoEdicaoPage } from './professor-questao-edicao.page';

describe('ProfessorQuestaoEdicaoPage', () => {
  let component: ProfessorQuestaoEdicaoPage;
  let fixture: ComponentFixture<ProfessorQuestaoEdicaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorQuestaoEdicaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorQuestaoEdicaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
