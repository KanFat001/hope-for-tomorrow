// Immediate authentication check - runs before page load
(function() {
    // Get the current page
    const path = window.location.pathname;
    const currentPage = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    
    // List of pages that don't require authentication
    const publicPages = ['signin.html', 'signup.html'];
    const isPublicPage = publicPages.includes(currentPage);
    
    // Get user authentication status
    const user = localStorage.getItem('currentUser');
    
    // If no user and trying to access protected page, redirect to signin
    if (!user && !isPublicPage) {
        window.location.replace('signin.html');
        return;
    }
    
    // If user is authenticated and trying to access auth pages, redirect to index
    if (user && isPublicPage) {
        window.location.replace('index.html');
        return;
    }
})();
