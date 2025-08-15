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
    initImmigrationCarousel();

});

/**
 * Navbar functionality
 */
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    // Add scroll effect to navbar
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active navigation highlighting
        let current = '';
        const sections = document.querySelectorAll('section[id]');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
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

                // Add glow effect to elements
                if (entry.target.classList.contains('btn-danger')) {
                    entry.target.style.animation = 'glow 2s ease-in-out infinite';
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.team-card, .service-card, .testimonial-card, .trust-list li, .services-list li, .stat-item, .btn-danger, .section-title');
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Smooth reveal for sections
    const sectionObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease-out';
        sectionObserver.observe(section);
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
    const counters = document.querySelectorAll('.stat-number[data-target]');

    const animateCounter = function (counter) {
        const target = parseInt(counter.getAttribute('data-target'));
        if (isNaN(target)) return; // Skip if target is not a valid number

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
        position: relative;
        overflow: hidden;
    }
    
    .stat-item::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(220, 53, 69, 0.05) 0%, rgba(220, 53, 69, 0.1) 100%);
        opacity: 0;
        transition: all 0.3s ease;
    }
    
    .stat-item:hover::before {
        opacity: 1;
    }
    
    .stat-item:hover {
        transform: translateY(-10px) scale(1.05);
        box-shadow: 0 15px 30px rgba(220, 53, 69, 0.2);
        animation: statBounce 0.6s ease-out;
    }
    
    @keyframes statBounce {
        0% { transform: translateY(-10px) scale(1.05); }
        50% { transform: translateY(-15px) scale(1.05); }
        100% { transform: translateY(-10px) scale(1.05); }
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
    
    /* Enhanced page animations */
    .fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
    }
    
    .fade-in-left {
        animation: fadeInLeft 0.8s ease-out forwards;
    }
    
    .fade-in-right {
        animation: fadeInRight 0.8s ease-out forwards;
    }
    
    .scale-in {
        animation: scaleIn 0.6s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeInLeft {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes fadeInRight {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes scaleIn {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
    
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
    }
    
    @keyframes glow {
        0%, 100% { box-shadow: 0 0 5px rgba(220, 53, 69, 0.3); }
        50% { box-shadow: 0 0 20px rgba(220, 53, 69, 0.6); }
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
    // window.addEventListener('scroll', function () {
    //     const scrolled = window.pageYOffset;
    //     const heroSection = document.querySelector('.hero-section');

    //     if (heroSection) {
    //         const speed = scrolled * 0.5;
    //         heroSection.style.transform = `translateY(${speed}px)`;
    //     }
    // });

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

    // Enhanced section animations
    const sections = document.querySelectorAll('section');
    const sectionObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                const elements = section.querySelectorAll('.col-lg-6, .col-lg-4, .col-lg-3, .col-md-6');

                elements.forEach((el, index) => {
                    setTimeout(() => {
                        if (index % 2 === 0) {
                            el.classList.add('fade-in-left');
                        } else {
                            el.classList.add('fade-in-right');
                        }
                    }, index * 200);
                });
            }
        });
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
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

    // Floating animation for AI brain
    const aiBrain = document.querySelector('.ai-brain');
    if (aiBrain) {
        aiBrain.style.animation = 'float 4s ease-in-out infinite';
    }

    // Pulse animation for statistics
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(number => {
        number.addEventListener('animationend', function () {
            this.style.animation = 'pulse 2s ease-in-out infinite';
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












/**
 * Immigration Carousel functionality
 */
function initImmigrationCarousel() {
    const carousel = document.getElementById('immigrationCarousel');
    if (!carousel) return;

    // Auto-play with pause on hover
    let autoplayInterval;

    const startAutoplay = () => {
        autoplayInterval = setInterval(() => {
            const nextButton = carousel.querySelector('.carousel-control-next');
            if (nextButton) {
                nextButton.click();
            }
        }, 5000); // Change slide every 5 seconds
    };

    const stopAutoplay = () => {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
    };

    // Start autoplay
    startAutoplay();

    // Pause on hover
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);

    // Add slide transition effects
    const carouselItems = carousel.querySelectorAll('.carousel-item');
    carouselItems.forEach((item, index) => {
        item.addEventListener('transitionend', function () {
            if (this.classList.contains('active')) {
                // Add entrance animation for active slide
                this.style.animation = 'slideInRight 0.6s ease-out';
            }
        });
    });

    // Enhanced indicators
    const indicators = carousel.querySelectorAll('.carousel-indicators button');
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function () {
            // Remove active class from all indicators
            indicators.forEach(ind => ind.classList.remove('active'));
            // Add active class to clicked indicator
            this.classList.add('active');
        });
    });

    // Add keyboard navigation
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') {
            const prevButton = carousel.querySelector('.carousel-control-prev');
            if (prevButton) prevButton.click();
        } else if (e.key === 'ArrowRight') {
            const nextButton = carousel.querySelector('.carousel-control-next');
            if (nextButton) nextButton.click();
        }
    });

    // Add touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].screenX;
    });

    carousel.addEventListener('touchend', function (e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left - next slide
            const nextButton = carousel.querySelector('.carousel-control-next');
            if (nextButton) nextButton.click();
        } else if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right - previous slide
            const prevButton = carousel.querySelector('.carousel-control-prev');
            if (prevButton) prevButton.click();
        }
    }
}

