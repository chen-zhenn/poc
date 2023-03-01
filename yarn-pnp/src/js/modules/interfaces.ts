export interface Icategory {
    id: number;
    name: string;
}

export interface IQuestion {
    id: number;
    question: string;
    category?: string;
}

export interface Ianswer {
    id: number;
    answer: string;
    questionId: number;
}

