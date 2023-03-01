import { Ianswer } from "./interfaces";

let i = 0

export class Answer implements Ianswer{
    private _id: number
    answer: string
    questionId: number

    constructor(answer: string, questionId: number){
        this.setId()
        this._id = i
        this.answer = answer
        this.questionId = questionId
    }

    private setId():void{
        i = i + 1
    }

    public get id():number{
        return this._id
    }

}