// Language switching functionality
const languages = {
    en: {
        // Navigation
        home: "Home",
        team: "Team",
        trust: "Trust",
        services: "Services",
        testimonials: "Reviews",
        faqs: "FAQs",
        map: "Location",
        contact: "Contact",

        // Hero Section
        // heroTitle: "Are you looking for an immigration lawyer who will put your mind at ease?",
        heroSubtitle: "Dr. Ayad Al-Samhan is the best Arab-American immigration and business lawyer with over 15 years of experience.",
        bookConsultation: "Book Consultation",
        learnMore: "Learn More",

        // Hero Badge and Features
        heroBadge: "Professional Immigration Services",
        heroFeature1: "98% Success Rate",
        heroFeature2: "AI-Powered Solutions",
        heroFeature3: "Expert Legal Team",

        // Statistics
        successfulCases: "Successful Cases",
        successRate: "Success Rate %",
        yearsExperience: "Years Experience",
        aiPoweredHours: "AI-Powered Hours",

        // Team Section
        ourExpertTeam: "Our Expert Team",
        teamSubtitle: "Meet the legal and technology experts behind our AI-powered immigration solutions",
        teamEyadTitle: "Judge Eyad Alsamhan",
        teamEyadDegree: "Ph.D | LL.M | B.A. (J.D.)",
        teamEyadRole: "Managing Partner & Legal Expert",
        teamMuntahaTitle: "Attorney Muntaha Hijazi",
        teamMuntahaDegree: "Local representative in Jordan",
        teamMuntahaRole: "Regional Legal Coordinator",
        teamMohammadTitle: "Mohammad Al Nobani",
        teamMohammadDegree: "Software Engineer & AI Expert",
        teamMohammadRole: "Chief Technology Officer",
        teamHaniTitle: "Hani Hijazi",
        teamHaniDegree: "AI & Networking Expert",
        teamHaniRole: "AI Research Director",

        // Team Section
        ourExpertTeam: "Our Expert Team",
        teamSubtitle: "Meet the legal and technology experts behind our AI-powered immigration solutions",
        managingPartner: "Managing Partner & Legal Expert",
        regionalCoordinator: "Regional Legal Coordinator",
        chiefTechnology: "Chief Technology Officer",
        aiResearch: "AI Research Director",

        // Services
        ourAIDrivenServices: "Our AI-Driven Services",
        servicesSubtitle: "Empowering Your EB2 NIW Journey with Cutting-Edge AI Technology",
        servicesDescription: "At Smart E-Judge LLC, we combine the power of Artificial Intelligence with unmatched legal expertise to streamline the EB2 National Interest Waiver (NIW) application process.",
        ourImmigrationServices: "Our Immigration Services",
        bookConsultationBtn: "Book a Consultation",

        // Trust Section
        whyTrustUs: "Why Trust Smart E-Judge LLC?",
        getStartedToday: "Get Started Today",

        // Testimonials
        whatOurClientsSay: "What Our Clients Say",
        testimonialsSubtitle: "Real testimonials from successful applicants",

        // FAQs
        frequentlyAskedQuestions: "Frequently Asked Questions",
        faqSubtitle: "Get answers to common questions about our services",

        // Contact
        contactUs: "Contact Us",
        contactSubtitle: "Initiate Your Next-Gen Immigration Process with Us",
        contactDescription: "Discover the best of immigration methods, driven by AI and guided by legal luminaries. Contact us today!",
        getInTouch: "Get In Touch",
        connectWithUs: "Connect With Us",

        // Immigration Stories
        immigrationSuccessStories: "Immigration Success Stories",
        immigrationStoriesSubtitle: "Real people, real success stories - celebrating the journey of immigration",

        // Map Section
        visitOurOffice: "Visit Our Office",
        mapSubtitle: "Find us in the heart of Utah's business district",

        // Footer
        smartEJudgeLLC: "Smart E-Judge LLC",
        footerDescription: "Leading the future of immigration services with AI-powered solutions and expert legal guidance.",
        quickLinks: "Quick Links",

        // Top Bar
        topTitle: "Welcome to the website of Judge Dr.Eyad Alsamhan – The Best Arabic Immigration Attorney in the U.S",

        // Statistics Labels
        statSuccessfulCases: "Successful Cases",
        statYearsExperience: "Years Experience",
        statAISupport: "AI Support",

        // Team Section
        teamAccreditation: "Accreditation & Recognition",
        teamAccreditationSubtitle: "Trusted by leading legal organizations",

        // Trust Section
        trustInnovativeAI: "Innovative AI Expertise: Our AI systems analyze patterns of successful applications, enhanced by Judge Alsamhan's profound legal insights.",
        trustLegalMastery: "Legal Mastery: Led by Judge Alsamhan, our team possesses unparalleled depth in EB2 NIW applications.",
        trustEfficiency: "Efficiency & Accuracy: Melding AI insights with legal prowess guarantees impeccable applications.",
        trustTransparent: "Transparent Process: Get real-time AI updates on your application status and predictive outcome insights.",
        trustProven: "Proven Track Record: Over 500 successful cases with a 98% success rate.",

        // Carousel Stories
        carouselFamilyReunification: "Family Reunification",
        carouselFamilyDescription: "Celebrating the moment when families are reunited after successful immigration processes. Every smile represents a dream come true.",
        carouselAcademicAchievements: "Academic Achievements",
        carouselAcademicDescription: "Students achieving their dreams through education visas and academic excellence. Knowledge knows no borders.",
        carouselBusinessSuccess: "Business Immigration Success",
        carouselBusinessDescription: "Entrepreneurs building successful businesses and contributing to the American economy through innovation and hard work.",
        carouselCommunityBuilding: "Community Building",
        carouselCommunityDescription: "Immigrants coming together to build strong, vibrant communities that enrich American society and culture.",
        carouselCelebrationMoments: "Celebration Moments",
        carouselCelebrationDescription: "Every successful immigration case is a reason to celebrate. These moments of joy and achievement inspire us to continue our mission.",

        // Carousel Stat Labels
        carouselStatFamilies: "Families Reunited",
        carouselStatStudents: "Students Successfully Placed",
        carouselStatBusinesses: "Businesses Established",
        carouselStatLives: "Lives Transformed",
        carouselStatSuccessRate: "Success Rate",

        // Service Descriptions
        serviceE2Visa: "Investor visa for entrepreneurs looking to start or purchase a business in the United States. Our expert team ensures your investment meets all requirements and maximizes your chances of approval.",
        serviceEB1: "For individuals with extraordinary ability in sciences, arts, education, business, or athletics. We help showcase your achievements and demonstrate your exceptional contributions to your field.",
        serviceEB2NIW: "Advanced degree professionals and individuals with exceptional ability can bypass the labor certification requirement. Our AI-powered analysis optimizes your petition for maximum success.",
        servicePERM: "Employment-based green card process requiring labor certification. We navigate the complex requirements and ensure compliance with Department of Labor regulations.",

        // Map Section
        mapOurLocation: "Our Location",
        mapExactAddress: "Exact address available upon consultation",
        mapGetDirections: "Get Directions",
        mapCallNow: "Call Now",

        // FAQ Questions
        faqEB2NIW: "What is EB2 NIW?",
        faqEB2NIWAnswer: "The EB2 National Interest Waiver (NIW) is an employment-based immigration category, inviting exceptional professionals to pursue a U.S. green card without the need for employer sponsorship, if it aligns with U.S. interests.",
        faqAIJourney: "How does AI refine the application journey?",
        faqAIJourneyAnswer: "Our AI tools thoroughly analyze datasets of successful applications, provide alerts for potential challenges, and fortify application strengths, always under the watchful eye of Judge Alsamhan's expertise.",
        faqSuccessRate: "What is your success rate?",
        faqSuccessRateAnswer: "We maintain a 98% success rate across over 500 cases, thanks to our combination of AI technology and expert legal guidance.",
        faqProcessTime: "How long does the process take?",
        faqProcessTimeAnswer: "The typical EB2 NIW process takes 6-12 months, but our AI-powered approach can often expedite certain aspects of the application process.",
        faqVerification: "For Verification: Please click here to verify credentials with USCIS.",

        // Footer Links
        footerHome: "Home",
        footerOurTeam: "Our Team",
        footerServices: "Services",
        footerContact: "Contact",
        footerCopyright: "© 2025 Smart E-Judge LLC. All rights reserved.",
        footerDisclaimer: "This website is for informational purposes only and does not constitute legal advice.",

        // Service Titles
        serviceE2VisaTitle: "E2 Visa",
        serviceEB1Title: "EB1",
        serviceEB2NIWTitle: "EB2-NIW",
        servicePERMTitle: "PERM",

        // Service Descriptions Short
        serviceE2VisaShort: "Assistance in obtaining the E2 Investor Visa for entrepreneurs and investors seeking to establish a business in the USA.",
        serviceEB1Short: "Expert guidance for the EB1 Visa, designed for individuals with extraordinary ability in their professional fields.",
        serviceEB2NIWShort: "Support for EB2-NIW petitions, ideal for professionals with advanced degrees or exceptional ability contributing to the U.S. national interest.",
        servicePERMShort: "Complete assistance with the PERM labor certification process, a key step for employment-based green card applications.",

        // Testimonials
        testimonialHani: "Under the combined power of Judge Alsamhan's expertise and AI, my application process was a breeze. Smart E-Judge is leading a new wave in immigration!",
        testimonialMohammad: "The melding of tech and legal expertise is simply astounding. The future of immigration is here!",
        testimonialSarah: "The AI-powered approach made my application process incredibly smooth and efficient. Highly recommended!",
        testimonialAhmed: "Professional, efficient, and innovative. Smart E-Judge truly represents the future of legal services.",

        // Testimonial Authors
        authorHani: "Hani Hijazi, AI & Networking expert",
        authorMohammad: "Mohammad Alnobani, Software Engineer and AI Expert",
        authorSarah: "Dr. Sarah Johnson, Research Scientist",
        authorAhmed: "Dr. Ahmed Hassan, Medical Researcher",

        // Modal Titles
        modalEyadTitle: "Judge Eyad Alsamhan",
        modalMuntahaTitle: "Attorney Muntaha Hijazi",
        modalMohammadTitle: "Mohammad Al Nobani",
        modalHaniTitle: "Hani Hijazi",

        // Modal Content
        modalEyadRole: "Managing Partner & Legal Expert",
        modalMuntahaRole: "Regional Legal Coordinator",
        modalMohammadRole: "Chief Technology Officer",
        modalHaniRole: "AI Research Director",

        modalEyadDescription: "Judge Eyad Alsamhan brings over 15 years of legal expertise in immigration law, specializing in EB2 NIW applications. His deep understanding of both legal frameworks and technological innovation makes him a pioneer in AI-enhanced legal services.",
        modalMuntahaDescription: "Attorney Muntaha Hijazi serves as our regional legal coordinator, providing local expertise and support for clients in the Middle East region. Her deep understanding of both local and international legal frameworks ensures seamless service delivery.",
        modalMohammadDescription: "Mohammad Al Nobani leads our technological innovation, developing cutting-edge AI solutions that revolutionize the immigration application process. His expertise in machine learning and software engineering drives our AI-powered services.",
        modalHaniDescription: "Hani Hijazi specializes in natural language processing and network AI, developing sophisticated algorithms that analyze legal documents and predict application outcomes with remarkable accuracy.",

        // Modal Lists
        modalEyadList1: "15+ years of immigration law experience",
        modalEyadList2: "Expert in EB2 NIW applications",
        modalEyadList3: "Pioneer in AI-enhanced legal services",
        modalEyadList4: "Recognized legal authority in the field",

        modalMuntahaList1: "Regional legal expertise",
        modalMuntahaList2: "Local client support",
        modalMuntahaList3: "International legal coordination",
        modalMuntahaList4: "Multilingual legal services",

        modalMohammadList1: "AI and Machine Learning expert",
        modalMohammadList2: "Software engineering leadership",
        modalMohammadList3: "Innovation in legal tech",
        modalMohammadList4: "System architecture design",

        modalHaniList1: "Natural Language Processing expert",
        modalHaniList2: "Network AI development",
        modalHaniList3: "Predictive analytics",
        modalHaniList4: "Document analysis systems"
    },

    ar: {
        // Navigation
        home: "الرئيسية",
        team: "فريق العمل",
        trust: "الثقة",
        services: "الخدمات",
        testimonials: "التقييمات",
        faqs: "الأسئلة الشائعة",
        map: "الموقع",
        contact: "اتصل بنا",

        // Hero Section
        heroTitle: "هل تبحث عن محامي هجرة يطمئن قلبك؟",
        heroSubtitle: "الدكتور أياد السمحان هو أفضل محامي الهجرة والأعمال العربي الأمريكي مع أكثر من 15 عاماً من الخبرة.",
        bookConsultation: "احجز استشارة",
        learnMore: "اعرف المزيد",

        // Hero Badge and Features
        heroBadge: "خدمات الهجرة المهنية",
        heroFeature1: "98% معدل النجاح",
        heroFeature2: "حلول مدعومة بالذكاء الاصطناعي",
        heroFeature3: "فريق قانوني خبير",

        // Statistics
        successfulCases: "حالات ناجحة",
        successRate: "معدل النجاح %",
        yearsExperience: "سنوات الخبرة",
        aiPoweredHours: "ساعات الذكاء الاصطناعي",

        // Team Section
        ourExpertTeam: "فريق الخبراء لدينا",
        teamSubtitle: "تعرف على الخبراء القانونيين والتكنولوجيين وراء حلول الهجرة المدعومة بالذكاء الاصطناعي",
        teamEyadTitle: "القاضي أياد السمحان",
        teamEyadDegree: "دكتوراه | ماجستير في القانون | بكالوريوس (دكتوراه في القانون)",
        teamEyadRole: "الشريك المدير والخبير القانوني",
        teamMuntahaTitle: "المحامية منتهى حجازي",
        teamMuntahaDegree: "ممثلة محلية في الأردن",
        teamMuntahaRole: "منسقة قانونية إقليمية",
        teamMohammadTitle: "محمد النوباني",
        teamMohammadDegree: "مهندس برمجيات وخبير ذكاء اصطناعي",
        teamMohammadRole: "مدير التكنولوجيا",
        teamHaniTitle: "هاني حجازي",
        teamHaniDegree: "خبير الذكاء الاصطناعي والشبكات",
        teamHaniRole: "مدير أبحاث الذكاء الاصطناعي",

        // Team Section
        ourExpertTeam: "فريق الخبراء لدينا",
        teamSubtitle: "تعرف على الخبراء القانونيين والتقنيين وراء حلول الهجرة المدعومة بالذكاء الاصطناعي",
        managingPartner: "الشريك المدير والخبير القانوني",
        regionalCoordinator: "منسق قانوني إقليمي",
        chiefTechnology: "مدير التكنولوجيا",
        aiResearch: "مدير أبحاث الذكاء الاصطناعي",

        // Services
        ourAIDrivenServices: "خدماتنا المدعومة بالذكاء الاصطناعي",
        servicesSubtitle: "تمكين رحلتك في EB2 NIW بتقنية الذكاء الاصطناعي المتطورة",
        servicesDescription: "في Smart E-Judge LLC، نجمع بين قوة الذكاء الاصطناعي والخبرة القانونية التي لا مثيل لها لتبسيط عملية التقديم على EB2 National Interest Waiver (NIW).",
        ourImmigrationServices: "خدمات الهجرة لدينا",
        bookConsultationBtn: "احجز استشارة",

        // Trust Section
        whyTrustUs: "لماذا تثق بـ Smart E-Judge LLC؟",
        getStartedToday: "ابدأ اليوم",

        // Testimonials
        whatOurClientsSay: "ماذا يقول عملاؤنا",
        testimonialsSubtitle: "تقييمات حقيقية من مقدمي الطلبات الناجحين",

        // FAQs
        frequentlyAskedQuestions: "الأسئلة الشائعة",
        faqSubtitle: "احصل على إجابات للأسئلة الشائعة حول خدماتنا",

        // Contact
        contactUs: "اتصل بنا",
        contactSubtitle: "ابدأ عملية الهجرة الجيل القادم معنا",
        contactDescription: "اكتشف أفضل طرق الهجرة، مدعومة بالذكاء الاصطناعي وموجهة من قبل الخبراء القانونيين. اتصل بنا اليوم!",
        getInTouch: "تواصل معنا",
        connectWithUs: "تواصل معنا",

        // Immigration Stories
        immigrationSuccessStories: "قصص نجاح الهجرة",
        immigrationStoriesSubtitle: "أشخاص حقيقيون، قصص نجاح حقيقية - نحتفل برحلة الهجرة",

        // Map Section
        visitOurOffice: "زر مكتبنا",
        mapSubtitle: "وجدنا في قلب منطقة الأعمال في يوتا",

        // Footer
        smartEJudgeLLC: "Smart E-Judge LLC",
        footerDescription: "نقود مستقبل خدمات الهجرة بحلول مدعومة بالذكاء الاصطناعي وتوجيه قانوني خبير.",
        quickLinks: "روابط سريعة",

        // Top Bar
        topTitle: "مرحباً بكم في موقع القاضي الدكتور أياد السمحان – أفضل محامي الهجرة العربي في الولايات المتحدة",

        // Statistics Labels
        statSuccessfulCases: "حالات ناجحة",
        statYearsExperience: "سنوات الخبرة",
        statAISupport: "دعم الذكاء الاصطناعي",

        // Team Section
        teamAccreditation: "الاعتماد والاعتراف",
        teamAccreditationSubtitle: "موثوق به من قبل المنظمات القانونية الرائدة",

        // Trust Section
        trustInnovativeAI: "خبرة الذكاء الاصطناعي المبتكرة: تحلل أنظمة الذكاء الاصطناعي لدينا أنماط الطلبات الناجحة، معززة برؤى القاضي السمحان القانونية العميقة.",
        trustLegalMastery: "الإتقان القانوني: بقيادة القاضي السمحان، يمتلك فريقنا عمقاً لا مثيل له في طلبات EB2 NIW.",
        trustEfficiency: "الكفاءة والدقة: مزج رؤى الذكاء الاصطناعي مع المهارة القانونية يضمن طلبات لا تشوبها شائبة.",
        trustTransparent: "عملية شفافة: احصل على تحديثات الذكاء الاصطناعي في الوقت الفعلي حول حالة طلبك ورؤى النتائج التنبؤية.",
        trustProven: "سجل مثبت: أكثر من 500 حالة ناجحة بنسبة نجاح 98%.",

        // Carousel Stories
        carouselFamilyReunification: "لم شمل الأسرة",
        carouselFamilyDescription: "الاحتفال باللحظة التي تتحد فيها العائلات بعد عمليات الهجرة الناجحة. كل ابتسامة تمثل حلم تحقق.",
        carouselAcademicAchievements: "التحصيل الأكاديمي",
        carouselAcademicDescription: "الطلاب يحققون أحلامهم من خلال تأشيرات التعليم والتميز الأكاديمي. المعرفة لا تعرف حدوداً.",
        carouselBusinessSuccess: "نجاح الهجرة التجارية",
        carouselBusinessDescription: "رواد الأعمال يبنون أعمالاً ناجحة ويساهمون في الاقتصاد الأمريكي من خلال الابتكار والعمل الجاد.",
        carouselCommunityBuilding: "بناء المجتمع",
        carouselCommunityDescription: "المهاجرون يتحدون لبناء مجتمعات قوية ونابضة بالحياة تثري المجتمع والثقافة الأمريكية.",
        carouselCelebrationMoments: "لحظات الاحتفال",
        carouselCelebrationDescription: "كل حالة هجرة ناجحة سبب للاحتفال. هذه لحظات الفرح والإنجاز تلهمنا لمواصلة مهمتنا.",

        // Carousel Stat Labels
        carouselStatFamilies: "عائلات متحدة",
        carouselStatStudents: "طلاب تم توظيفهم بنجاح",
        carouselStatBusinesses: "أعمال تجارية تم تأسيسها",
        carouselStatLives: "حياة تم تحويلها",
        carouselStatSuccessRate: "معدل النجاح",

        // Service Descriptions
        serviceE2Visa: "تأشيرة المستثمر لرواد الأعمال الذين يتطلعون لبدء أو شراء عمل تجاري في الولايات المتحدة. يضمن فريق الخبراء لدينا أن استثمارك يلبي جميع المتطلبات ويعظم فرص موافقتك.",
        serviceEB1: "للأفراد ذوي القدرات الاستثنائية في العلوم والفنون والتعليم والأعمال أو الرياضة. نساعد في عرض إنجازاتك وإظهار مساهماتك الاستثنائية في مجالك.",
        serviceEB2NIW: "يمكن للمحترفين ذوي الدرجات المتقدمة والأفراد ذوي القدرات الاستثنائية تجاوز متطلب شهادة العمل. يحسن تحليلنا المدعوم بالذكاء الاصطناعي عريضتك للنجاح الأقصى.",
        servicePERM: "عملية البطاقة الخضراء القائمة على التوظيف تتطلب شهادة عمل. نتنقل في المتطلبات المعقدة ونتأكد من الامتثال لتنظيمات وزارة العمل.",

        // Map Section
        mapOurLocation: "موقعنا",
        mapExactAddress: "العنوان الدقيق متاح عند الاستشارة",
        mapGetDirections: "احصل على الاتجاهات",
        mapCallNow: "اتصل الآن",

        // FAQ Questions
        faqEB2NIW: "ما هو EB2 NIW؟",
        faqEB2NIWAnswer: "EB2 National Interest Waiver (NIW) هو فئة هجرة قائمة على التوظيف، تدعو المحترفين الاستثنائيين لمتابعة البطاقة الخضراء الأمريكية دون الحاجة لرعاية صاحب العمل، إذا كان يتوافق مع مصالح الولايات المتحدة.",
        faqAIJourney: "كيف يحسن الذكاء الاصطناعي رحلة التطبيق؟",
        faqAIJourneyAnswer: "تحلل أدوات الذكاء الاصطناعي لدينا مجموعات بيانات الطلبات الناجحة، وتوفر تنبيهات للتحديات المحتملة، وتقوي نقاط قوة التطبيق، دائماً تحت إشراف خبرة القاضي السمحان.",
        faqSuccessRate: "ما هو معدل نجاحكم؟",
        faqSuccessRateAnswer: "نحافظ على معدل نجاح 98% عبر أكثر من 500 حالة، بفضل مزيجنا من تقنية الذكاء الاصطناعي والتوجيه القانوني الخبير.",
        faqProcessTime: "كم من الوقت تستغرق العملية؟",
        faqProcessTimeAnswer: "تستغرق عملية EB2 NIW النموذجية 6-12 شهراً، لكن نهجنا المدعوم بالذكاء الاصطناعي يمكن أن يعجل جوانب معينة من عملية التطبيق.",
        faqVerification: "للتحقق: يرجى النقر هنا للتحقق من الاعتماد مع USCIS.",

        // Footer Links
        footerHome: "الرئيسية",
        footerOurTeam: "فريق العمل",
        footerServices: "الخدمات",
        footerContact: "اتصل بنا",
        footerCopyright: "© 2025 Smart E-Judge LLC. جميع الحقوق محفوظة.",
        footerDisclaimer: "هذا الموقع لأغراض إعلامية فقط ولا يشكل نصيحة قانونية.",

        // Service Titles
        serviceE2VisaTitle: "تأشيرة E2",
        serviceEB1Title: "تأشيرة EB1",
        serviceEB2NIWTitle: "تأشيرة EB2-NIW",
        servicePERMTitle: "شهادة PERM",

        // Service Descriptions Short
        serviceE2VisaShort: "المساعدة في الحصول على تأشيرة المستثمر E2 لرواد الأعمال والمستثمرين الذين يسعون لإنشاء عمل تجاري في الولايات المتحدة.",
        serviceEB1Short: "التوجيه الخبير لتأشيرة EB1، مصممة للأفراد ذوي القدرات الاستثنائية في مجالاتهم المهنية.",
        serviceEB2NIWShort: "الدعم لطلبات EB2-NIW، مثالية للمحترفين ذوي الدرجات المتقدمة أو القدرات الاستثنائية المساهمة في المصلحة الوطنية الأمريكية.",
        servicePERMShort: "المساعدة الكاملة في عملية شهادة العمل PERM، خطوة أساسية لطلبات البطاقة الخضراء القائمة على التوظيف.",

        // Testimonials
        testimonialHani: "تحت القوة المشتركة لخبرة القاضي السمحان والذكاء الاصطناعي، كانت عملية طلبي سهلة جداً. Smart E-Judge يقود موجة جديدة في الهجرة!",
        testimonialMohammad: "مزج الخبرة التقنية والقانونية مذهل ببساطة. مستقبل الهجرة هنا!",
        testimonialSarah: "النهج المدعوم بالذكاء الاصطناعي جعل عملية طلبي سلسة وفعالة بشكل لا يصدق. أوصي بها بشدة!",
        testimonialAhmed: "مهني وفعال ومبتكر. Smart E-Judge يمثل حقاً مستقبل الخدمات القانونية.",

        // Testimonial Authors
        authorHani: "هاني حجازي، خبير الذكاء الاصطناعي والشبكات",
        authorMohammad: "محمد النوباني، مهندس برمجيات وخبير الذكاء الاصطناعي",
        authorSarah: "الدكتورة سارة جونسون، عالمة أبحاث",
        authorAhmed: "الدكتور أحمد حسن، باحث طبي",

        // Modal Titles
        modalEyadTitle: "القاضي أياد السمحان",
        modalMuntahaTitle: "المحامية منتهى حجازي",
        modalMohammadTitle: "محمد النوباني",
        modalHaniTitle: "هاني حجازي",

        // Modal Content
        modalEyadRole: "الشريك المدير والخبير القانوني",
        modalMuntahaRole: "منسق قانوني إقليمي",
        modalMohammadRole: "مدير التكنولوجيا",
        modalHaniRole: "مدير أبحاث الذكاء الاصطناعي",

        modalEyadDescription: "يجلب القاضي أياد السمحان أكثر من 15 عاماً من الخبرة القانونية في قانون الهجرة، متخصصاً في طلبات EB2 NIW. فهمه العميق للإطارات القانونية والابتكار التكنولوجي يجعله رائداً في الخدمات القانونية المعززة بالذكاء الاصطناعي.",
        modalMuntahaDescription: "تخدم المحامية منتهى حجازي كمنسقة قانونية إقليمية لدينا، مقدمة الخبرة المحلية والدعم للعملاء في منطقة الشرق الأوسط. فهمها العميق للإطارات القانونية المحلية والدولية يضمن تقديم خدمة سلسة.",
        modalMohammadDescription: "يقود محمد النوباني ابتكارنا التكنولوجي، مطوراً حلول الذكاء الاصطناعي المتطورة التي تحدث ثورة في عملية طلب الهجرة. خبرته في التعلم الآلي وهندسة البرمجيات تقود خدماتنا المدعومة بالذكاء الاصطناعي.",
        modalHaniDescription: "يتخصص هاني حجازي في معالجة اللغة الطبيعية والذكاء الاصطناعي للشبكات، مطوراً خوارزميات متطورة تحلل المستندات القانونية وتتنبأ بنتائج الطلبات بدقة ملحوظة.",

        // Modal Lists
        modalEyadList1: "أكثر من 15 عاماً من الخبرة في قانون الهجرة",
        modalEyadList2: "خبير في طلبات EB2 NIW",
        modalEyadList3: "رائد في الخدمات القانونية المعززة بالذكاء الاصطناعي",
        modalEyadList4: "سلطة قانونية معترف بها في المجال",

        modalMuntahaList1: "خبرة قانونية إقليمية",
        modalMuntahaList2: "دعم العملاء المحليين",
        modalMuntahaList3: "التنسيق القانوني الدولي",
        modalMuntahaList4: "خدمات قانونية متعددة اللغات",

        modalMohammadList1: "خبير الذكاء الاصطناعي والتعلم الآلي",
        modalMohammadList2: "قيادة هندسة البرمجيات",
        modalMohammadList3: "الابتكار في التقنية القانونية",
        modalMohammadList4: "تصميم هندسة النظام",

        modalHaniList1: "خبير معالجة اللغة الطبيعية",
        modalHaniList2: "تطوير الذكاء الاصطناعي للشبكات",
        modalHaniList3: "التحليلات التنبؤية",
        modalHaniList4: "أنظمة تحليل المستندات"
    },

    fr: {
        // Navigation
        home: "Accueil",
        team: "Équipe",
        trust: "Confiance",
        services: "Services",
        testimonials: "Avis",
        faqs: "FAQ",
        map: "Localisation",
        contact: "Contact",

        // Hero Section
        heroTitle: "Cherchez-vous un avocat en immigration qui vous rassurera ?",
        heroSubtitle: "Dr. Ayad Al-Samhan est le meilleur avocat arabo-américain en immigration et affaires avec plus de 15 ans d'expérience.",
        bookConsultation: "Réserver une consultation",
        learnMore: "En savoir plus",

        // Hero Badge and Features
        heroBadge: "Services d'Immigration Professionnels",
        heroFeature1: "98% Taux de Réussite",
        heroFeature2: "Solutions Alimentées par l'IA",
        heroFeature3: "Équipe Juridique d'Experts",

        // Statistics
        successfulCases: "Cas réussis",
        successRate: "Taux de réussite %",
        yearsExperience: "Années d'expérience",
        aiPoweredHours: "Heures alimentées par l'IA",

        // Team Section
        ourExpertTeam: "Notre équipe d'experts",
        teamSubtitle: "Rencontrez les experts juridiques et technologiques derrière nos solutions d'immigration alimentées par l'IA",
        managingPartner: "Partenaire gérant et expert juridique",
        regionalCoordinator: "Coordinateur juridique régional",
        chiefTechnology: "Directeur de la technologie",
        aiResearch: "Directeur de la recherche en IA",

        // Team Member Details
        teamEyadTitle: "Juge Eyad Alsamhan",
        teamEyadDegree: "Ph.D | LL.M | B.A. (J.D.)",
        teamEyadRole: "Partenaire gérant et expert juridique",
        teamMuntahaTitle: "Avocate Muntaha Hijazi",
        teamMuntahaDegree: "Représentante locale en Jordanie",
        teamMuntahaRole: "Coordinatrice juridique régionale",
        teamMohammadTitle: "Mohammad Al Nobani",
        teamMohammadDegree: "Ingénieur logiciel et expert en IA",
        teamMohammadRole: "Directeur de la technologie",
        teamHaniTitle: "Hani Hijazi",
        teamHaniDegree: "Expert en IA et réseaux",
        teamHaniRole: "Directeur de la recherche en IA",

        // Services
        ourAIDrivenServices: "Nos services alimentés par l'IA",
        servicesSubtitle: "Autonomiser votre parcours EB2 NIW avec la technologie d'IA de pointe",
        servicesDescription: "Chez Smart E-Judge LLC, nous combinons la puissance de l'intelligence artificielle avec une expertise juridique inégalée pour rationaliser le processus de candidature EB2 National Interest Waiver (NIW).",
        ourImmigrationServices: "Nos services d'immigration",
        bookConsultationBtn: "Réserver une consultation",

        // Trust Section
        whyTrustUs: "Pourquoi faire confiance à Smart E-Judge LLC ?",
        getStartedToday: "Commencez aujourd'hui",

        // Testimonials
        whatOurClientsSay: "Ce que disent nos clients",
        testimonialsSubtitle: "Témoignages réels de candidats réussis",

        // FAQs
        frequentlyAskedQuestions: "Questions fréquemment posées",
        faqSubtitle: "Obtenez des réponses aux questions courantes sur nos services",

        // Contact
        contactUs: "Contactez-nous",
        contactSubtitle: "Initiez votre processus d'immigration nouvelle génération avec nous",
        contactDescription: "Découvrez les meilleures méthodes d'immigration, alimentées par l'IA et guidées par des sommités juridiques. Contactez-nous aujourd'hui !",
        getInTouch: "Entrez en contact",
        connectWithUs: "Connectez-vous avec nous",

        // Immigration Stories
        immigrationSuccessStories: "Histoires de réussite d'immigration",
        immigrationStoriesSubtitle: "De vraies personnes, de vraies histoires de réussite - célébrer le parcours de l'immigration",

        // Map Section
        visitOurOffice: "Visitez notre bureau",
        mapSubtitle: "Trouvez-nous au cœur du district commercial de l'Utah",

        // Footer
        smartEJudgeLLC: "Smart E-Judge LLC",
        footerDescription: "Diriger l'avenir des services d'immigration avec des solutions alimentées par l'IA et des conseils juridiques d'experts.",
        quickLinks: "Liens rapides",

        // Top Bar
        topTitle: "Bienvenue sur le site web du Juge Dr. Eyad Alsamhan – Le Meilleur Avocat d'Immigration Arabe aux États-Unis",

        // Statistics Labels
        statSuccessfulCases: "Cas réussis",
        statYearsExperience: "Années d'expérience",
        statAISupport: "Support IA",

        // Team Section
        teamAccreditation: "Accréditation et Reconnaissance",
        teamAccreditationSubtitle: "Fait confiance par les organisations juridiques de premier plan",

        // Trust Section
        trustInnovativeAI: "Expertise IA Innovante: Nos systèmes IA analysent les modèles d'applications réussies, améliorés par les insights juridiques profonds du Juge Alsamhan.",
        trustLegalMastery: "Maîtrise Juridique: Dirigé par le Juge Alsamhan, notre équipe possède une profondeur sans précédent dans les applications EB2 NIW.",
        trustEfficiency: "Efficacité et Précision: Mélanger les insights IA avec la prouesse juridique garantit des applications impeccables.",
        trustTransparent: "Processus Transparent: Obtenez des mises à jour IA en temps réel sur le statut de votre application et des insights de résultats prédictifs.",
        trustProven: "Antécédents Prouvés: Plus de 500 cas réussis avec un taux de réussite de 98%.",

        // Carousel Stories
        carouselFamilyReunification: "Réunification Familiale",
        carouselFamilyDescription: "Célébrer le moment où les familles sont réunies après des processus d'immigration réussis. Chaque sourire représente un rêve réalisé.",
        carouselAcademicAchievements: "Réalisations Académiques",
        carouselAcademicDescription: "Les étudiants réalisent leurs rêves grâce aux visas d'éducation et à l'excellence académique. La connaissance ne connaît pas de frontières.",
        carouselBusinessSuccess: "Succès de l'Immigration Commerciale",
        carouselBusinessDescription: "Les entrepreneurs construisent des entreprises prospères et contribuent à l'économie américaine par l'innovation et le travail acharné.",
        carouselCommunityBuilding: "Construction Communautaire",
        carouselCommunityDescription: "Les immigrants se réunissent pour construire des communautés fortes et dynamiques qui enrichissent la société et la culture américaines.",
        carouselCelebrationMoments: "Moments de Célébration",
        carouselCelebrationDescription: "Chaque cas d'immigration réussi est une raison de célébrer. Ces moments de joie et d'accomplissement nous inspirent à continuer notre mission.",

        // Carousel Stat Labels
        carouselStatFamilies: "Familles Réunies",
        carouselStatStudents: "Étudiants Placés avec Succès",
        carouselStatBusinesses: "Entreprises Établies",
        carouselStatLives: "Vies Transformées",
        carouselStatSuccessRate: "Taux de Réussite",

        // Service Descriptions
        serviceE2Visa: "Visa d'investisseur pour les entrepreneurs cherchant à démarrer ou acheter une entreprise aux États-Unis. Notre équipe d'experts s'assure que votre investissement répond à toutes les exigences et maximise vos chances d'approbation.",
        serviceEB1: "Pour les individus ayant une capacité extraordinaire dans les sciences, les arts, l'éducation, les affaires ou l'athlétisme. Nous aidons à mettre en valeur vos réalisations et à démontrer vos contributions exceptionnelles à votre domaine.",
        serviceEB2NIW: "Les professionnels diplômés et les individus ayant une capacité exceptionnelle peuvent contourner l'exigence de certification du travail. Notre analyse alimentée par l'IA optimise votre pétition pour un succès maximum.",
        servicePERM: "Processus de carte verte basé sur l'emploi nécessitant une certification du travail. Nous naviguons dans les exigences complexes et nous assurons la conformité avec les réglementations du Département du Travail.",

        // Map Section
        mapOurLocation: "Notre Emplacement",
        mapExactAddress: "Adresse exacte disponible sur consultation",
        mapGetDirections: "Obtenir les Directions",
        mapCallNow: "Appeler Maintenant",

        // FAQ Questions
        faqEB2NIW: "Qu'est-ce que EB2 NIW?",
        faqEB2NIWAnswer: "L'EB2 National Interest Waiver (NIW) est une catégorie d'immigration basée sur l'emploi, invitant les professionnels exceptionnels à poursuivre une carte verte américaine sans avoir besoin du parrainage de l'employeur, si cela s'aligne avec les intérêts américains.",
        faqAIJourney: "Comment l'IA affine-t-elle le parcours de candidature?",
        faqAIJourneyAnswer: "Nos outils IA analysent minutieusement les ensembles de données des candidatures réussies, fournissent des alertes pour les défis potentiels et renforcent les forces de candidature, toujours sous l'œil vigilant de l'expertise du Juge Alsamhan.",
        faqSuccessRate: "Quel est votre taux de réussite?",
        faqSuccessRateAnswer: "Nous maintenons un taux de réussite de 98% sur plus de 500 cas, grâce à notre combinaison de technologie IA et de conseils juridiques d'experts.",
        faqProcessTime: "Combien de temps dure le processus?",
        faqProcessTimeAnswer: "Le processus EB2 NIW typique prend 6-12 mois, mais notre approche alimentée par l'IA peut souvent accélérer certains aspects du processus de candidature.",
        faqVerification: "Pour Vérification: Veuillez cliquer ici pour vérifier les informations d'identification avec USCIS.",

        // Footer Links
        footerHome: "Accueil",
        footerOurTeam: "Notre Équipe",
        footerServices: "Services",
        footerContact: "Contact",
        footerCopyright: "© 2025 Smart E-Judge LLC. Tous droits réservés.",
        footerDisclaimer: "Ce site web est à des fins d'information uniquement et ne constitue pas un conseil juridique.",

        // Service Titles
        serviceE2VisaTitle: "Visa E2",
        serviceEB1Title: "Visa EB1",
        serviceEB2NIWTitle: "Visa EB2-NIW",
        servicePERMTitle: "Certification PERM",

        // Service Descriptions Short
        serviceE2VisaShort: "Assistance pour obtenir le visa d'investisseur E2 pour les entrepreneurs et investisseurs cherchant à établir une entreprise aux États-Unis.",
        serviceEB1Short: "Conseils d'experts pour le visa EB1, conçu pour les individus ayant une capacité extraordinaire dans leurs domaines professionnels.",
        serviceEB2NIWShort: "Soutien pour les pétitions EB2-NIW, idéal pour les professionnels ayant des diplômes avancés ou une capacité exceptionnelle contribuant à l'intérêt national américain.",
        servicePERMShort: "Assistance complète avec le processus de certification du travail PERM, une étape clé pour les demandes de carte verte basées sur l'emploi.",

        // Testimonials
        testimonialHani: "Sous la puissance combinée de l'expertise du Juge Alsamhan et de l'IA, mon processus de candidature était un jeu d'enfant. Smart E-Judge mène une nouvelle vague dans l'immigration !",
        testimonialMohammad: "Le mélange d'expertise technique et juridique est simplement stupéfiant. L'avenir de l'immigration est ici !",
        testimonialSarah: "L'approche alimentée par l'IA a rendu mon processus de candidature incroyablement fluide et efficace. Très recommandé !",
        testimonialAhmed: "Professionnel, efficace et innovant. Smart E-Judge représente vraiment l'avenir des services juridiques.",

        // Testimonial Authors
        authorHani: "Hani Hijazi, expert en IA et réseaux",
        authorMohammad: "Mohammad Alnobani, ingénieur logiciel et expert en IA",
        authorSarah: "Dr. Sarah Johnson, scientifique chercheuse",
        authorAhmed: "Dr. Ahmed Hassan, chercheur médical",

        // Modal Titles
        modalEyadTitle: "Juge Eyad Alsamhan",
        modalMuntahaTitle: "Avocate Muntaha Hijazi",
        modalMohammadTitle: "Mohammad Al Nobani",
        modalHaniTitle: "Hani Hijazi",

        // Modal Content
        modalEyadRole: "Partenaire gérant et expert juridique",
        modalMuntahaRole: "Coordinatrice juridique régionale",
        modalMohammadRole: "Directeur de la technologie",
        modalHaniRole: "Directeur de la recherche en IA",

        modalEyadDescription: "Le Juge Eyad Alsamhan apporte plus de 15 ans d'expertise juridique en droit de l'immigration, se spécialisant dans les applications EB2 NIW. Sa compréhension approfondie des cadres juridiques et de l'innovation technologique en fait un pionnier des services juridiques améliorés par l'IA.",
        modalMuntahaDescription: "L'Avocate Muntaha Hijazi sert de coordinatrice juridique régionale, fournissant expertise locale et soutien aux clients de la région du Moyen-Orient. Sa compréhension approfondie des cadres juridiques locaux et internationaux assure une prestation de service transparente.",
        modalMohammadDescription: "Mohammad Al Nobani dirige notre innovation technologique, développant des solutions d'IA de pointe qui révolutionnent le processus de candidature à l'immigration. Son expertise en apprentissage automatique et ingénierie logicielle pilote nos services alimentés par l'IA.",
        modalHaniDescription: "Hani Hijazi se spécialise dans le traitement du langage naturel et l'IA de réseau, développant des algorithmes sophistiqués qui analysent les documents juridiques et prédisent les résultats des candidatures avec une précision remarquable.",

        // Modal Lists
        modalEyadList1: "Plus de 15 ans d'expérience en droit de l'immigration",
        modalEyadList2: "Expert en applications EB2 NIW",
        modalEyadList3: "Pionnier des services juridiques améliorés par l'IA",
        modalEyadList4: "Autorité juridique reconnue dans le domaine",

        modalMuntahaList1: "Expertise juridique régionale",
        modalMuntahaList2: "Soutien client local",
        modalMuntahaList3: "Coordination juridique internationale",
        modalMuntahaList4: "Services juridiques multilingues",

        modalMohammadList1: "Expert en IA et apprentissage automatique",
        modalMohammadList2: "Leadership en ingénierie logicielle",
        modalMohammadList3: "Innovation en technologie juridique",
        modalMohammadList4: "Conception d'architecture système",

        modalHaniList1: "Expert en traitement du langage naturel",
        modalHaniList2: "Développement d'IA de réseau",
        modalHaniList3: "Analytique prédictive",
        modalHaniList4: "Systèmes d'analyse de documents"
    },

    es: {
        // Navigation
        home: "Inicio",
        team: "Equipo",
        trust: "Confianza",
        services: "Servicios",
        testimonials: "Reseñas",
        faqs: "Preguntas frecuentes",
        map: "Ubicación",
        contact: "Contacto",

        // Hero Section
        heroTitle: "¿Buscas un abogado de inmigración que te tranquilice?",
        heroSubtitle: "Dr. Ayad Al-Samhan es el mejor abogado árabe-estadounidense de inmigración y negocios con más de 15 años de experiencia.",
        bookConsultation: "Reservar consulta",
        learnMore: "Saber más",

        // Hero Badge and Features
        heroBadge: "Servicios de Inmigración Profesionales",
        heroFeature1: "98% Tasa de Éxito",
        heroFeature2: "Soluciones Impulsadas por IA",
        heroFeature3: "Equipo Legal Experto",

        // Statistics
        successfulCases: "Casos exitosos",
        successRate: "Tasa de éxito %",
        yearsExperience: "Años de experiencia",
        aiPoweredHours: "Horas con IA",

        // Team Section
        ourExpertTeam: "Nuestro equipo de expertos",
        teamSubtitle: "Conoce a los expertos legales y tecnológicos detrás de nuestras soluciones de inmigración impulsadas por IA",
        managingPartner: "Socio gerente y experto legal",
        regionalCoordinator: "Coordinador legal regional",
        chiefTechnology: "Director de tecnología",
        aiResearch: "Director de investigación en IA",

        // Team Member Details
        teamEyadTitle: "Juez Eyad Alsamhan",
        teamEyadDegree: "Ph.D | LL.M | B.A. (J.D.)",
        teamEyadRole: "Socio gerente y experto legal",
        teamMuntahaTitle: "Abogada Muntaha Hijazi",
        teamMuntahaDegree: "Representante local en Jordania",
        teamMuntahaRole: "Coordinadora legal regional",
        teamMohammadTitle: "Mohammad Al Nobani",
        teamMohammadDegree: "Ingeniero de software y experto en IA",
        teamMohammadRole: "Director de tecnología",
        teamHaniTitle: "Hani Hijazi",
        teamHaniDegree: "Experto en IA y redes",
        teamHaniRole: "Director de investigación en IA",

        // Services
        ourAIDrivenServices: "Nuestros servicios impulsados por IA",
        servicesSubtitle: "Potenciando tu viaje EB2 NIW con tecnología de IA de vanguardia",
        servicesDescription: "En Smart E-Judge LLC, combinamos el poder de la inteligencia artificial con experiencia legal inigualable para agilizar el proceso de solicitud EB2 National Interest Waiver (NIW).",
        ourImmigrationServices: "Nuestros servicios de inmigración",
        bookConsultationBtn: "Reservar consulta",

        // Trust Section
        whyTrustUs: "¿Por qué confiar en Smart E-Judge LLC?",
        getStartedToday: "Comienza hoy",

        // Testimonials
        whatOurClientsSay: "Lo que dicen nuestros clientes",
        testimonialsSubtitle: "Testimonios reales de solicitantes exitosos",

        // FAQs
        frequentlyAskedQuestions: "Preguntas frecuentes",
        faqSubtitle: "Obtén respuestas a preguntas comunes sobre nuestros servicios",

        // Contact
        contactUs: "Contáctanos",
        contactSubtitle: "Inicia tu proceso de inmigración de próxima generación con nosotros",
        contactDescription: "Descubre los mejores métodos de inmigración, impulsados por IA y guiados por lumbreras legales. ¡Contáctanos hoy!",
        getInTouch: "Ponte en contacto",
        connectWithUs: "Conéctate con nosotros",

        // Immigration Stories
        immigrationSuccessStories: "Historias de éxito de inmigración",
        immigrationStoriesSubtitle: "Personas reales, historias reales de éxito - celebrando el viaje de la inmigración",

        // Map Section
        visitOurOffice: "Visita nuestra oficina",
        mapSubtitle: "Encuéntranos en el corazón del distrito comercial de Utah",

        // Footer
        smartEJudgeLLC: "Smart E-Judge LLC",
        footerDescription: "Liderando el futuro de los servicios de inmigración con soluciones impulsadas por IA y orientación legal experta.",
        quickLinks: "Enlaces rápidos",

        // Top Bar
        topTitle: "Bienvenido al sitio web del Juez Dr. Eyad Alsamhan – El Mejor Abogado de Inmigración Árabe en los Estados Unidos",

        // Statistics Labels
        statSuccessfulCases: "Casos exitosos",
        statYearsExperience: "Años de experiencia",
        statAISupport: "Soporte de IA",

        // Team Section
        teamAccreditation: "Acreditación y Reconocimiento",
        teamAccreditationSubtitle: "Confiado por las principales organizaciones legales",

        // Trust Section
        trustInnovativeAI: "Experiencia IA Innovadora: Nuestros sistemas IA analizan patrones de aplicaciones exitosas, mejorados por las profundas perspectivas legales del Juez Alsamhan.",
        trustLegalMastery: "Maestría Legal: Dirigido por el Juez Alsamhan, nuestro equipo posee una profundidad sin precedentes en aplicaciones EB2 NIW.",
        trustEfficiency: "Eficiencia y Precisión: Combinar perspectivas de IA con destreza legal garantiza aplicaciones impecables.",
        trustTransparent: "Proceso Transparente: Obtén actualizaciones de IA en tiempo real sobre el estado de tu aplicación y perspectivas de resultados predictivos.",
        trustProven: "Récord Comprobado: Más de 500 casos exitosos con una tasa de éxito del 98%.",

        // Carousel Stories
        carouselFamilyReunification: "Reunificación Familiar",
        carouselFamilyDescription: "Celebrando el momento cuando las familias se reúnen después de procesos de inmigración exitosos. Cada sonrisa representa un sueño hecho realidad.",
        carouselAcademicAchievements: "Logros Académicos",
        carouselAcademicDescription: "Los estudiantes logran sus sueños a través de visas educativas y excelencia académica. El conocimiento no conoce fronteras.",
        carouselBusinessSuccess: "Éxito de Inmigración Comercial",
        carouselBusinessDescription: "Los emprendedores construyen negocios exitosos y contribuyen a la economía estadounidense a través de la innovación y el trabajo duro.",
        carouselCommunityBuilding: "Construcción Comunitaria",
        carouselCommunityDescription: "Los inmigrantes se unen para construir comunidades fuertes y vibrantes que enriquecen la sociedad y cultura estadounidense.",
        carouselCelebrationMoments: "Momentos de Celebración",
        carouselCelebrationDescription: "Cada caso de inmigración exitoso es una razón para celebrar. Estos momentos de alegría y logro nos inspiran a continuar nuestra misión.",

        // Carousel Stat Labels
        carouselStatFamilies: "Familias Reunidas",
        carouselStatStudents: "Estudiantes Colocados Exitosamente",
        carouselStatBusinesses: "Negocios Establecidos",
        carouselStatLives: "Vidas Transformadas",
        carouselStatSuccessRate: "Tasa de Éxito",

        // Service Descriptions
        serviceE2Visa: "Visa de inversionista para emprendedores que buscan iniciar o comprar un negocio en los Estados Unidos. Nuestro equipo experto asegura que su inversión cumpla con todos los requisitos y maximice sus posibilidades de aprobación.",
        serviceEB1: "Para individuos con habilidad extraordinaria en ciencias, artes, educación, negocios o atletismo. Ayudamos a mostrar sus logros y demostrar sus contribuciones excepcionales a su campo.",
        serviceEB2NIW: "Los profesionales con títulos avanzados y individuos con habilidad excepcional pueden evitar el requisito de certificación laboral. Nuestro análisis impulsado por IA optimiza su petición para el máximo éxito.",
        servicePERM: "Proceso de tarjeta verde basado en empleo que requiere certificación laboral. Navegamos los requisitos complejos y aseguramos cumplimiento con las regulaciones del Departamento de Trabajo.",

        // Map Section
        mapOurLocation: "Nuestra Ubicación",
        mapExactAddress: "Dirección exacta disponible con consulta",
        mapGetDirections: "Obtener Direcciones",
        mapCallNow: "Llamar Ahora",

        // FAQ Questions
        faqEB2NIW: "¿Qué es EB2 NIW?",
        faqEB2NIWAnswer: "El EB2 National Interest Waiver (NIW) es una categoría de inmigración basada en empleo, invitando a profesionales excepcionales a perseguir una tarjeta verde estadounidense sin necesidad de patrocinio del empleador, si se alinea con los intereses estadounidenses.",
        faqAIJourney: "¿Cómo refina la IA el viaje de aplicación?",
        faqAIJourneyAnswer: "Nuestras herramientas de IA analizan exhaustivamente conjuntos de datos de aplicaciones exitosas, proporcionan alertas para desafíos potenciales y fortalecen las fortalezas de aplicación, siempre bajo la atenta mirada de la experiencia del Juez Alsamhan.",
        faqSuccessRate: "¿Cuál es su tasa de éxito?",
        faqSuccessRateAnswer: "Mantenemos una tasa de éxito del 98% en más de 500 casos, gracias a nuestra combinación de tecnología de IA y orientación legal experta.",
        faqProcessTime: "¿Cuánto tiempo toma el proceso?",
        faqProcessTimeAnswer: "El proceso típico de EB2 NIW toma 6-12 meses, pero nuestro enfoque impulsado por IA a menudo puede acelerar ciertos aspectos del proceso de aplicación.",
        faqVerification: "Para Verificación: Por favor haga clic aquí para verificar credenciales con USCIS.",

        // Footer Links
        footerHome: "Inicio",
        footerOurTeam: "Nuestro Equipo",
        footerServices: "Servicios",
        footerContact: "Contacto",
        footerCopyright: "© 2025 Smart E-Judge LLC. Todos los derechos reservados.",
        footerDisclaimer: "Este sitio web es solo para fines informativos y no constituye asesoramiento legal.",

        // Service Titles
        serviceE2VisaTitle: "Visa E2",
        serviceEB1Title: "Visa EB1",
        serviceEB2NIWTitle: "Visa EB2-NIW",
        servicePERMTitle: "Certificación PERM",

        // Service Descriptions Short
        serviceE2VisaShort: "Asistencia para obtener la visa de inversionista E2 para emprendedores e inversionistas que buscan establecer un negocio en los Estados Unidos.",
        serviceEB1Short: "Orientación experta para la visa EB1, diseñada para individuos con habilidad extraordinaria en sus campos profesionales.",
        serviceEB2NIWShort: "Apoyo para peticiones EB2-NIW, ideal para profesionales con títulos avanzados o habilidad excepcional contribuyendo al interés nacional estadounidense.",
        servicePERMShort: "Asistencia completa con el proceso de certificación laboral PERM, un paso clave para aplicaciones de tarjeta verde basadas en empleo.",

        // Testimonials
        testimonialHani: "Bajo el poder combinado de la experiencia del Juez Alsamhan y la IA, mi proceso de aplicación fue muy fácil. ¡Smart E-Judge está liderando una nueva ola en inmigración!",
        testimonialMohammad: "La fusión de experiencia técnica y legal es simplemente asombrosa. ¡El futuro de la inmigración está aquí!",
        testimonialSarah: "El enfoque impulsado por IA hizo que mi proceso de aplicación fuera increíblemente suave y eficiente. ¡Altamente recomendado!",
        testimonialAhmed: "Profesional, eficiente e innovador. Smart E-Judge realmente representa el futuro de los servicios legales.",

        // Testimonial Authors
        authorHani: "Hani Hijazi, experto en IA y redes",
        authorMohammad: "Mohammad Alnobani, ingeniero de software y experto en IA",
        authorSarah: "Dra. Sarah Johnson, científica investigadora",
        authorAhmed: "Dr. Ahmed Hassan, investigador médico",

        // Modal Titles
        modalEyadTitle: "Juez Eyad Alsamhan",
        modalMuntahaTitle: "Abogada Muntaha Hijazi",
        modalMohammadTitle: "Mohammad Al Nobani",
        modalHaniTitle: "Hani Hijazi",

        // Modal Content
        modalEyadRole: "Socio gerente y experto legal",
        modalMuntahaRole: "Coordinadora legal regional",
        modalMohammadRole: "Director de tecnología",
        modalHaniRole: "Director de investigación en IA",

        modalEyadDescription: "El Juez Eyad Alsamhan aporta más de 15 años de experiencia legal en derecho de inmigración, especializándose en aplicaciones EB2 NIW. Su profunda comprensión de los marcos legales y la innovación tecnológica lo convierte en un pionero de los servicios legales mejorados por IA.",
        modalMuntahaDescription: "La Abogada Muntaha Hijazi sirve como nuestra coordinadora legal regional, proporcionando experiencia local y apoyo a clientes en la región del Medio Oriente. Su profunda comprensión de los marcos legales locales e internacionales asegura una prestación de servicios transparente.",
        modalMohammadDescription: "Mohammad Al Nobani lidera nuestra innovación tecnológica, desarrollando soluciones de IA de vanguardia que revolucionan el proceso de aplicación de inmigración. Su experiencia en aprendizaje automático e ingeniería de software impulsa nuestros servicios alimentados por IA.",
        modalHaniDescription: "Hani Hijazi se especializa en procesamiento de lenguaje natural e IA de red, desarrollando algoritmos sofisticados que analizan documentos legales y predicen resultados de aplicaciones con precisión notable.",

        // Modal Lists
        modalEyadList1: "Más de 15 años de experiencia en derecho de inmigración",
        modalEyadList2: "Experto en aplicaciones EB2 NIW",
        modalEyadList3: "Pionero en servicios legales mejorados por IA",
        modalEyadList4: "Autoridad legal reconocida en el campo",

        modalMuntahaList1: "Experiencia legal regional",
        modalMuntahaList2: "Apoyo al cliente local",
        modalMuntahaList3: "Coordinación legal internacional",
        modalMuntahaList4: "Servicios legales multilingües",

        modalMohammadList1: "Experto en IA y aprendizaje automático",
        modalMohammadList2: "Liderazgo en ingeniería de software",
        modalMohammadList3: "Innovación en tecnología legal",
        modalMohammadList4: "Diseño de arquitectura de sistema",

        modalHaniList1: "Experto en procesamiento de lenguaje natural",
        modalHaniList2: "Desarrollo de IA de red",
        modalHaniList3: "Analítica predictiva",
        modalHaniList4: "Sistemas de análisis de documentos"
    },

    fa: {
        // Navigation
        home: "خانه",
        team: "تیم",
        trust: "اعتماد",
        services: "خدمات",
        testimonials: "نظرات",
        faqs: "سوالات متداول",
        map: "موقعیت",
        contact: "تماس",

        // Hero Section
        heroTitle: "آیا به دنبال وکیل مهاجرت هستید که ذهن شما را آرام کند؟",
        heroSubtitle: "دکتر ایاد السمحان بهترین وکیل مهاجرت و تجارت عرب-آمریکایی با بیش از 15 سال تجربه است.",
        bookConsultation: "رزرو مشاوره",
        learnMore: "بیشتر بدانید",

        // Hero Badge and Features
        heroBadge: "خدمات مهاجرت حرفه‌ای",
        heroFeature1: "98% نرخ موفقیت",
        heroFeature2: "راه‌حل‌های مبتنی بر هوش مصنوعی",
        heroFeature3: "تیم حقوقی متخصص",

        // Statistics
        successfulCases: "موارد موفق",
        successRate: "نرخ موفقیت %",
        yearsExperience: "سال‌های تجربه",
        aiPoweredHours: "ساعت‌های هوش مصنوعی",

        // Team Section
        ourExpertTeam: "تیم متخصصان ما",
        teamSubtitle: "با کارشناسان حقوقی و فناوری پشت راه‌حل‌های مهاجرت مبتنی بر هوش مصنوعی آشنا شوید",
        managingPartner: "شریک مدیریتی و کارشناس حقوقی",
        regionalCoordinator: "هماهنگ‌کننده حقوقی منطقه‌ای",
        chiefTechnology: "مدیر فناوری",
        aiResearch: "مدیر تحقیقات هوش مصنوعی",

        // Team Member Details
        teamEyadTitle: "قاضی ایاد السمحان",
        teamEyadDegree: "دکترا | کارشناسی ارشد حقوق | کارشناسی (دکترای حقوق)",
        teamEyadRole: "شریک مدیریتی و کارشناس حقوقی",
        teamMuntahaTitle: "وکیل منتهی حجازی",
        teamMuntahaDegree: "نماینده محلی در اردن",
        teamMuntahaRole: "هماهنگ‌کننده حقوقی منطقه‌ای",
        teamMohammadTitle: "محمد النوبانی",
        teamMohammadDegree: "مهندس نرم‌افزار و کارشناس هوش مصنوعی",
        teamMohammadRole: "مدیر فناوری",
        teamHaniTitle: "هانی حجازی",
        teamHaniDegree: "کارشناس هوش مصنوعی و شبکه‌ها",
        teamHaniRole: "مدیر تحقیقات هوش مصنوعی",

        // Services
        ourAIDrivenServices: "خدمات مبتنی بر هوش مصنوعی ما",
        servicesSubtitle: "توانمندسازی سفر EB2 NIW شما با فناوری پیشرفته هوش مصنوعی",
        servicesDescription: "در Smart E-Judge LLC، ما قدرت هوش مصنوعی را با تخصص حقوقی بی‌نظیر ترکیب می‌کنیم تا فرآیند درخواست EB2 National Interest Waiver (NIW) را ساده کنیم.",
        ourImmigrationServices: "خدمات مهاجرت ما",
        bookConsultationBtn: "رزرو مشاوره",

        // Trust Section
        whyTrustUs: "چرا به Smart E-Judge LLC اعتماد کنیم؟",
        getStartedToday: "امروز شروع کنید",

        // Testimonials
        whatOurClientsSay: "مشتریان ما چه می‌گویند",
        testimonialsSubtitle: "نظرات واقعی از متقاضیان موفق",

        // FAQs
        frequentlyAskedQuestions: "سوالات متداول",
        faqSubtitle: "پاسخ سوالات رایج درباره خدمات ما را دریافت کنید",

        // Contact
        contactUs: "با ما تماس بگیرید",
        contactSubtitle: "فرآیند مهاجرت نسل بعدی خود را با ما آغاز کنید",
        contactDescription: "بهترین روش‌های مهاجرت را کشف کنید، که توسط هوش مصنوعی هدایت می‌شوند و توسط کارشناسان حقوقی راهنمایی می‌شوند. امروز با ما تماس بگیرید!",
        getInTouch: "با ما در تماس باشید",
        connectWithUs: "با ما در ارتباط باشید",

        // Immigration Stories
        immigrationSuccessStories: "داستان‌های موفقیت مهاجرت",
        immigrationStoriesSubtitle: "افراد واقعی، داستان‌های واقعی موفقیت - جشن گرفتن سفر مهاجرت",

        // Map Section
        visitOurOffice: "دفتر ما را ببینید",
        mapSubtitle: "ما را در قلب منطقه تجاری یوتا پیدا کنید",

        // Footer
        smartEJudgeLLC: "Smart E-Judge LLC",
        footerDescription: "رهبری آینده خدمات مهاجرت با راه‌حل‌های مبتنی بر هوش مصنوعی و راهنمایی حقوقی متخصص.",
        quickLinks: "لینک‌های سریع",

        // Top Bar
        topTitle: "به وب‌سایت قاضی دکتر ایاد السمحان خوش آمدید – بهترین وکیل مهاجرت عرب در ایالات متحده",

        // Statistics Labels
        statSuccessfulCases: "موارد موفق",
        statYearsExperience: "سال‌های تجربه",
        statAISupport: "پشتیبانی هوش مصنوعی",

        // Team Section
        teamAccreditation: "اعتباربخشی و شناخت",
        teamAccreditationSubtitle: "مورد اعتماد سازمان‌های حقوقی پیشرو",

        // Trust Section
        trustInnovativeAI: "تخصص هوش مصنوعی نوآورانه: سیستم‌های هوش مصنوعی ما الگوهای درخواست‌های موفق را تحلیل می‌کنند، که با بینش‌های حقوقی عمیق قاضی السمحان تقویت شده‌اند.",
        trustLegalMastery: "استادی حقوقی: تحت رهبری قاضی السمحان، تیم ما عمق بی‌سابقه‌ای در درخواست‌های EB2 NIW دارد.",
        trustEfficiency: "کارایی و دقت: ترکیب بینش‌های هوش مصنوعی با مهارت حقوقی، درخواست‌های بی‌نقص را تضمین می‌کند.",
        trustTransparent: "فرآیند شفاف: به‌روزرسانی‌های هوش مصنوعی در زمان واقعی درباره وضعیت درخواست شما و بینش‌های نتیجه پیش‌بینی‌کننده دریافت کنید.",
        trustProven: "سابقه اثبات شده: بیش از 500 مورد موفق با نرخ موفقیت 98%.",

        // Carousel Stories
        carouselFamilyReunification: "بازگرداندن خانواده",
        carouselFamilyDescription: "جشن گرفتن لحظه‌ای که خانواده‌ها پس از فرآیندهای مهاجرت موفق دوباره متحد می‌شوند. هر لبخند نمایانگر رویایی محقق شده است.",
        carouselAcademicAchievements: "دستاوردهای تحصیلی",
        carouselAcademicDescription: "دانشجویان از طریق ویزاهای تحصیلی و برتری تحصیلی به رویاهای خود دست می‌یابند. دانش مرزی نمی‌شناسد.",
        carouselBusinessSuccess: "موفقیت مهاجرت تجاری",
        carouselBusinessDescription: "کارآفرینان کسب‌وکارهای موفق می‌سازند و از طریق نوآوری و کار سخت به اقتصاد آمریکا کمک می‌کنند.",
        carouselCommunityBuilding: "ساختن جامعه",
        carouselCommunityDescription: "مهاجران برای ساختن جوامع قوی و پویا که جامعه و فرهنگ آمریکایی را غنی می‌کنند، گرد هم می‌آیند.",
        carouselCelebrationMoments: "لحظات جشن",
        carouselCelebrationDescription: "هر مورد مهاجرت موفق دلیلی برای جشن گرفتن است. این لحظات شادی و دستاورد ما را برای ادامه ماموریت‌مان الهام می‌دهد.",

        // Carousel Stat Labels
        carouselStatFamilies: "خانواده‌های متحد",
        carouselStatStudents: "دانشجویان با موفقیت استخدام شده",
        carouselStatBusinesses: "کسب‌وکارهای تاسیس شده",
        carouselStatLives: "زندگی‌های تغییر یافته",
        carouselStatSuccessRate: "نرخ موفقیت",

        // Service Descriptions
        serviceE2Visa: "ویزای سرمایه‌گذار برای کارآفرینانی که می‌خواهند کسب‌وکاری را در ایالات متحده شروع یا خریداری کنند. تیم متخصص ما اطمینان حاصل می‌کند که سرمایه‌گذاری شما تمام الزامات را برآورده کند و شانس تایید شما را به حداکثر برساند.",
        serviceEB1: "برای افرادی با توانایی فوق‌العاده در علوم، هنرها، آموزش، تجارت یا ورزش. ما کمک می‌کنیم تا دستاوردهای شما را به نمایش بگذاریم و مشارکت‌های استثنایی شما را در زمینه‌تان نشان دهیم.",
        serviceEB2NIW: "متخصصان دارای مدرک پیشرفته و افراد دارای توانایی استثنایی می‌توانند نیاز به گواهی کار را دور بزنند. تحلیل مبتنی بر هوش مصنوعی ما درخواست شما را برای حداکثر موفقیت بهینه می‌کند.",
        servicePERM: "فرآیند کارت سبز مبتنی بر اشتغال که نیاز به گواهی کار دارد. ما در الزامات پیچیده حرکت می‌کنیم و از انطباق با مقررات وزارت کار اطمینان حاصل می‌کنیم.",

        // Map Section
        mapOurLocation: "موقعیت ما",
        mapExactAddress: "آدرس دقیق با مشاوره در دسترس است",
        mapGetDirections: "دریافت مسیرها",
        mapCallNow: "الان تماس بگیرید",

        // FAQ Questions
        faqEB2NIW: "EB2 NIW چیست؟",
        faqEB2NIWAnswer: "EB2 National Interest Waiver (NIW) یک دسته مهاجرت مبتنی بر اشتغال است که متخصصان استثنایی را دعوت می‌کند تا کارت سبز آمریکایی را بدون نیاز به حمایت کارفرما دنبال کنند، اگر با منافع آمریکا همسو باشد.",
        faqAIJourney: "هوش مصنوعی چگونه سفر درخواست را بهبود می‌دهد؟",
        faqAIJourneyAnswer: "ابزارهای هوش مصنوعی ما مجموعه‌های داده درخواست‌های موفق را به طور کامل تحلیل می‌کنند، هشدارهایی برای چالش‌های بالقوه ارائه می‌دهند و نقاط قوت درخواست را تقویت می‌کنند، همیشه تحت نظارت دقیق تخصص قاضی السمحان.",
        faqSuccessRate: "نرخ موفقیت شما چیست؟",
        faqSuccessRateAnswer: "ما نرخ موفقیت 98% را در بیش از 500 مورد حفظ می‌کنیم، به لطف ترکیب فناوری هوش مصنوعی و راهنمایی حقوقی متخصص.",
        faqProcessTime: "فرآیند چقدر طول می‌کشد؟",
        faqProcessTimeAnswer: "فرآیند معمولی EB2 NIW 6-12 ماه طول می‌کشد، اما رویکرد مبتنی بر هوش مصنوعی ما اغلب می‌تواند جنبه‌های خاصی از فرآیند درخواست را تسریع کند.",
        faqVerification: "برای تایید: لطفاً اینجا کلیک کنید تا اعتبارنامه‌ها را با USCIS تایید کنید.",

        // Footer Links
        footerHome: "خانه",
        footerOurTeam: "تیم ما",
        footerServices: "خدمات",
        footerContact: "تماس",
        footerCopyright: "© 2025 Smart E-Judge LLC. تمام حقوق محفوظ است.",
        footerDisclaimer: "این وب‌سایت فقط برای اهداف اطلاعاتی است و مشاوره حقوقی محسوب نمی‌شود.",

        // Service Titles
        serviceE2VisaTitle: "ویزای E2",
        serviceEB1Title: "ویزای EB1",
        serviceEB2NIWTitle: "ویزای EB2-NIW",
        servicePERMTitle: "گواهی PERM",

        // Service Descriptions Short
        serviceE2VisaShort: "کمک برای دریافت ویزای سرمایه‌گذار E2 برای کارآفرینان و سرمایه‌گذارانی که می‌خواهند کسب‌وکاری را در ایالات متحده تأسیس کنند.",
        serviceEB1Short: "راهنمایی متخصص برای ویزای EB1، طراحی شده برای افرادی با توانایی فوق‌العاده در زمینه‌های حرفه‌ای خود.",
        serviceEB2NIWShort: "حمایت از درخواست‌های EB2-NIW، ایده‌آل برای متخصصان دارای مدارک پیشرفته یا توانایی استثنایی که به منافع ملی آمریکا کمک می‌کنند.",
        servicePERMShort: "کمک کامل با فرآیند گواهی کار PERM، یک گام کلیدی برای درخواست‌های کارت سبز مبتنی بر اشتغال.",

        // Testimonials
        testimonialHani: "تحت قدرت ترکیبی تخصص قاضی السمحان و هوش مصنوعی، فرآیند درخواست من بسیار آسان بود. Smart E-Judge موج جدیدی در مهاجرت رهبری می‌کند!",
        testimonialMohammad: "ترکیب تخصص فنی و حقوقی به سادگی شگفت‌انگیز است. آینده مهاجرت اینجا است!",
        testimonialSarah: "رویکرد مبتنی بر هوش مصنوعی فرآیند درخواست من را به طرز باورنکردنی نرم و کارآمد کرد. بسیار توصیه می‌شود!",
        testimonialAhmed: "حرفه‌ای، کارآمد و نوآورانه. Smart E-Judge واقعاً نماینده آینده خدمات حقوقی است.",

        // Testimonial Authors
        authorHani: "هانی حجازی، متخصص هوش مصنوعی و شبکه‌ها",
        authorMohammad: "محمد النوبانی، مهندس نرم‌افزار و متخصص هوش مصنوعی",
        authorSarah: "دکتر سارا جانسون، دانشمند محقق",
        authorAhmed: "دکتر احمد حسن، محقق پزشکی",

        // Modal Titles
        modalEyadTitle: "قاضی ایاد السمحان",
        modalMuntahaTitle: "وکیل منتهی حجازی",
        modalMohammadTitle: "محمد النوبانی",
        modalHaniTitle: "هانی حجازی",

        // Modal Content
        modalEyadRole: "شریک مدیریتی و متخصص حقوقی",
        modalMuntahaRole: "هماهنگ‌کننده حقوقی منطقه‌ای",
        modalMohammadRole: "مدیر فناوری",
        modalHaniRole: "مدیر تحقیقات هوش مصنوعی",

        modalEyadDescription: "قاضی ایاد السمحان بیش از 15 سال تخصص حقوقی در قانون مهاجرت را به همراه می‌آورد، متخصص در درخواست‌های EB2 NIW. درک عمیق او از چارچوب‌های حقوقی و نوآوری تکنولوژیکی او را به یک پیشگام در خدمات حقوقی تقویت شده با هوش مصنوعی تبدیل می‌کند.",
        modalMuntahaDescription: "وکیل منتهی حجازی به عنوان هماهنگ‌کننده حقوقی منطقه‌ای ما خدمت می‌کند، تخصص محلی و پشتیبانی را برای مشتریان در منطقه خاورمیانه فراهم می‌کند. درک عمیق او از چارچوب‌های حقوقی محلی و بین‌المللی، ارائه خدمات بی‌نقص را تضمین می‌کند.",
        modalMohammadDescription: "محمد النوبانی نوآوری تکنولوژیکی ما را رهبری می‌کند، راه‌حل‌های هوش مصنوعی پیشرفته‌ای را توسعه می‌دهد که فرآیند درخواست مهاجرت را انقلابی می‌کند. تخصص او در یادگیری ماشین و مهندسی نرم‌افزار، خدمات مبتنی بر هوش مصنوعی ما را هدایت می‌کند.",
        modalHaniDescription: "هانی حجازی در پردازش زبان طبیعی و هوش مصنوعی شبکه تخصص دارد، الگوریتم‌های پیچیده‌ای را توسعه می‌دهد که اسناد حقوقی را تحلیل می‌کنند و نتایج درخواست‌ها را با دقت قابل توجه پیش‌بینی می‌کنند.",

        // Modal Lists
        modalEyadList1: "بیش از 15 سال تجربه در قانون مهاجرت",
        modalEyadList2: "متخصص در درخواست‌های EB2 NIW",
        modalEyadList3: "پیشگام در خدمات حقوقی تقویت شده با هوش مصنوعی",
        modalEyadList4: "مرجع حقوقی شناخته شده در زمینه",

        modalMuntahaList1: "تخصص حقوقی منطقه‌ای",
        modalMuntahaList2: "پشتیبانی از مشتریان محلی",
        modalMuntahaList3: "هماهنگی حقوقی بین‌المللی",
        modalMuntahaList4: "خدمات حقوقی چندزبانه",

        modalMohammadList1: "متخصص هوش مصنوعی و یادگیری ماشین",
        modalMohammadList2: "رهبری مهندسی نرم‌افزار",
        modalMohammadList3: "نوآوری در فناوری حقوقی",
        modalMohammadList4: "طراحی معماری سیستم",

        modalHaniList1: "متخصص پردازش زبان طبیعی",
        modalHaniList2: "توسعه هوش مصنوعی شبکه",
        modalHaniList3: "تحلیلات پیش‌بینی‌کننده",
        modalHaniList4: "سیستم‌های تحلیل اسناد"
    }
};

