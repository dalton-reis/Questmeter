export interface IAtividade {
    id?: string;
    nome: string;
    professor: string //FK
    problema: string;
    tipo: string;
    dataTermino: Date;
    iniciada: boolean;
    codigo: string;
}
