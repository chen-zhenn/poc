import { utils } from "./utils/utils.js"
import { Question } from "./modules/Question.js"

const { getId } = utils()

const questionAccount = new Question(getId(),"Como posso acessar minha conta online","account")
const questionPayments = new Question(getId(),"Como posso fazer um pagamento","payment")
const questionFoo = new Question(getId(),"Como posso acessar minha conta online","account")
const questionBar = new Question(getId(),"Como posso acessar minha conta online","account")

console.log(questionAccount)
console.log(questionPayments)
console.log(questionFoo)
console.log(questionBar)

console.log( questionBar.id )