// Current language
let currentLang = 'en';

// Function to change language
function changeLanguage(lang) {
    currentLang = lang;
    const langData = languages[lang];

    // Update navigation
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (langData[key]) {
            element.textContent = langData[key];
        }
    });

    // Update current language display
    const currentLangElement = document.getElementById('currentLanguage');
    if (currentLangElement) {
        currentLangElement.textContent = langData[lang] || 'English';
    }

    // Update all text elements with data attributes
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (langData[key]) {
            element.textContent = langData[key];
            console.log(`Updated ${key}: ${langData[key]}`); // Debug log
        } else {
            console.log(`Missing translation for key: ${key}`); // Debug log
        }
    });

    // Debug: Log all hero elements
    console.log('Hero elements found:', document.querySelectorAll('[data-translate]').length);
    document.querySelectorAll('[data-translate]').forEach(element => {
        console.log(`Element with data-translate="${element.getAttribute('data-translate')}":`, element.textContent);
    });

    // Debug: Log specific hero elements
    console.log('Hero title element:', document.querySelector('.hero-title'));
    console.log('Hero subtitle element:', document.querySelector('.hero-subtitle'));
    console.log('Hero badge element:', document.querySelector('.hero-badge span'));
    console.log('Hero features elements:', document.querySelectorAll('.hero-features .feature-item span'));

    // Update specific elements by class or ID (only for elements without data-translate)
    updateElementText('.section-title', langData.ourAIDrivenServices);
    updateElementText('.lead', langData.servicesSubtitle);

    // Note: Hero elements are updated via data-translate attributes above
    // No need to call updateElementText for them

    // Update buttons (only for elements without data-translate)
    updateButtonText('.btn-light', langData.getStartedToday);
    updateButtonText('.btn-danger', langData.bookConsultationBtn);

    // Note: Hero buttons are updated via data-translate attributes above
    // No need to call updateButtonText for them

    // Update section titles
    updateSectionTitle('#team', langData.ourExpertTeam);
    updateSectionTitle('#services', langData.ourAIDrivenServices);
    updateSectionTitle('#testimonials', langData.whatOurClientsSay);
    updateSectionTitle('#faqs', langData.frequentlyAskedQuestions);
    updateSectionTitle('#contact', langData.contactUs);

    // Update trust section
    updateElementText('#trust h2', langData.whyTrustUs);
    updateButtonText('#trust .btn-light', langData.getStartedToday);

    // Update contact section
    updateElementText('#contact h2', langData.contactUs);
    updateElementText('#contact .lead', langData.contactSubtitle);
    updateElementText('#contact p:nth-of-type(2)', langData.contactDescription);
    updateElementText('#contact h4', langData.getInTouch);
    updateElementText('#contact h5:last-of-type', langData.connectWithUs);

    // Update statistics section
    updateElementText('.statistics-section .stat-item p', langData.successfulCases);
    updateElementText('.statistics-section .stat-item:nth-child(2) p', langData.successRate);
    updateElementText('.statistics-section .stat-item:nth-child(3) p', langData.yearsExperience);
    updateElementText('.statistics-section .stat-item:nth-child(4) p', langData.aiPoweredHours);

    // Update team section
    updateElementText('#team .section-title', langData.ourExpertTeam);
    updateElementText('#team .lead', langData.teamSubtitle);

    // Update team member details
    updateElementText('#team .team-card:nth-child(1) h5', langData.teamEyadTitle);
    updateElementText('#team .team-card:nth-child(1) p', langData.teamEyadDegree);
    updateElementText('#team .team-card:nth-child(1) small', langData.teamEyadRole);
    updateElementText('#team .team-card:nth-child(2) h5', langData.teamMuntahaTitle);
    updateElementText('#team .team-card:nth-child(2) p', langData.teamMuntahaDegree);
    updateElementText('#team .team-card:nth-child(2) small', langData.teamMuntahaRole);
    updateElementText('#team .team-card:nth-child(3) h5', langData.teamMohammadTitle);
    updateElementText('#team .team-card:nth-child(3) p', langData.teamMohammadDegree);
    updateElementText('#team .team-card:nth-child(3) small', langData.teamMohammadRole);
    updateElementText('#team .team-card:nth-child(4) h5', langData.teamHaniTitle);
    updateElementText('#team .team-card:nth-child(4) p', langData.teamHaniDegree);
    updateElementText('#team .team-card:nth-child(4) small', langData.teamHaniRole);

    // Update services section
    updateElementText('#services .section-title', langData.ourAIDrivenServices);
    updateElementText('#services .lead', langData.servicesSubtitle);
    updateElementText('#services p', langData.servicesDescription);
    updateElementText('#services h3', langData.ourImmigrationServices);

    // Update testimonials section
    updateElementText('#testimonials h2', langData.whatOurClientsSay);
    updateElementText('#testimonials .text-white-50', langData.testimonialsSubtitle);

    // Update FAQs section
    updateElementText('#faqs .section-title', langData.frequentlyAskedQuestions);
    updateElementText('#faqs .lead', langData.faqSubtitle);

    // Update immigration stories section
    updateElementText('#immigration-stories .section-title', langData.immigrationSuccessStories);
    updateElementText('#immigration-stories .lead', langData.immigrationStoriesSubtitle);

    // Update map section
    updateElementText('#map .section-title', langData.visitOurOffice);
    updateElementText('#map .lead', langData.mapSubtitle);

    // Update footer
    updateElementText('.footer h5:first-child', langData.smartEJudgeLLC);
    updateElementText('.footer p', langData.footerDescription);
    updateElementText('.footer h5:nth-child(2)', langData.quickLinks);
    updateElementText('.footer h5:last-child', langData.connectWithUs);

    // Update top bar
    updateElementText('.top-title', langData.topTitle);

    // Update statistics labels
    updateElementText('.stat-label', langData.statSuccessfulCases);
    updateElementText('.hero-stats .stat-card:nth-child(1) .stat-label', langData.statSuccessfulCases);
    updateElementText('.hero-stats .stat-card:nth-child(2) .stat-label', langData.statYearsExperience);
    updateElementText('.hero-stats .stat-card:nth-child(3) .stat-label', langData.statAISupport);

    // Update team section
    updateElementText('#team h3', langData.teamAccreditation);
    updateElementText('#team .text-muted', langData.teamAccreditationSubtitle);

    // Update trust section list items
    updateElementText('#trust .trust-list li:nth-child(1)', langData.trustInnovativeAI);
    updateElementText('#trust .trust-list li:nth-child(2)', langData.trustLegalMastery);
    updateElementText('#trust .trust-list li:nth-child(3)', langData.trustEfficiency);
    updateElementText('#trust .trust-list li:nth-child(4)', langData.trustTransparent);
    updateElementText('#trust .trust-list li:nth-child(5)', langData.trustProven);

    // Update carousel stories
    updateElementText('#immigration-stories .carousel-item:nth-child(1) h3', langData.carouselFamilyReunification);
    updateElementText('#immigration-stories .carousel-item:nth-child(1) p', langData.carouselFamilyDescription);
    updateElementText('#immigration-stories .carousel-item:nth-child(2) h3', langData.carouselAcademicAchievements);
    updateElementText('#immigration-stories .carousel-item:nth-child(2) p', langData.carouselAcademicDescription);
    updateElementText('#immigration-stories .carousel-item:nth-child(3) h3', langData.carouselBusinessSuccess);
    updateElementText('#immigration-stories .carousel-item:nth-child(3) p', langData.carouselBusinessDescription);
    updateElementText('#immigration-stories .carousel-item:nth-child(4) h3', langData.carouselCommunityBuilding);
    updateElementText('#immigration-stories .carousel-item:nth-child(4) p', langData.carouselCommunityDescription);
    updateElementText('#immigration-stories .carousel-item:nth-child(5) h3', langData.carouselCelebrationMoments);
    updateElementText('#immigration-stories .carousel-item:nth-child(5) p', langData.carouselCelebrationDescription);

    // Update carousel stat labels
    updateElementText('#immigration-stories .carousel-item:nth-child(1) .stat-label', langData.carouselStatFamilies);
    updateElementText('#immigration-stories .carousel-item:nth-child(2) .stat-label', langData.carouselStatStudents);
    updateElementText('#immigration-stories .carousel-item:nth-child(3) .stat-label', langData.carouselStatBusinesses);
    updateElementText('#immigration-stories .carousel-item:nth-child(4) .stat-label', langData.carouselStatLives);
    updateElementText('#immigration-stories .carousel-item:nth-child(5) .stat-label', langData.carouselStatSuccessRate);

    // Update service descriptions
    updateElementText('#services .services-list li:nth-child(1) .service-content p', langData.serviceE2Visa);
    updateElementText('#services .services-list li:nth-child(2) .service-content p', langData.serviceEB1);
    updateElementText('#services .services-list li:nth-child(3) .service-content p', langData.serviceEB2NIW);
    updateElementText('#services .services-list li:nth-child(4) .service-content p', langData.servicePERM);

    // Update map section
    updateElementText('#map h4', langData.mapOurLocation);
    updateElementText('#map .text-muted', langData.mapExactAddress);
    updateElementText('#map .btn-outline-danger', langData.mapGetDirections);
    updateElementText('#map .btn-danger', langData.mapCallNow);

    // Update FAQ questions and answers
    updateElementText('#faqs .accordion-item:nth-child(1) .accordion-button', langData.faqEB2NIW);
    updateElementText('#faqs .accordion-item:nth-child(1) .accordion-body', langData.faqEB2NIWAnswer);
    updateElementText('#faqs .accordion-item:nth-child(2) .accordion-button', langData.faqAIJourney);
    updateElementText('#faqs .accordion-item:nth-child(2) .accordion-body', langData.faqAIJourneyAnswer);
    updateElementText('#faqs .accordion-item:nth-child(3) .accordion-button', langData.faqSuccessRate);
    updateElementText('#faqs .accordion-item:nth-child(3) .accordion-body', langData.faqSuccessRateAnswer);
    updateElementText('#faqs .accordion-item:nth-child(4) .accordion-button', langData.faqProcessTime);
    updateElementText('#faqs .accordion-item:nth-child(4) .accordion-body', langData.faqProcessTimeAnswer);
    updateElementText('#faqs .text-danger', langData.faqVerification);

    // Update footer links
    updateElementText('.footer-links a:nth-child(1)', langData.footerHome);
    updateElementText('.footer-links a:nth-child(2)', langData.footerOurTeam);
    updateElementText('.footer-links a:nth-child(3)', langData.footerServices);
    updateElementText('.footer-links a:nth-child(4)', langData.footerContact);
    updateElementText('.footer .mb-2', langData.footerCopyright);
    updateElementText('.footer .text-muted.small', langData.footerDisclaimer);

    // Update service titles and descriptions
    updateElementText('.service-title', langData.serviceE2VisaTitle);
    updateElementText('.service-desc', langData.serviceE2VisaShort);
    updateElementText('#services .services-container .service-card:nth-child(1) .service-title', langData.serviceE2VisaTitle);
    updateElementText('#services .services-container .service-card:nth-child(1) .service-desc', langData.serviceE2VisaShort);
    updateElementText('#services .services-container .service-card:nth-child(2) .service-title', langData.serviceEB1Title);
    updateElementText('#services .services-container .service-card:nth-child(2) .service-desc', langData.serviceEB1Short);
    updateElementText('#services .services-container .service-card:nth-child(3) .service-title', langData.serviceEB2NIWTitle);
    updateElementText('#services .services-container .service-card:nth-child(3) .service-desc', langData.serviceEB2NIWShort);
    updateElementText('#services .services-container .service-card:nth-child(4) .service-title', langData.servicePERMTitle);
    updateElementText('#services .services-container .service-card:nth-child(4) .service-desc', langData.servicePERMShort);

    // Update testimonials
    updateElementText('#testimonials .testimonial-card:nth-child(1) p', langData.testimonialHani);
    updateElementText('#testimonials .testimonial-card:nth-child(1) .testimonial-author strong', langData.authorHani);
    updateElementText('#testimonials .testimonial-card:nth-child(2) p', langData.testimonialMohammad);
    updateElementText('#testimonials .testimonial-card:nth-child(2) .testimonial-author strong', langData.authorMohammad);
    updateElementText('#testimonials .testimonial-card:nth-child(3) p', langData.testimonialSarah);
    updateElementText('#testimonials .testimonial-card:nth-child(3) .testimonial-author strong', langData.authorSarah);
    updateElementText('#testimonials .testimonial-card:nth-child(4) p', langData.testimonialAhmed);
    updateElementText('#testimonials .testimonial-card:nth-child(4) .testimonial-author strong', langData.authorAhmed);

    // Update modal content
    updateElementText('#teamModal1 .modal-title', langData.modalEyadTitle);
    updateElementText('#teamModal1 h6', langData.modalEyadRole);
    updateElementText('#teamModal1 p:nth-of-type(2)', langData.modalEyadDescription);
    updateElementText('#teamModal1 ul li:nth-child(1)', langData.modalEyadList1);
    updateElementText('#teamModal1 ul li:nth-child(2)', langData.modalEyadList2);
    updateElementText('#teamModal1 ul li:nth-child(3)', langData.modalEyadList3);
    updateElementText('#teamModal1 ul li:nth-child(4)', langData.modalEyadList4);

    updateElementText('#teamModal2 .modal-title', langData.modalMuntahaTitle);
    updateElementText('#teamModal2 h6', langData.modalMuntahaRole);
    updateElementText('#teamModal2 p:nth-of-type(2)', langData.modalMuntahaDescription);
    updateElementText('#teamModal2 ul li:nth-child(1)', langData.modalMuntahaList1);
    updateElementText('#teamModal2 ul li:nth-child(2)', langData.modalMuntahaList2);
    updateElementText('#teamModal2 ul li:nth-child(3)', langData.modalMuntahaList3);
    updateElementText('#teamModal2 ul li:nth-child(4)', langData.modalMuntahaList4);

    updateElementText('#teamModal3 .modal-title', langData.modalMohammadTitle);
    updateElementText('#teamModal3 h6', langData.modalMohammadRole);
    updateElementText('#teamModal3 p:nth-of-type(2)', langData.modalMohammadDescription);
    updateElementText('#teamModal3 ul li:nth-child(1)', langData.modalMohammadList1);
    updateElementText('#teamModal3 ul li:nth-child(2)', langData.modalMohammadList2);
    updateElementText('#teamModal3 ul li:nth-child(3)', langData.modalMohammadList3);
    updateElementText('#teamModal3 ul li:nth-child(4)', langData.modalMohammadList4);

    updateElementText('#teamModal4 .modal-title', langData.modalHaniTitle);
    updateElementText('#teamModal4 h6', langData.modalHaniRole);
    updateElementText('#teamModal4 p:nth-of-type(2)', langData.modalHaniDescription);
    updateElementText('#teamModal4 ul li:nth-child(1)', langData.modalHaniList1);
    updateElementText('#teamModal4 ul li:nth-child(2)', langData.modalHaniList2);
    updateElementText('#teamModal4 ul li:nth-child(3)', langData.modalHaniList3);
    updateElementText('#teamModal4 ul li:nth-child(4)', langData.modalHaniList4);

    // Save language preference
    localStorage.setItem('preferredLanguage', lang);

    // Update RTL for Arabic and Persian
    if (lang === 'ar' || lang === 'fa') {
        document.body.style.direction = 'rtl';
        document.body.classList.add('rtl');
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', lang);
    } else {
        document.body.style.direction = 'ltr';
        document.body.classList.remove('rtl');
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', lang);
    }
}

