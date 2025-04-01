console.log("it works")

const myLibrary = [];

function Book(title, author, genre) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.genre = genre;

}

function addBookToLibrary(title, author, genre){
    const newBook = new Book(title, author, genre);
    myLibrary.push(newBook);

}

addBookToLibrary("The Great Gatsby", "F. Scorrt Fitzgerald", "Fiction");
addBookToLibrary("1984", "George Orwell", "Dystopian")

console.log(myLibrary)