import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorAtividadePage } from './professor-atividade.page';

describe('ProfessorAtividadePage', () => {
  let component: ProfessorAtividadePage;
  let fixture: ComponentFixture<ProfessorAtividadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorAtividadePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorAtividadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
