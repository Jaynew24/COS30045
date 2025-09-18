
// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Function to show the selected page and update active navigation link
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show the selected page
    document.getElementById(pageId).classList.add('active');
    
    // Update active navigation link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Find the link that corresponds to the current page and add active class
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.textContent.toLowerCase().includes(pageId)) {
            link.classList.add('active');
        }
    });
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Add mouseover effect to navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    });
    
    link.addEventListener('mouseout', function() {
        if (!this.classList.contains('active')) {
            this.style.backgroundColor = 'transparent';
        }
    });
});