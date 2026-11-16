const btnAggiungi = document.querySelector('#btnAggiungi')
const ulBook = document.querySelector('#ulBook')
const myForm = document.querySelector('#form')
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
            
        }
}

const myBook = []

myForm.addEventListener('submit', (e) => {

})


function createLi(array, ) {
    array.forEach((item) => {
        const newLi = document.createElement('li')
        const mydivTitle = document.createElement('div')
        const myTitle = document.createElement('p');
       myTitle.textContent = `${this.title}`
        
        const myBadge = document.createElement('span')
myBadge.textContent = 'sectionFormat.value'
myBadge.textContent = `${this.}`
        const myYear = document.createElement('p')
myYear.textContent = `${this.autore} - ${item.year}`
        const myDivButtonUl = document.createElement('div')
        const btnElimina = document.createElement('div')
        btnElimina.textContent = 'Elimina'
        const btnLetto = document.createElement('div')
        btnLetto.textContent = 'Letto'

        mydivTitle.append(myTitle,myBadge,myYear)
        myDivButtonUl.append(btnLetto, btnElimina)
        newLi.append(mydivTitle, myDivButtonUl)
    });
    return newLi
} 