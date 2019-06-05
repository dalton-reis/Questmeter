import { IAtividade } from './atividade';
import { DocumentReference } from 'angularfire2/firestore';

export interface IResposta {
    id?: string;
    conteudo: string;
    questao: string; //FK - reference
    correta: boolean;
    pontuacao: number;
}