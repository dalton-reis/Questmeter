export interface ITurmaAluno {
    id?: string;
    turma: string; //FK - reference
    aluno: string; //FK -reference
    alunoPontuacao: number;
}
