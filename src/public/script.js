document.addEventListener('DOMContentLoaded', function() {
    const API_URL = 'https://github.com/Justin00707/WebService';
    let jwtToken = '';

    // Example Login Function
    async function login(email, password) {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const data = await response.json();
            jwtToken = data.token; // Store JWT token for future requests
        }
    }

    // Example CRUD operation (Fetch Books)
    async function fetchBooks() {
        const response = await fetch(`${API_URL}/books`, {
            headers: {
                'Authorization': `Bearer ${jwtToken}`
            }
        });

        if (response.ok) {
            const books = await response.json();
            // Process and display books
        }
    }

    // Initialize event listeners for your forms and buttons here
    // For example: document.querySelector('#loginForm').addEventListener('submit', handleLogin);

    // More functions for register, create/update/delete books and authors, fetch authors, etc.
});
