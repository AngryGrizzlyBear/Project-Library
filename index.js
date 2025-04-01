const myLibrary = [];

myLibrary.push(new Book("The Great Gatsby", "F. Scott Fitzgerald", "Fiction"));
myLibrary.push(new Book("1984", "George Orwell", "Dystopian"));
myLibrary.push(new Book("To Kill a Mockingbird", "Harper Lee", "Classic"));

function Book(title, author, genre, pages, read) {
    this.id = crypto.randomUUID(); //Unique ID for each book
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.read = read;

}

function addBookToLibrary(title, author, genre, pages, read) {
    const newBook = new Book(title, author, genre, pages, read); // Create a new book using provided argumenets
    myLibrary.push(newBook); // add the new book to the array
    displayBooks(); // Updates Display

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
        <p><strong>Pages:</strong>${book.pages}</p>
        <p><strong>Read:</strong>${book.read ? 'Yes' : 'No'}</p>
        <p><strong>ID:</strong>${book.id}</p>
        <button class="remove-btn" data-id="${book.id}">Remove Book</button>
        `;
        // appends the card to the container
        container.appendChild(bookCard);
    });

    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', removeBook);
    });
}

// Making an event listener for the "New Book" button
document.getElementById('new-book-btn').addEventListener('click', function () {
    document.getElementById('book-form-container').style.display = 'block';
});


//Making an event listener for closing the form (cancel button)
document.getElementById('close-form-btn').addEventListener('click', function () {
    document.getElementById('book-form-container').style.display = 'none'; // Prevent form from submitting and refreshig the page
});

// Event Listener for form Submission, I guess.
document.getElementById('book-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Input Values
const title = document.getElementById('title').value;
const author = document.getElementById('author').value;
const pages = document.getElementById('pages').value;
const read = document.getElementById('read').checked;
const genre = "Unknown"; // Extended to allow input of genre

// Add the new book to the library
addBookToLibrary(title, author, genre, pages, read);

// Close the form after submission
document.getElementById('book-form-container').style.display = 'none';

// Reset form
document.getElementById('book-form').reset();

})

function removeBook(event) {
    const bookId = event.target.getAttribute('data-id'); // Getting the book id from data attribute
    const bookIndex = myLibrary.findIndex(book => book.id === bookId); // Find the book in the array

    if (bookIndex !== -1) {
        myLibrary.splice(bookIndex, 1); // Remove the book from the array
        displayBooks(); // Update the display after removal
    }
}



displayBooks();




// console.log(myLibrary) // display the array of books