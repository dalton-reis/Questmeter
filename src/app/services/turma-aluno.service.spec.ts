import { TestBed } from '@angular/core/testing';

import { TurmaAlunoService } from './turma-aluno.service';

describe('TurmaAlunoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TurmaAlunoService = TestBed.get(TurmaAlunoService);
    expect(service).toBeTruthy();
  });
});