// Helper function to update element text
function updateElementText(selector, text) {
    if (!text) return;

    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        if (element) {
            // Check if element has data-translate attribute
            if (element.hasAttribute('data-translate')) {
                // For elements with data-translate, always update the text
                element.textContent = text;
            } else {
                // Check if element has child elements that should not be replaced
                const hasImportantChildren = element.querySelector('i, img, strong, em, span');
                if (!hasImportantChildren) {
                    element.textContent = text;
                } else {
                    // If element has important children, only update if it's a simple text element
                    if (element.children.length === 0 || element.children.length === 1) {
                        element.textContent = text;
                    }
                }
            }
        }
    });
}

// Helper function to update button text
function updateButtonText(selector, text) {
    if (!text) return;

    const buttons = document.querySelectorAll(selector);
    buttons.forEach(button => {
        if (button) {
            // Preserve icons in buttons
            const icon = button.querySelector('i');
            if (icon) {
                button.innerHTML = icon.outerHTML + ' ' + text;
            } else {
                button.textContent = text;
            }
        }
    });
}

// Helper function to update section title
function updateSectionTitle(selector, text) {
    const section = document.querySelector(selector);
    if (section) {
        const title = section.querySelector('h2');
        if (title && text) {
            title.textContent = text;
        }
    }
}

