export interface ITurma {
    id?: string;
    atividade: string; //FK
    nome: string; 
    token: string;
    dataCriacao: Date;
    atividadeIniciada: boolean;
    atividadeFinalizada: boolean;
    questaoAtual: string; //FK
}
