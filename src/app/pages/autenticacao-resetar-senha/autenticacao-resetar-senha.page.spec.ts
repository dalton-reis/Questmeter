import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutenticacaoResetarSenhaPage } from './autenticacao-resetar-senha.page';

describe('AutenticacaoResetarSenhaPage', () => {
  let component: AutenticacaoResetarSenhaPage;
  let fixture: ComponentFixture<AutenticacaoResetarSenhaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutenticacaoResetarSenhaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutenticacaoResetarSenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
