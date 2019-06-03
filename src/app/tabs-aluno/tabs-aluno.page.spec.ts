import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsAlunoPage } from './tabs-aluno.page';

describe('TabsAlunoPage', () => {
  let component: TabsAlunoPage;
  let fixture: ComponentFixture<TabsAlunoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsAlunoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsAlunoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
