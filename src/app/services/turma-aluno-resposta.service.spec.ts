import { TestBed } from '@angular/core/testing';

import { TurmaAlunoRespostaService } from './turma-aluno-resposta.service';

describe('TurmaAlunoRespostaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TurmaAlunoRespostaService = TestBed.get(TurmaAlunoRespostaService);
    expect(service).toBeTruthy();
  });
});
