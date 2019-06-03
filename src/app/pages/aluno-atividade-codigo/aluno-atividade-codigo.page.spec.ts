import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoAtividadeCodigoPage } from './aluno-atividade-codigo.page';

describe('AlunoAtividadeCodigoPage', () => {
  let component: AlunoAtividadeCodigoPage;
  let fixture: ComponentFixture<AlunoAtividadeCodigoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoAtividadeCodigoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoAtividadeCodigoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
