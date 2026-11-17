const btnAggiungi = document.querySelector('#btnAggiungi')
const ulBook = document.querySelector('#ulBook')
const myForm = document.querySelector('form')
const titleBook = document.querySelector('#titleBook')
const autorBook = document.querySelector('#autorBook')
const yearBook = document.querySelector('#yearBook')
const sectionFormat = document.querySelector('#sectionFormat')
const dimensioniBook = document.querySelector('#dimensioniBook')
const inputDimensioni = document.querySelector('#inputDimensioni')
const numBook = document.querySelector('#numBook')
const svuotaLibri = document.querySelector('#svuotaLibri')

class Book {
    static id
    constructor(_title, _autore, _year, _format) {
        this.id = crypto.randomUUID()
        this.title = _title
        this.autore = _autore
        this.year = _year
        this.format = _format
        this.letto = false
    }

    segnaComeLetto() {
        this.letto = !this.letto;
    }

    printBook() {

        createLi(myBook, ulBook)
        myForm.reset()
    }
}

class DigitalBook extends Book {
    constructor(_title, _autore, _year, _format, _dimensioni) {
        super(_title, _autore, _year, _format)
        this.dimensioni = _dimensioni
    }

    printBook() {
        createLi(myBook, ulBook)
        myForm.reset()
        inputDimensioni.classList.add('d-none')
    }
}

const myBook = caricaLibri()
createLi(myBook, ulBook)

function caricaLibri() {
    const datiSalvati = JSON.parse(localStorage.getItem('miaLibreria')) ?? []
    return datiSalvati.map(item => {
        const libro = item.dimensioni
            ? new DigitalBook(item.title, item.autore, item.year, item.format, item.dimensioni, item.id)
            : new Book(item.title, item.autore, item.year, item.format, item.id)
        libro.letto = item.letto
        return libro
    })
}


myForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let book;

    if (sectionFormat.value === 'digitale') {
        book = new DigitalBook(
            titleBook.value,
            autorBook.value,
            yearBook.value,
            sectionFormat.value,
            dimensioniBook.value
            )
    } else {
        book = new Book(
            titleBook.value,
            autorBook.value,
            yearBook.value,
            sectionFormat.value
        )
    }

    myBook.push(book)
    localStorage.setItem('miaLibreria', JSON.stringify(myBook))
    book.printBook()
})


sectionFormat.addEventListener('change', () => {
    sectionFormat.value === 'digitale'
        ? inputDimensioni.classList.remove('d-none')
        : inputDimensioni.classList.add('d-none')
})

function createLi(array, containerPadre) {
    numBook.textContent = array.length
    ulBook.textContent = ''
    array.forEach((item) => {
        const newLi = document.createElement('li')
        newLi.classList.add('d-flex', 'border', 'rounded', 'mt-2', 'p-1', 'text-start')
        const mydivTitle = document.createElement('div')
mydivTitle.classList.add('ms-3')
        const myTitle = document.createElement('span');
        myTitle.textContent = `${item.title}`
        const myBadge = document.createElement('span')
        myBadge.textContent = item.dimensioni ? `${item.format} (${item.dimensioni} MB)` : `${item.format}`
        myBadge.classList.add('badge', 'bg-dark', 'ms-3',)

        const myYear = document.createElement('p')
        myYear.textContent = `${item.autore} - ${item.year}`
        myYear.classList.add('text-muted', 'mt-auto')
        const myDivButtonUl = document.createElement('div')
        myDivButtonUl.classList.add('ms-auto', 'd-flex', 'flex-column', 'divPersonale')
        const btnElimina = document.createElement('button')
        btnElimina.textContent = 'Elimina'
        btnElimina.classList.add('btn', 'btn-danger', 'ms-3', 'btnPersonal', 'mt-1')



        btnElimina.addEventListener('click', () => {
            const index = array.findIndex(element => element.id === item.id)
            array.splice(index, 1)
            localStorage.setItem('miaLibreria', JSON.stringify(myBook))
            
            createLi(array, containerPadre)
        })


        const btnLetto = document.createElement('button')
        btnLetto.textContent = 'Letto'
        btnLetto.classList.add('btn', 'btn-success', 'btnPersonal', 'ms-2')

        function aggiornaBtnLetto() {
            btnLetto.classList.toggle('btn-success', !item.letto)
            btnLetto.classList.toggle('btn-outline-secondary', item.letto)
            btnLetto.classList.toggle('text-decoration-line-through', item.letto)
            btnLetto.classList.toggle('border-0', item.letto)
        }
        aggiornaBtnLetto()
        btnLetto.addEventListener('click', () => {
            item.segnaComeLetto()

            localStorage.setItem('miaLibreria', JSON.stringify(myBook))
            aggiornaBtnLetto()

        })


        mydivTitle.append(myTitle, myBadge, myYear)
        myDivButtonUl.append(btnLetto, btnElimina)
        newLi.append(mydivTitle, myDivButtonUl)
        containerPadre.append(newLi)
    });

}



svuotaLibri.addEventListener('click', (e) => {
    myBook.length = 0
    localStorage.setItem('miaLibreria', JSON.stringify(myBook))
    createLi(myBook, ulBook)
})



