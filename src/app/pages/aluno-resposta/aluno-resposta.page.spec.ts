import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoRespostaPage } from './aluno-resposta.page';

describe('AlunoRespostaPage', () => {
  let component: AlunoRespostaPage;
  let fixture: ComponentFixture<AlunoRespostaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoRespostaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoRespostaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
