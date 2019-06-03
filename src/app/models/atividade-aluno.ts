export interface IAtividadeAluno {
    id?: string;
    atividade: string; //FK - reference
    aluno: string; //FK -reference
    alunoVotou: boolean;
    alunoPontuacao: number;
}
