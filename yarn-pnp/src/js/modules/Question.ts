import { IQuestion } from "./interfaces"

export class Question implements IQuestion  {
	id: number
	question: string
	category?: string

	constructor(id: number, question: string, category?: string){
		this.id = id
		this.question = question
		this.category = category
	}
}