import { TestBed } from '@angular/core/testing';

import { AtividadeAlunoService } from './atividade-aluno.service';

describe('AtividadeAlunoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AtividadeAlunoService = TestBed.get(AtividadeAlunoService);
    expect(service).toBeTruthy();
  });
});
