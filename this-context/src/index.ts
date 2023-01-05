let CONTEXT = this

const books = {
    js: [{
        name: "Secrets of the JavaScript Ninja",
        author: "John Resig"
    }, {
        name: "JavaScript Patterns",
        author: "Stoyan Stefanov"
    }],
    getData(){
        // @ts-ignore
        CONTEXT = this
        console.log(CONTEXT)
        this.js.forEach(function(book){
            // @ts-ignore
            CONTEXT = this
            const {name, author} = book
            console.log(`Contexto do "this" -> ${CONTEXT}`)
            console.log(`Nome: ${name}\nAutor: ${author}`)
        })
        this.js.forEach(book => {
            // @ts-ignore
            CONTEXT = this
            const {name, author} = book
            console.log(CONTEXT)
            console.log(`Nome: ${name}\nAutor: ${author}`)
        })
    }
}
console.log(CONTEXT)
books.getData()