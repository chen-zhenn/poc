# JavaScript - Hash table #forYou

## O que você vai ver nesse artigo?

* __Algoritmos e otimização__
* __Estrutura de dados__
* __Busca linear O(n)__
* __Busca binária O(log n)__
* __Hash table O(1)__
* __Estrutura Map__
* __Programação Funcional__
* __Currying__
* __Memoization__
* __SRP - Clean Code__

## Introdução

Trabalhar com estrutura de dados é umas das tarefas mais usuais do dia-a-dia de um programador, sendo que, em algum momento você precisará percorrer tal estrutura para realizar alguma lógica como: Listar, filtrar, ordenar e etc.   

E o JavaScript nos traz muitas facilidade nesse sentido, uma vez que o mesmo possui métodos auxiliares para lidarmos com trabalhos/lógica citado acima. Contudo, penso que, entender qual algoritmo foi implementado por trás de tal recurso, faz com que possamos entregar códigos mais performáticos e otimizados.

No entanto é muito comum usarmos métodos auxiliares que o JavaScript nos oferece, porém boa parte deles atua com algoritmos de **busca linear** `O(n)`, ou **busca binária** `O(log n)`. Mas apesar de atender muitas das necessidades, nem sempre é o algoritmo mais performático e dependendo cenário, onde se está trabalhando com uma uma massa de dados volumosa por exemplo, o mesmo pode se tornar custoso. E é nesse momento que o **hash table** `O(1)` vem muito bem!

## Vamos ao cenário

Nossa missão é encontrar "algum livro" baseando-se apenas em seu título, sendo que os mesmos estão organizados em uma estante de acordo posições alocadas na mesma.

Então partimos do princípio que:

1. Desconhecemos tais posições
2. E os livros não necessariamente seguem uma ordem sequencial de posição

  
Então temos uma estrutura próximo disso:

```
const books = [
  {title: "Secrets of the JavaScript Ninja", author: "John Resig", position: 3.1},
  {title: "Clean Code", author: "Robert Martin", position: 2.1},
  {title: "JavaScript Patterns", author: "Stoyan Stefanov", position: 3.2},
  {title: "Grokking Algorithms", author: "Aditya Y. Bhargava", position: 2.2},
  {title: "Linux Bible", author: "Christopher Negus", position: 1.0}
]
```

Dado o cenário, temos como opção usar um algoritmo de **busca linear** `O(n)` para realizar nossa tarefa/missão. Logo partimos para métodos auxiliares como um `find()` por exemplo. Pois dentre os métodos que usa **busca linear**, ele é otimizado para interromper a busca uma vez que o dado é encontrado, algo como **break dentro do for**.

Então para fins didáticos podemos ter um código parecido com isso :

```
const bookSearchByTitle = (bookList,bookTitle) => 
  bookList.find((item) => bookTitle === item.title)

const searchResult = (result) => 
    result ? result : 'Não encontrado!' 

const cleanCodeBook = searchResult(bookSearchByTitle(bookList,"Clean Code")) 
const linuxBibleBook = searchResult(bookSearchByTitle(bookList,"Linux Bible")) 
const otherBook = searchResult(bookSearchByTitle(bookList,"Grokking Algorithms"))
```

## Porém, todavia, contudo entretanto...

__Mas e se a estrutura que estamos percorrendo tiver uma massa de dados relativamente volumosa__?    
__E se precisarmos realizar essa tarefa em vários momentos em nosso código__?

Percorrer todas as vezes essa estrutura pode não ser uma boa idéia!   

Uma das saídas seria gerarmos uma nova estrutura baseado em uma **hash table**. Pois assim as consultas futuras se tornariam altamente performáticas e otimizada, pois tratamos de uma complexidade `O(1)`.

E o ES6 nos traz uma estrutura prontinha para o que precisamos, com métodos bem simples que nos poupa esforços para atuarmos sobre ela(estrutura), caso precisarmos.   

Apresento o Map **#foryou**, onde basicamente trata-se de uma objeto chave/valor, porém com alguns diferenciais como:

* A chaves do Map podem ser qualquer valor, sendo um: primitivo, funções e objetos.
* As chaves dentro do Map não podem ser duplicadas
* O Map é otimizado para adição, remoção em pares chave/valor

Sendo assim, temos o custo de percorrer a estrutura(base) inicialmente, porém caso precisarmos realizar uma consulta nessa estrutura, que cubra a condição de "**encontrar algum livro baseando-se apenas em seu título**", reduzimos a complexidade de `O(n)` para `O(1)`.

E o bacana disso é que podemos fazer uso da técnica **memoization** para otimizar ainda mais a lógica.

## Aplicabilidade

Vejamos então como fica:

```
import { books as bookList } from "./data.js"

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

const bookSearch = Book.search
const bookSearchByTitle = bookSearch(bookList)
const cleanCodeBook = bookSearchByTitle("Clean Code")
const linuxBibleBook = bookSearchByTitle("Linux Bible")
const otherBook = bookSearchByTitle("14 Hábitos de Desenvolvedores altamente Produtivos")

const cleanCodeBookCached = bookSearchByTitle("Clean Code")
```
Com poucas mudança na lógica temos um código totalmente otimizado que atende requisitos e cumpre sua função.   
E se olharmos com atenção, temos algumas técnicas de e abordagens interessantes neste trecho. Sendo elas:

* IIFE (Immediately Invoked Function Expression)
* Factory
* Closure
* Currying
* Memoization
* Return only
* SRP

## Por fim...

É interessante vermos que com um exemplo simples podemos extrair e estudar vários conceitos que podem ser muito uteis em nosso dia-a-dia.   
Bom, pelo menos pra mim é legal fazer essas POCs para ter um maior imersão na linguagem do coração - JavaScript.   

### That's all folks!