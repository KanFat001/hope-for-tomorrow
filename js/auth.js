// Demo user
const demoUser = {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123'
};

// Login function
function login(email, password) {
    // Check against demo user
    if (email === demoUser.email && password === demoUser.password) {
        // Store user info
        localStorage.setItem('currentUser', JSON.stringify({
            name: demoUser.name,
            email: demoUser.email
        }));
        // Redirect to home page
        window.location.replace('home.html');
        return true;
    }
    return false;
}

// Logout function
function logout() {
    localStorage.removeItem('currentUser');
    window.location.replace('signin.html');
}

// Handle login form
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.onsubmit = function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            if (!login(email, password)) {
                alert('Invalid email or password');
            }
        };
    }
});