// Initialize language system
document.addEventListener('DOMContentLoaded', function () {
    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && languages[savedLang]) {
        changeLanguage(savedLang);
    }

    // Add event listeners to language dropdown
    document.querySelectorAll('[data-lang]').forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            if (lang !== 'home' && lang !== 'team' && lang !== 'trust' &&
                lang !== 'services' && lang !== 'testimonials' && lang !== 'faqs' &&
                lang !== 'map' && lang !== 'contact') {
                changeLanguage(lang);
            }
        });
    });

    // Add data-translate attributes to elements that need translation
    addTranslationAttributes();
});

// Function to add translation attributes to elements
function addTranslationAttributes() {
    // Add data-translate attributes to elements that don't have them
    const elementsToTranslate = [
        { selector: '.hero-title', key: 'heroTitle' },
        { selector: '.hero-subtitle', key: 'heroSubtitle' },
        { selector: '.hero-badge span', key: 'heroBadge' },
        { selector: '.hero-features .feature-item:nth-child(1) span', key: 'heroFeature1' },
        { selector: '.hero-features .feature-item:nth-child(2) span', key: 'heroFeature2' },
        { selector: '.hero-features .feature-item:nth-child(3) span', key: 'heroFeature3' },
        { selector: '.section-title', key: 'ourAIDrivenServices' },
        { selector: '.lead', key: 'servicesSubtitle' },
        { selector: '#trust h2', key: 'whyTrustUs' },
        { selector: '#contact h2', key: 'contactUs' },
        { selector: '#contact .lead', key: 'contactSubtitle' },
        { selector: '#contact h4', key: 'getInTouch' },
        { selector: '#contact h5:last-of-type', key: 'connectWithUs' },
        { selector: '#immigration-stories .section-title', key: 'immigrationSuccessStories' },
        { selector: '#immigration-stories .lead', key: 'immigrationStoriesSubtitle' },
        { selector: '#map .section-title', key: 'visitOurOffice' },
        { selector: '#map .lead', key: 'mapSubtitle' },
        { selector: '.footer h5:first-child', key: 'smartEJudgeLLC' },
        { selector: '.footer p', key: 'footerDescription' },
        { selector: '.footer h5:nth-child(2)', key: 'quickLinks' },
        { selector: '.footer h5:last-child', key: 'connectWithUs' },
        { selector: '.top-title', key: 'topTitle' },
        { selector: '.stat-label', key: 'statSuccessfulCases' },
        { selector: '#team h3', key: 'teamAccreditation' },
        { selector: '#team .text-muted', key: 'teamAccreditationSubtitle' },
        { selector: '#team .team-card:nth-child(1) h5', key: 'teamEyadTitle' },
        { selector: '#team .team-card:nth-child(1) p', key: 'teamEyadDegree' },
        { selector: '#team .team-card:nth-child(1) small', key: 'teamEyadRole' },
        { selector: '#team .team-card:nth-child(2) h5', key: 'teamMuntahaTitle' },
        { selector: '#team .team-card:nth-child(2) p', key: 'teamMuntahaDegree' },
        { selector: '#team .team-card:nth-child(2) small', key: 'teamMuntahaRole' },
        { selector: '#team .team-card:nth-child(3) h5', key: 'teamMohammadTitle' },
        { selector: '#team .team-card:nth-child(3) p', key: 'teamMohammadDegree' },
        { selector: '#team .team-card:nth-child(3) small', key: 'teamMohammadRole' },
        { selector: '#team .team-card:nth-child(4) h5', key: 'teamHaniTitle' },
        { selector: '#team .team-card:nth-child(4) p', key: 'teamHaniDegree' },
        { selector: '#team .team-card:nth-child(4) small', key: 'teamHaniRole' },
        { selector: '#trust .trust-list li', key: 'trustInnovativeAI' },
        { selector: '#immigration-stories .carousel-item h3', key: 'carouselFamilyReunification' },
        { selector: '#immigration-stories .carousel-item p', key: 'carouselFamilyDescription' },
        { selector: '#services .services-list li .service-content p', key: 'serviceE2Visa' },
        { selector: '#map h4', key: 'mapOurLocation' },
        { selector: '#map .text-muted', key: 'mapExactAddress' },
        { selector: '#faqs .accordion-button', key: 'faqEB2NIW' },
        { selector: '#faqs .accordion-body', key: 'faqEB2NIWAnswer' },
        { selector: '#faqs .text-danger', key: 'faqVerification' },
        { selector: '.footer-links a', key: 'footerHome' },
        { selector: '.footer .mb-2', key: 'footerCopyright' },
        { selector: '.footer .text-muted.small', key: 'footerDisclaimer' },
        { selector: '.service-title', key: 'serviceE2VisaTitle' },
        { selector: '.service-desc', key: 'serviceE2VisaShort' },
        { selector: '#testimonials .testimonial-card p', key: 'testimonialHani' },
        { selector: '#testimonials .testimonial-author strong', key: 'authorHani' },
        { selector: '#teamModal1 .modal-title', key: 'modalEyadTitle' },
        { selector: '#teamModal1 h6', key: 'modalEyadRole' },
        { selector: '#teamModal1 p:nth-of-type(2)', key: 'modalEyadDescription' },
        { selector: '#teamModal1 ul li', key: 'modalEyadList1' },
        { selector: '#teamModal2 .modal-title', key: 'modalMuntahaTitle' },
        { selector: '#teamModal2 h6', key: 'modalMuntahaRole' },
        { selector: '#teamModal2 p:nth-of-type(2)', key: 'modalMuntahaDescription' },
        { selector: '#teamModal2 ul li', key: 'modalMuntahaList1' },
        { selector: '#teamModal3 .modal-title', key: 'modalMohammadTitle' },
        { selector: '#teamModal3 h6', key: 'modalMohammadRole' },
        { selector: '#teamModal3 p:nth-of-type(2)', key: 'modalMohammadDescription' },
        { selector: '#teamModal3 ul li', key: 'modalMohammadList1' },
        { selector: '#teamModal4 .modal-title', key: 'modalHaniTitle' },
        { selector: '#teamModal4 h6', key: 'modalHaniRole' },
        { selector: '#teamModal4 p:nth-of-type(2)', key: 'modalHaniDescription' },
        { selector: '#teamModal4 ul li', key: 'modalHaniList1' }
    ];

    elementsToTranslate.forEach(item => {
        const elements = document.querySelectorAll(item.selector);
        elements.forEach(element => {
            if (!element.hasAttribute('data-translate')) {
                element.setAttribute('data-translate', item.key);
            }
        });
    });
}

// Console log for debugging
console.log('Smart E-Judge LLC - Website loaded successfully!');



