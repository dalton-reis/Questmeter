export interface IQuestao {
    id?: string;
    atividade: string; //FK
    apelido: string;
    problema: string;
    dataCriacao: Date;
    //status: number; //0 - não iniciada; 1 - iniciada; 2 - terminada
}
