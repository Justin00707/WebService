let books = [
    { id: 1, title: 'Le Petit Prince', author: 'Antoine de Saint-Exupéry', year: 1943, genre: 'Fiction' },
    { id: 2, title: 'L’Étranger', author: 'Albert Camus', year: 1942, genre: 'Philosophie' }
];


let authors = [
    { id: 1, name: 'Antoine de Saint-Exupéry', biography: 'Un écrivain et aviateur français' },
    { id: 2, name: 'Albert Camus', biography: 'Un philosophe, écrivain et journaliste français' }
];

document.addEventListener('DOMContentLoaded', function() {
    setupModalToggles();
    setupFormSubmissions();
    displayBooks();
    displayAuthors();
});

function setupModalToggles() {
    document.getElementById('registerBtn').addEventListener('click', function() {
        openModal('registrationModal');
    });

    Array.from(document.getElementsByClassName('close')).forEach(span => {
        span.addEventListener('click', function() {
            closeModal(this.closest('.modal').id);
        });
    });

    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal(event.target.id);
        }
    };

    document.getElementById('addBookBtn').addEventListener('click', function() {
        openBookModal(null);
    });

    document.getElementById('addAuthorBtn').addEventListener('click', function() {
        openAuthorModal(null);
    });
}

function setupFormSubmissions() {
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();
        closeModal('registrationModal');
    });

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
    });
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function displayBooks() {
    const booksDiv = document.getElementById('books');
    booksDiv.innerHTML = '';
    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.className = 'item';
        bookItem.innerHTML = `
            <h3>${book.title}</h3>
            <p>Auteur: ${book.author}</p>
            <p>Année: ${book.year}</p>
            <p>Genre: ${book.genre}</p>
            <button onclick="openBookModal(${book.id})">Modifier</button>
            <button onclick="confirmDeleteBook(${book.id})">Supprimer</button>
        `;
        booksDiv.appendChild(bookItem);
    });
}


function displayAuthors() {
    const authorsDiv = document.getElementById('authors');
    authorsDiv.innerHTML = '';
    authors.forEach(author => {
        const authorItem = document.createElement('div');
        authorItem.className = 'item';
        authorItem.innerHTML = `
            <h3>${author.name}</h3>
            <p>${author.biography}</p>
            <button onclick="openAuthorModal(${author.id})">Modifier</button>
            <button onclick="confirmDeleteAuthor(${author.id})">Supprimer</button>
        `;
        authorsDiv.appendChild(authorItem);
    });
}


function confirmDeleteBook(bookId) {
    document.getElementById('confirmMessage').textContent = `Voulez-vous vraiment supprimer le livre ID ${bookId}?`;
    document.getElementById('confirmBtn').onclick = function() {
        deleteBook(bookId);
        closeModal('confirmModal');
    };
    openModal('confirmModal');
}

function deleteBook(bookId) {
    books = books.filter(book => book.id !== bookId);
    displayBooks();
}

function confirmDeleteAuthor(authorId) {
    document.getElementById('confirmMessage').textContent = `Voulez-vous vraiment supprimer l'auteur ID ${authorId}?`;
    document.getElementById('confirmBtn').onclick = function() {
        deleteAuthor(authorId);
        closeModal('confirmModal');
    };
    openModal('confirmModal');
}

function deleteAuthor(authorId) {
    authors = authors.filter(author => author.id !== authorId);
    displayAuthors();
}

function openBookModal(bookId) {
    if (bookId) {
        // Modification d'un livre existant
        const book = books.find(book => book.id === bookId);
        document.getElementById('bookId').value = book.id;
        document.getElementById('bookTitle').value = book.title;
        document.getElementById('bookAuthor').value = book.author;
        document.getElementById('bookYear').value = book.year;
        document.getElementById('bookGenre').value = bookId ? books.find(book => book.id === bookId).genre : '';
    } else {
        // Ajout d'un nouveau livre
        document.getElementById('bookForm').reset();
        document.getElementById('bookId').value = '';
    }
    openModal('bookModal');
}

function openAuthorModal(authorId) {
    if (authorId) {
        // Modification d'un auteur existant
        const author = authors.find(author => author.id === authorId);
        document.getElementById('authorId').value = author.id;
        document.getElementById('authorName').value = author.name;
        document.getElementById('authorBiography').value = author.biography;
    } else {
        // Ajout d'un nouvel auteur
        document.getElementById('authorForm').reset();
        document.getElementById('authorId').value = '';
    }
    openModal('authorModal');
}


// Gérer la soumission du formulaire du livre
document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Logique pour ajouter ou modifier un livre
    const bookId = document.getElementById('bookId').value;
    // ... ajouter ou modifier le livre ...
    closeModal('bookModal');
});

// Gérer la soumission du formulaire de l'auteur
document.getElementById('authorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Logique pour ajouter ou modifier un auteur
    const authorId = document.getElementById('authorId').value;
    // ... ajouter ou modifier l'auteur ...
    closeModal('authorModel');
});