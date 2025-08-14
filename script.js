/**
 * Smart E-Judge LLC - Professional JavaScript
 * Main functionality for the website
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize all features
    initNavbar();
    initScrollAnimations();
    initModals();
    initScrollToTop();
    initSmoothScrolling();
    initParallaxEffects();
    initTypingAnimation();
    initCounterAnimation();
    initFormHandling();
    initLazyLoading();
    initMobileMenu();
    initButtonEffects();
    initStatistics();
    initMapFeatures();
    initAdvancedAnimations();
    initPerformanceOptimizations();
});

/**
 * Navbar functionality
 */
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    // Navbar scroll effect with improved performance
    let ticking = false;
    window.addEventListener('scroll', function () {
        if (!ticking) {
            requestAnimationFrame(function () {
                if (window.scrollY > 100) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                ticking = false;
            });
            ticking = true;
        }
    });

    // Active link highlighting with smooth transitions
    window.addEventListener('scroll', function () {
        let current = '';
        const sections = document.querySelectorAll('section[id]');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // Enhanced mobile menu functionality
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function () {
            // Add animation to navbar collapse
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.style.animation = 'slideUp 0.3s ease-out';
                setTimeout(() => {
                    navbarCollapse.classList.remove('show');
                    navbarCollapse.style.animation = '';
                }, 300);
            } else {
                navbarCollapse.classList.add('show');
                navbarCollapse.style.animation = 'slideDown 0.3s ease-out';
            }
        });

        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                if (window.innerWidth < 992) {
                    navbarCollapse.classList.remove('show');
                }
            });
        });
    }

    // Add hover effects to navbar brand
    const navbarBrand = document.querySelector('.navbar-brand');
    if (navbarBrand) {
        navbarBrand.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.05)';
        });

        navbarBrand.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    }
}

/**
 * Scroll animations
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');

                // Special animations for different elements
                if (entry.target.classList.contains('team-card')) {
                    animateTeamCard(entry.target);
                }

                if (entry.target.classList.contains('service-card')) {
                    animateServiceCard(entry.target);
                }

                if (entry.target.classList.contains('testimonial-card')) {
                    animateTestimonialCard(entry.target);
                }

                if (entry.target.classList.contains('stat-item')) {
                    animateStatItem(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.team-card, .service-card, .testimonial-card, .trust-list li, .services-list li, .stat-item');
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

/**
 * Team card animation
 */
function animateTeamCard(card) {
    card.style.animation = 'slideInUp 0.6s ease-out forwards';
}

/**
 * Service card animation
 */
function animateServiceCard(card) {
    card.style.animation = 'fadeInScale 0.6s ease-out forwards';
}

/**
 * Testimonial card animation
 */
function animateTestimonialCard(card) {
    card.style.animation = 'slideInLeft 0.6s ease-out forwards';
}

/**
 * Stat item animation
 */
function animateStatItem(item) {
    item.style.animation = 'fadeInUp 0.6s ease-out forwards';
}

/**
 * Modal functionality
 */
function initModals() {
    const teamCards = document.querySelectorAll('.team-card');

    teamCards.forEach(card => {
        card.addEventListener('click', function () {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Modal show/hide animations
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('show.bs.modal', function () {
            const modalDialog = this.querySelector('.modal-dialog');
            modalDialog.style.animation = 'modalSlideIn 0.3s ease-out';
        });

        modal.addEventListener('hide.bs.modal', function () {
            const modalDialog = this.querySelector('.modal-dialog');
            modalDialog.style.animation = 'modalSlideOut 0.3s ease-out';
        });
    });
}

/**
 * Scroll to top button
 */
function initScrollToTop() {
    // Create scroll to top button
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollBtn);

    // Show/hide scroll button
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });

    // Scroll to top functionality
    scrollBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Smooth scrolling for navigation links
 */
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Parallax effects
 */
