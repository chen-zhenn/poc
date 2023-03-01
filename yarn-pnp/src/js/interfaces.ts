export interface IQuestion {
    id: number;
    question: string;
    category?: string;
}

export interface Ianswer {
    answer: string;
    questionId: number;
}

export interface IQuestionList {
    lista: IQuestion[];
}