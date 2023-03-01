import { Question } from "./Question"

describe("Implementações de classe", () => {

    it("Question Class", () => {
        const esperado = {
            id: 1,
            question: "Como posso acessar minha conta online",
            category: "account"
        }
        const retornado = new Question(
            1,
            "Como posso acessar minha conta online", 
            "account"
        )

        expect(esperado).toEqual(retornado)
    })
})