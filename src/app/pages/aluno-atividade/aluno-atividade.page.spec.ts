import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoAtividadePage } from './aluno-atividade.page';

describe('AlunoAtividadePage', () => {
  let component: AlunoAtividadePage;
  let fixture: ComponentFixture<AlunoAtividadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoAtividadePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoAtividadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
