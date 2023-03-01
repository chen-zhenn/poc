import { books as bookList } from "./data.js"
import Book from "./Book.js"

const bookSearch = Book.search
const bookSearchByTitle = bookSearch(bookList)
const cleanCodeBook = bookSearchByTitle("Clean Code")
const linuxBibleBook = bookSearchByTitle("Linux Bible")
const otherBook = bookSearchByTitle("14 Hábitos de Desenvolvedores altamente Produtivos")

const cleanCodeBookCached = bookSearchByTitle("Clean Code")

console.log(cleanCodeBook)
console.log(linuxBibleBook)
console.log(otherBook)

console.log(cleanCodeBookCached)