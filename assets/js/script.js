const btnAggiungi = document.querySelector('#btnAggiungi')
const ulBook = document.querySelector('#ulBook')
const myForm = document.querySelector('form')
const titleBook = document.querySelector('#titleBook')
const autorBook = document.querySelector('#autorBook')
const yearBook = document.querySelector('#yearBook')
const sectionFormat = document.querySelector('#sectionFormat')
const dimensioniBook = document.querySelector('#dimensioniBook')

class Book {
    #id
    constructor(_title, _autore, _year) {
        this.#id = crypto.randomUUID()
        this.title = _title
        this.autore = _autore
        this.year = _year
        
    }
        printBook() {
            
    createLi(myBook , ulBook)
    myForm.reset()
        }
}

const myBook = []


myForm.addEventListener('submit', (e) => {
    e.preventDefault()
    ulBook.textContent = ''
    const book = new Book(
        titleBook.value,
        autorBook.value,
        yearBook.value,
        sectionFormat.value
    )
    myBook.push(book)
    book.printBook()
    console.log(myBook)
})


function createLi(array,containerPadre ) {
    array.forEach((item) => {
        const newLi = document.createElement('li')
        const mydivTitle = document.createElement('div')
        const myTitle = document.createElement('p');
       myTitle.textContent = `${item.title}`
        
        const myBadge = document.createElement('span')
myBadge.textContent = 'sectionFormat.value'
myBadge.textContent = `${item.sectionFormat}`
        const myYear = document.createElement('p')
myYear.textContent = `${item.autore} - ${item.year}`
        const myDivButtonUl = document.createElement('div')
        const btnElimina = document.createElement('button')
        btnElimina.textContent = 'Elimina'
        const btnLetto = document.createElement('button')
        btnLetto.textContent = 'Letto'

        mydivTitle.append(myTitle,myBadge,myYear)
        myDivButtonUl.append(btnLetto, btnElimina)
        newLi.append(mydivTitle, myDivButtonUl)
        containerPadre.append(newLi)
    });
    
} 