function initParallaxEffects() {
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-section::before');

        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

/**
 * Button hover effects
 */
function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn-danger');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });

        button.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

/**
 * Typing animation for hero title
 */
function initTypingAnimation() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';

        let i = 0;
        const typeWriter = function () {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };

        setTimeout(typeWriter, 1000);
    }
}

/**
 * Counter animation for statistics
 */
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');

    const animateCounter = function (counter) {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 200;
        let current = 0;

        const updateCounter = function () {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                setTimeout(updateCounter, 10);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    };

    // Observe counters for animation
    const counterObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

/**
 * Statistics section functionality
 */
function initStatistics() {
    const statItems = document.querySelectorAll('.stat-item');

    statItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.05)';
        });

        item.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });
}

/**
 * Form validation and submission
 */
function initFormHandling() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Add loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.innerHTML = '<span class="loading"></span> Sending...';
            submitBtn.disabled = true;

            // Simulate form submission
            setTimeout(() => {
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.background = '#28a745';

                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                    form.reset();
                }, 2000);
            }, 2000);
        });
    });
}

/**
 * Image lazy loading
 */
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });
}

/**
 * Mobile menu functionality
 */
function initMobileMenu() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function () {
            navbarCollapse.classList.toggle('show');
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                if (window.innerWidth < 992) {
                    navbarCollapse.classList.remove('show');
                }
            });
        });
    }
}

