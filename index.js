const myLibrary = [];

myLibrary.push(new Book("The Great Gatsby", "F. Scott Fitzgerald", "Fiction"));
myLibrary.push(new Book("1984", "George Orwell", "Dystopian"));
myLibrary.push(new Book("To Kill a Mockingbird", "Harper Lee", "Classic"));

function Book(title, author, genre) {
    this.id = crypto.randomUUID(); //Unique ID for each book
    this.title = title;
    this.author = author;
    this.genre = genre;

}

function addBookToLibrary(title, author, genre) {
    const newBook = new Book(title, author, genre); // Create a new book using provided argumenets
    myLibrary.push(newBook); // add the new book to the array

}

addBookToLibrary("The Great Gatsby", "F.Scott Fitzgerald", "Fiction");
addBookToLibrary("1984", "George Orwell", "Dystopian")


function displayBooks() {
    const container = document.getElementById('book-container');
    container.innerHTML = ''; // Clears container

    // Looping through the array of books. I'm also creating elements for each book.
    myLibrary.forEach(book => {
        const bookCard = document.createElement('div');  // I messed up on this a LOT. Creates a div for each book.
        bookCard.classList.add('book-card');    // Helps with styling

        // Creates the book details inside of the card
        bookCard.innerHTML = `
        <h2>${book.title}</h2>
        <p><strong>Author:</strong>${book.author}</p>
        <p><strong>Genre:</strong>${book.genre}</p>
        <p><strong>ID:</strong>${book.id}</p>
        `;
        // appends the card to the container
        container.appendChild(bookCard);
    });
}

displayBooks();




// console.log(myLibrary) // display the array of books