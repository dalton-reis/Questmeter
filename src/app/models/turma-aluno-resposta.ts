export interface ITurmaAlunoResposta {
    id?: string;
    turma: string;
    turmaAluno: string; //FK - reference
    resposta: string; //FK -reference
}
