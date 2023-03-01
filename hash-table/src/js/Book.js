const Book = (function(){

    function search(bookList){
        const booksMap = new Map()

        return (bookTitle) => {
            const hasBookMap = booksMap.has(bookTitle)
            let foundBook = false

            if(hasBookMap) return booksMap.get(bookTitle)
            foundBook = bookList.find((item) => bookTitle === item.title)
            if(!foundBook) return 'Não existe livro em catálogo!'
            booksMap.set(foundBook.title, foundBook)
            return foundBook 
        
        }
    }

    return { search }
    
})()

export default Book