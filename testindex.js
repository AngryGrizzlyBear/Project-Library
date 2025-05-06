const myLibrary = [];

myLibrary.push(new Book("The Great Gatsby", "F. Scott Fitzgerald", "Fiction", 218, true));
myLibrary.push(new Book("1984", "George Orwell", "Dystopian", 328, false));
myLibrary.push(new Book("To Kill a Mockingbird", "Harper Lee", "Classic", 281, true));

function Book(title, author, genre, pages, read) {
    this.id = crypto.randomUUID(); // Unique ID for each book
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleReadStatus = function () {
    this.read = !this.read; // Toggle the read status
};

function addBookToLibrary(title, author, genre, pages, read) {
    const newBook = new Book(title, author, genre, pages, read); // Create a new book using provided arguments
    myLibrary.push(newBook); // Add the new book to the array
    displayBooks(); // Update the display
}

// Display all books in the library
function displayBooks() {
    const container = document.getElementById('book-container');
    container.innerHTML = ''; // Clear previous display

    myLibrary.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
            <h2>${book.title}</h2>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>Read:</strong> ${book.read ? 'Yes' : 'No'}</p>
            <p><strong>ID:</strong> ${book.id}</p>
            <button class="remove-btn" data-id="${book.id}">Remove Book</button>
            <button class="toggle-read-btn" data-id="${book.id}">Toggle Read Status</button>
        `;
        container.appendChild(bookCard);
    });

    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', removeBook);
    });

    // Add event listeners to toggle read status buttons
    document.querySelectorAll('.toggle-read-btn').forEach(button => {
        button.addEventListener('click', toggleReadStatus);
    });
}

// Remove a book from the library
function removeBook(event) {
    const bookId = event.target.getAttribute('data-id'); // Getting the book id from data attribute
    const bookIndex = myLibrary.findIndex(book => book.id === bookId); // Find the book in the array

    if (bookIndex !== -1) {
        myLibrary.splice(bookIndex, 1); // Remove the book from the array
        displayBooks(); // Update the display after removal
    }
}

// Toggle the read status of a book
function toggleReadStatus(event) {
    const bookId = event.target.getAttribute('data-id');
    const book = myLibrary.find(book => book.id === bookId);

    if (book) {
        book.toggleReadStatus(); // Toggle read status
        displayBooks(); // Update the display after the status change
    }
}

// Add event listeners for form and other UI interactions
document.getElementById('new-book-btn').addEventListener('click', function () {
    document.getElementById('book-form-container').style.display = 'block';
});

document.getElementById('close-form-btn').addEventListener('click', function () {
    document.getElementById('book-form-container').style.display = 'none'; // Close form
});

document.getElementById('book-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Input Values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    const genre = "Unknown"; // Default genre

    // Add the new book to the library
    addBookToLibrary(title, author, genre, pages, read);

    // Close the form after submission
    document.getElementById('book-form-container').style.display = 'none';

    // Reset form
    document.getElementById('book-form').reset();
});

// Initially display books
displayBooks();
