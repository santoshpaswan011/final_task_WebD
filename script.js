document.addEventListener('DOMContentLoaded', () => {
    
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[name="name"]').value;
        const email = this.querySelector('input[name="email"]').value;
        const message = this.querySelector('textarea[name="message"]').value;

        if (name.length < 2) {
            alert('Name must be at least 2 characters long');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        if (message.length < 10) {
            alert('Message must be at least 10 characters long');
            return;
        }

        
        this.submit();
    });

   
    const eventCards = document.querySelectorAll('.event-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    eventCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });

    
    const heroText = document.querySelector('.hero-content h1');
    const texts = [
        'Welcome to College Club',
        'Join Our Community',
        'Explore Exciting Events'
    ];
    let currentTextIndex = 0;

    function changeHeroText() {
        heroText.style.opacity = '0';
        setTimeout(() => {
            heroText.textContent = texts[currentTextIndex];
            heroText.style.opacity = '1';
            currentTextIndex = (currentTextIndex + 1) % texts.length;
        }, 500);
    }

    setInterval(changeHeroText, 4000);
});