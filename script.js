// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Show/hide scroll to top button
const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});

// Scroll to top functionality
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Handle recommendation form submission
const recommendationForm = document.getElementById('recommendationForm');

recommendationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const message = document.getElementById('message').value;
    const name = document.getElementById('name').value;
    
    if (message.trim()) {
        // Create new recommendation card
        const recommendationsGrid = document.querySelector('.recommendations-grid');
        const newCard = document.createElement('div');
        newCard.className = 'recommendation-card';
        
        const authorText = name.trim() ? ` - ${name}` : '';
        newCard.innerHTML = `<p>"${message}"${authorText}</p>`;
        
        recommendationsGrid.appendChild(newCard);
        
        // Reset form
        recommendationForm.reset();
        
        // Scroll to the new recommendation
        newCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
});
