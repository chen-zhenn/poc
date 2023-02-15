const books = [
    {title: "Secrets of the JavaScript Ninja", author: "John Resig", position: 3.1},
    {title: "Clean Code", author: "Robert Martin", position: 2.1},
    {title: "JavaScript Patterns", author: "Stoyan Stefanov", position: 3.2},
    {title: "Grokking Algorithms", author: "Aditya Y. Bhargava", position: 2.2},
    {title: "Linux Bible", author: "Christopher Negus", position: 1.0}
  ]
  
//   const findBookByTitle = (title,list) => list.find(item => title === item.title) // Função especialista
//   const foundBook = findBookByTitle("Clean Code", books)
//   const bookPosition = foundBook ? foundBook.position : 'Não existe livro em catálogo!'
  
  const findBookByTitle = (function(){
    const booksMap = new Map() 
  
    return (title,list) => {
        const foundBook = list.find(item => title === item.title)
        const hasBookMap = booksMap.has(title)
        if(hasBookMap) return booksMap.get(title)
        if(!foundBook) return 'Não existe livro em catálogo!'
        booksMap.set(foundBook.title, foundBook.position)
        return booksMap.get(title)
    }     
  })()
  
  const bookTitleA = "Clean Code"
  const bookTitleB = "Grokking Algorithms"
  const bookTitleC = "Shell Script Profissional"
  const bookPositionA = findBookByTitle(bookTitleA, books)
  const bookPositionB = findBookByTitle(bookTitleB, books)