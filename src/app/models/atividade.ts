export interface IAtividade {
    id?: string;
    professor: string; //FK
    disciplina: string;
    nome: string;
    dataTermino: Date;
    dataCriacao: Date;
}
