const btnAggiungi = document.querySelector('#btnAggiungi')
const ulBook = document.querySelector('#ulBook')
const myForm = document.querySelector('form')
const titleBook = document.querySelector('#titleBook')
const autorBook = document.querySelector('#autorBook')
const yearBook = document.querySelector('#yearBook')
const sectionFormat = document.querySelector('#sectionFormat')
const dimensioniBook = document.querySelector('#dimensioniBook')
const inputDimensioni = document.querySelector('#inputDimensioni')

class Book {
    #id
    constructor(_title, _autore, _year, _format) {
        this.#id = crypto.randomUUID()
        this.title = _title
        this.autore = _autore
        this.year = _year
        this.format = _format
        
    }
        printBook() {
            
    createLi(myBook , ulBook)
    myForm.reset()
        }
}

class DigitalBook extends Book {
    constructor(_title, _autore, _year, _format ,_dimensioni) {
        super(_title, _autore, _year, _format)
        this.dimensioni = _dimensioni
    }
    
    printBook() {
        createLi(myBook , ulBook)
        myForm.reset()
        inputDimensioni.classList.add('d-none')
    }
}


const myBook = []


myForm.addEventListener('submit', (e) => {
    e.preventDefault()
    ulBook.textContent = ''
    const book = new DigitalBook(
        titleBook.value,
        autorBook.value,
        yearBook.value,
        sectionFormat.value,
        dimensioniBook.value
    )
    myBook.push(book)
    book.printBook()
    console.log(myBook)
})


     sectionFormat.addEventListener('change', () => {
    sectionFormat.value === 'digitale' 
    ? inputDimensioni.classList.remove('d-none')
    :inputDimensioni.classList.add('d-none')
    })
    




function createLi(array,containerPadre ) {
    array.forEach((item) => {
        const newLi = document.createElement('li')
        newLi.classList.add('d-flex', 'border', 'p-1', 'justify-content-center', 'align-items-center')
        const mydivTitle = document.createElement('div')
        
        const myTitle = document.createElement('span');
       myTitle.textContent = `${item.title}`
        
        const myBadge = document.createElement('span')
        myBadge.textContent = item.dimensioni ? `${item.format} (${item.dimensioni} MB)` : `${item.format}`
myBadge.classList.add('badge', 'bg-dark', 'ms-3',  )
        const myYear = document.createElement('p')
myYear.textContent = `${item.autore} - ${item.year}`
myYear.classList.add('text-muted', 'mt-3')
        const myDivButtonUl = document.createElement('div')
        myDivButtonUl.classList.add( 'ms-auto')
        const btnElimina = document.createElement('button')
        btnElimina.textContent = 'Elimina'
        btnElimina.classList.add('btn',  'btn-danger', 'ms-3')
        const btnLetto = document.createElement('button')
        btnLetto.textContent = 'Letto'
btnLetto.classList.add('btn', 'btn-success')
        mydivTitle.append(myTitle,myBadge,myYear)
        myDivButtonUl.append(btnLetto, btnElimina)
        newLi.append(mydivTitle, myDivButtonUl)
        containerPadre.append(newLi)
    });

} 