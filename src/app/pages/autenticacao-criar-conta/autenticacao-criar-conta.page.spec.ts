import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutenticacaoCriarContaPage } from './autenticacao-criar-conta.page';

describe('AutenticacaoCriarContaPage', () => {
  let component: AutenticacaoCriarContaPage;
  let fixture: ComponentFixture<AutenticacaoCriarContaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutenticacaoCriarContaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutenticacaoCriarContaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