/**
 * Add custom CSS animations
 */
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeInScale {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes modalSlideIn {
        from {
            opacity: 0;
            transform: translateY(-50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes modalSlideOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-50px);
        }
    }
    
    @keyframes spin {
        to { 
            transform: rotate(360deg); 
        }
    }
    
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
    
    /* Statistics section styles */
    .statistics-section {
        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    }
    
    .stat-item {
        padding: 2rem 1rem;
        text-align: center;
        transition: all 0.3s ease;
        border-radius: 15px;
        background: white;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        margin-bottom: 1rem;
    }
    
    .stat-item:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 20px rgba(0,0,0,0.15);
    }
    
    .stat-number {
        font-size: 2.5rem;
        font-weight: 800;
        color: var(--primary-color);
        margin: 1rem 0;
    }
    
    .stat-item p {
        font-weight: 600;
        color: var(--dark-color);
        margin: 0;
    }
    
    /* Hero buttons */
    .hero-buttons {
        margin-top: 3rem;
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        flex-wrap: wrap;
        animation: heroButtonsFadeIn 1.5s ease-out 0.6s both;
    }
    
    .btn-outline-light {
        border: 3px solid white;
        color: white;
        background: transparent;
        transition: var(--transition);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 1rem 2.5rem;
        border-radius: var(--border-radius-xl);
        position: relative;
        overflow: hidden;
    }
    
    .btn-outline-light::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        transition: var(--transition);
    }
    
    .btn-outline-light:hover::before {
        left: 100%;
    }
    
    .btn-outline-light:hover {
        background: white;
        color: var(--primary-color);
        transform: translateY(-5px);
        box-shadow: var(--shadow-heavy);
        border-color: white;
    }
    
    @keyframes heroButtonsFadeIn {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    /* Contact form styles */
    .contact-form .form-control {
        border-radius: 10px;
        border: 2px solid transparent;
        padding: 0.75rem 1rem;
        transition: all 0.3s ease;
    }
    
    .contact-form .form-control:focus {
        border-color: var(--primary-color);
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    }
    
    /* Loading animation */
    .loading {
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 3px solid rgba(255,255,255,.3);
        border-radius: 50%;
        border-top-color: #fff;
        animation: spin 1s ease-in-out infinite;
    }
    
    /* Responsive improvements */
    @media (max-width: 768px) {
        .stat-number {
            font-size: 2rem;
        }
        
        .hero-buttons .btn {
            display: block;
            width: 100%;
            margin-bottom: 1rem;
        }
        
        .hero-buttons .btn:last-child {
            margin-bottom: 0;
        }
    }
`;

document.head.appendChild(style);

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
window.addEventListener('scroll', debounce(function () {
    // Scroll-based animations
}, 10));

// Error handling
window.addEventListener('error', function (e) {
    console.error('JavaScript error:', e.error);
});

/**
 * Map features and interactions
 */
function initMapFeatures() {
    const mapContainer = document.querySelector('.map-container');
    const mapIframe = document.querySelector('.map-wrapper iframe');

    if (mapContainer && mapIframe) {
        // Add loading animation
        mapIframe.addEventListener('load', function () {
            mapContainer.classList.add('map-loaded');
        });

        // Add click to zoom effect
        mapContainer.addEventListener('click', function (e) {
            if (e.target.closest('.map-actions')) return;

            this.classList.add('map-clicked');
            setTimeout(() => {
                this.classList.remove('map-clicked');
            }, 300);
        });

        // Add hover effects for map info
        const mapInfo = document.querySelector('.map-info');
        if (mapInfo) {
            mapInfo.addEventListener('mouseenter', function () {
                this.style.transform = 'translateY(-5px)';
            });

            mapInfo.addEventListener('mouseleave', function () {
                this.style.transform = 'translateY(0)';
            });
        }
    }
}

/**
 * Advanced animations and effects
 */
function initAdvancedAnimations() {
    // Parallax scrolling for hero section
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-section');

        if (heroSection) {
            const speed = scrolled * 0.5;
            heroSection.style.transform = `translateY(${speed}px)`;
        }
    });

    // Text reveal animations
    const textElements = document.querySelectorAll('.section-title, .lead, .hero-subtitle');
    const textObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('text-revealed');
            }
        });
    });

    textElements.forEach(el => {
        textObserver.observe(el);
    });

    // Card flip animations for team cards
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'rotateY(5deg) translateY(-10px)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'rotateY(0deg) translateY(0)';
        });
    });
}

/**
 * Performance optimizations
 */
function initPerformanceOptimizations() {
    // Intersection Observer for images
    const imageObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    // Observe all images with data-src
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });

    // Preload critical resources
    const criticalResources = [
        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    ];

    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = 'style';
        document.head.appendChild(link);
    });

    // Service Worker registration (if supported)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
            // navigator.serviceWorker.register('/sw.js');
        });
    }
}

/**
 * Enhanced form validation
 */
function initEnhancedFormValidation() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea');

        inputs.forEach(input => {
            // Real-time validation
            input.addEventListener('blur', function () {
                validateField(this);
            });

            input.addEventListener('input', function () {
                if (this.classList.contains('error')) {
                    validateField(this);
                }
            });
        });

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            let isValid = true;
            inputs.forEach(input => {
                if (!validateField(input)) {
                    isValid = false;
                }
            });

            if (isValid) {
                submitForm(this);
            }
        });
    });
}

function validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    const required = field.hasAttribute('required');

    // Remove existing error states
    field.classList.remove('error', 'success');

    // Check if required field is empty
    if (required && !value) {
        showFieldError(field, 'This field is required');
        return false;
    }

    // Email validation
    if (type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, 'Please enter a valid email address');
            return false;
        }
    }

    // Phone validation
    if (type === 'tel' && value) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(value.replace(/\s/g, ''))) {
            showFieldError(field, 'Please enter a valid phone number');
            return false;
        }
    }

    // Show success state
    field.classList.add('success');
    return true;
}

function showFieldError(field, message) {
    field.classList.add('error');

    // Remove existing error message
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    // Add new error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message text-danger mt-1';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
}

function submitForm(form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    // Show loading state
    submitBtn.innerHTML = '<span class="loading"></span> Sending...';
    submitBtn.disabled = true;

    // Simulate form submission
    setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        submitBtn.classList.add('btn-success');

        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.classList.remove('btn-success');
            submitBtn.disabled = false;
            form.reset();

            // Remove success states
            form.querySelectorAll('.success').forEach(field => {
                field.classList.remove('success');
            });
        }, 3000);
    }, 2000);
}

// Console log for debugging
console.log('Smart E-Judge LLC - Website loaded successfully!');



