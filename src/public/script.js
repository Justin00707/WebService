let books = [
    { id: 1, title: 'Le Petit Prince', author: 'Antoine de Saint-Exupéry', year: 1943, genre: 'Fiction' },
    { id: 2, title: 'L’Étranger', author: 'Albert Camus', year: 1942, genre: 'Philosophie' }
];

let authors = [
    { id: 1, name: 'Antoine de Saint-Exupéry', biography: 'Un écrivain et aviateur français' },
    { id: 2, name: 'Albert Camus', biography: 'Un philosophe, écrivain et journaliste français' }
];

let users = [
    { email: 'admin@admin.com', password: 'admin' }
];


let isLoggedIn = false;

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
        if (isLoggedIn) openBookModal(null);
    });

    document.getElementById('addAuthorBtn').addEventListener('click', function() {
        if (isLoggedIn) openAuthorModal(null);
    });
}

function setupFormSubmissions() {
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();
        closeModal('registrationModal');    
    });

    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();
        handleRegistration();
    });

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        handleLogin();
    });

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        if (!isLoggedIn) handleLogin();
    });
}

function handleLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (email === 'admin@admin.com' && password === 'admin') {
        isLoggedIn = true;
        showAuthenticatedContent();
        updateLoginButton();
        // Hide form elements except the button
        document.getElementById('loginEmail').style.display = 'none';
        document.getElementById('loginPassword').style.display = 'none';
        document.getElementById('registerBtn').style.display = 'none';
    } else {
        alert("Informations de connexion incorrectes");
    }
}

function hideLoginForm() {
    document.getElementById('loginForm').style.display = 'none';
}

function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

function handleLogout() {
    isLoggedIn = false;
    updateLoginButton();
    hideAuthenticatedContent();
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
}

function updateLoginButton() {
    const loginButton = document.getElementById('loginButton');

    if (isLoggedIn) {
        loginButton.textContent = 'Déconnexion';
        loginButton.removeEventListener('click', handleLogin);
        loginButton.addEventListener('click', handleLogout);
    } else {
        loginButton.textContent = 'Connexion';
        document.getElementById('loginEmail').style.display = 'block';
        document.getElementById('loginPassword').style.display = 'block';
        document.getElementById('registerBtn').style.display = 'block';
        loginButton.removeEventListener('click', handleLogout);
        loginButton.addEventListener('click', handleLogin);
    }
}

function handleRegistration() {
    const email = document.getElementById('registrationEmail').value;
    const password = document.getElementById('registrationPassword').value;
    const confirmPassword = document.getElementById('registrationConfirmPassword').value;
    
    // Vérifier si les mots de passe correspondent
    if (password !== confirmPassword) {
        alert("Les mots de passe ne correspondent pas.");
        return;
    }

    // Vérifier si l'utilisateur existe déjà
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        alert("Un utilisateur avec cet email existe déjà.");
        return;
    }

    // Ajouter le nouvel utilisateur
    users.push({ email: email, password: password });
    alert("Inscription réussie!");

    closeModal('registrationModal');
}


function showAuthenticatedContent() {
    if (isLoggedIn) {
        displayBooks();
        displayAuthors();
        document.getElementById('bookSection').style.display = 'block';
        document.getElementById('authorSection').style.display = 'block';
    }
}

function hideAuthenticatedContent() {
    document.getElementById('bookSection').style.display = 'none';
    document.getElementById('authorSection').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    setupModalToggles();
    setupFormSubmissions();
    updateLoginButton();
});


function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function displayBooks() {
    if (!isLoggedIn) return;
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
    if (!isLoggedIn) return;
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

function openBookModal(bookId) {
    // Reset form values
    document.getElementById('bookForm').reset();
    const bookIdInput = document.getElementById('bookId');
    const bookTitleInput = document.getElementById('bookTitle');
    const bookAuthorInput = document.getElementById('bookAuthor');
    const bookYearInput = document.getElementById('bookYear');
    const bookGenreInput = document.getElementById('bookGenre');

    if (bookId !== null) {
        const book = books.find(b => b.id === bookId);
        bookIdInput.value = book.id;
        bookTitleInput.value = book.title;
        bookAuthorInput.value = book.author;
        bookYearInput.value = book.year;
        bookGenreInput.value = book.genre;
    } else {
        bookIdInput.value = '';
    }

    openModal('bookModal');
}

function openAuthorModal(authorId) {
    // Reset form values
    document.getElementById('authorForm').reset();
    const authorIdInput = document.getElementById('authorId');
    const authorNameInput = document.getElementById('authorName');
    const authorBiographyInput = document.getElementById('authorBiography');

    if (authorId !== null) {
        const author = authors.find(a => a.id === authorId);
        authorIdInput.value = author.id;
        authorNameInput.value = author.name;
        authorBiographyInput.value = author.biography;
    } else {
        authorIdInput.value = '';
    }

    openModal('authorModal');
}

// Add event listeners for form submissions
document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const bookId = document.getElementById('bookId').value;
    const bookTitle = document.getElementById('bookTitle').value;
    const bookAuthor = document.getElementById('bookAuthor').value;
    const bookYear = document.getElementById('bookYear').value;
    const bookGenre = document.getElementById('bookGenre').value;

    if (bookId) {
        // Edit existing book
        const bookIndex = books.findIndex(b => b.id === parseInt(bookId));
        books[bookIndex] = { id: parseInt(bookId), title: bookTitle, author: bookAuthor, year: parseInt(bookYear), genre: bookGenre };
    } else {
        // Add new book
        const newBook = {
            id: Math.max(...books.map(b => b.id)) + 1,
            title: bookTitle,
            author: bookAuthor,
            year: parseInt(bookYear),
            genre: bookGenre
        };
        books.push(newBook);
    }

    closeModal('bookModal');
    displayBooks();
});

document.getElementById('authorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const authorId = document.getElementById('authorId').value;
    const authorName = document.getElementById('authorName').value;
    const authorBiography = document.getElementById('authorBiography').value;

    if (authorId) {
        // Edit existing author
        const authorIndex = authors.findIndex(a => a.id === parseInt(authorId));
        authors[authorIndex] = { id: parseInt(authorId), name: authorName, biography: authorBiography };
    } else {
        // Add new author
        const newAuthor = {
            id: Math.max(...authors.map(a => a.id)) + 1,
            name: authorName,
            biography: authorBiography
        };
        authors.push(newAuthor);
    }

    closeModal('authorModal');
    displayAuthors();
});

function confirmDeleteBook(bookId) {
    document.getElementById('confirmMessage').textContent = `Voulez-vous vraiment supprimer le livre ID ${bookId}?`;
    document.getElementById('confirmBtn').onclick = function() {
        deleteBook(bookId);
    };
    openModal('confirmModal');
}

function deleteBook(bookId) {
    books = books.filter(book => book.id !== bookId);
    closeModal('confirmModal');
    displayBooks();
}

function confirmDeleteAuthor(authorId) {
    document.getElementById('confirmMessage').textContent = `Voulez-vous vraiment supprimer l'auteur ID ${authorId}?`;
    document.getElementById('confirmBtn').onclick = function() {
        deleteAuthor(authorId);
    };
    openModal('confirmModal');
}

function deleteAuthor(authorId) {
    authors = authors.filter(author => author.id !== authorId);
    closeModal('confirmModal');
    displayAuthors();
}
