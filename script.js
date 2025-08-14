document.addEventListener('DOMContentLoaded', function() {
    // Show dark theme message immediately
    const darkThemeMessage = document.createElement('div');
    darkThemeMessage.id = 'dark-theme-message';
    darkThemeMessage.innerHTML = `
        <div class="message-content">
            <i class="fas fa-moon"></i>
            <p>Dark mode activated! Easier on your eyes at night.</p>
        </div>
        <button class="close-message"><i class="fas fa-times"></i></button>
    `;
    document.body.appendChild(darkThemeMessage);
    
    // Add close button functionality
    const closeBtn = darkThemeMessage.querySelector('.close-message');
    closeBtn.addEventListener('click', function() {
        darkThemeMessage.classList.add('hide');
        setTimeout(() => {
            darkThemeMessage.remove();
        }, 500);
    });
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        if (darkThemeMessage.parentNode) {
            darkThemeMessage.classList.add('hide');
            setTimeout(() => {
                if (darkThemeMessage.parentNode) {
                    darkThemeMessage.remove();
                }
            }, 500);
        }
    }, 5000);
    
    // Animate in
    setTimeout(() => {
        darkThemeMessage.classList.add('show');
    }, 10);
    // Theme Toggle Functionality
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Set dark theme by default
    body.classList.add('dark-theme');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        icon.classList.replace('fa-moon', 'fa-sun');
        
        // Show dark theme message on initial load
        setTimeout(() => {
            showDarkThemeMessage();
        }, 1000); // Delay to ensure page has loaded
    }
    
    // Toggle theme when button is clicked
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-theme');
            
            // Update icon
            const icon = this.querySelector('i');
            if (body.classList.contains('dark-theme')) {
                icon.classList.replace('fa-moon', 'fa-sun');
                localStorage.setItem('theme', 'dark');
                
                // Show dark theme message
                showDarkThemeMessage();
            } else {
                icon.classList.replace('fa-sun', 'fa-moon');
                localStorage.setItem('theme', 'light');
            }
            
            // Add transition effect to the body
            body.style.transition = 'background-color 0.5s, color 0.5s';
        });
    }
    
    // Function to show dark theme message
    function showDarkThemeMessage() {
        // Create message element if it doesn't exist
        if (!document.getElementById('dark-theme-message')) {
            const messageEl = document.createElement('div');
            messageEl.id = 'dark-theme-message';
            messageEl.innerHTML = `
                <div class="message-content">
                    <i class="fas fa-moon"></i>
                    <p>Dark mode activated! Easier on your eyes at night.</p>
                </div>
                <button class="close-message"><i class="fas fa-times"></i></button>
            `;
            document.body.appendChild(messageEl);
            
            // Add close button functionality
            const closeBtn = messageEl.querySelector('.close-message');
            closeBtn.addEventListener('click', function() {
                messageEl.classList.add('hide');
                setTimeout(() => {
                    messageEl.remove();
                }, 500);
            });
            
            // Auto hide after 5 seconds
            setTimeout(() => {
                if (messageEl.parentNode) {
                    messageEl.classList.add('hide');
                    setTimeout(() => {
                        if (messageEl.parentNode) {
                            messageEl.remove();
                        }
                    }, 500);
                }
            }, 5000);
            
            // Animate in
            setTimeout(() => {
                messageEl.classList.add('show');
            }, 10);
        }
    }
    // Apply animation class to elements
    function applyAnimations() {
        const elements = document.querySelectorAll('.section-title, .about-content, .skill-item, .portfolio-item, .problem-item, .contact-item, .consultation-form, .contact-form');
        
        elements.forEach((element, index) => {
            element.classList.add('animate-element');
            element.style.animationDelay = `${index * 0.1}s`;
        });
    }
    
    // Call animation function
    applyAnimations();
    
    // Parallax effect on hero section
    const heroSection = document.querySelector('.hero-section');
    const heroContent = document.querySelector('.hero-content');
    const avatarContainer = document.querySelector('.avatar-container');
    
    if (heroSection && heroContent && avatarContainer) {
        window.addEventListener('scroll', function() {
            const scrollY = window.scrollY;
            const heroHeight = heroSection.offsetHeight;
            
            if (scrollY <= heroHeight) {
                const translateY = scrollY * 0.3;
                const opacity = 1 - (scrollY / heroHeight) * 1.5;
                
                heroContent.style.transform = `translateY(${translateY}px)`;
                heroContent.style.opacity = Math.max(0, opacity);
                
                avatarContainer.style.transform = `translateY(${translateY * 0.5}px)`;
            }
        });
    }
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('btn-ripple');
            this.appendChild(ripple);
            
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });
    });
    
    // Add edge lighting effect to problem-solving cards
    const solutionCards = document.querySelectorAll('.solution-item');
    
    solutionCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top;  // y position within the element
            
            // Calculate position as percentage
            const xPercent = Math.floor((x / rect.width) * 100);
            const yPercent = Math.floor((y / rect.height) * 100);
            
            // Update the gradient position based on mouse position
            this.style.setProperty('--x-position', `${xPercent}%`);
            this.style.setProperty('--y-position', `${yPercent}%`);
            this.classList.add('lighting-active');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('lighting-active');
        });
    });
    
    // Add text reveal animation for stats
    const statItems = document.querySelectorAll('.stat-item');
    
    statItems.forEach(item => {
        const statNumber = item.querySelector('.stat-number');
        const statText = item.querySelector('.stat-text');
        
        if (statNumber && statText) {
            // Add animation classes
            statNumber.classList.add('reveal-text');
            statText.classList.add('reveal-text');
            statText.style.animationDelay = '0.3s';
        }
    });
    
    // Initialize skill bars with animation
    const skillLevels = document.querySelectorAll('.skill-level');
    
    function animateSkillBars() {
        skillLevels.forEach(level => {
            const width = level.style.width;
            level.style.width = '0';
            level.style.setProperty('--width', width);
        });
    }
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    // Animate skill bars when they come into view
    function checkSkillBars() {
        const skillsSection = document.querySelector('.skills');
        if (skillsSection && isInViewport(skillsSection)) {
            animateSkillBars();
            // Remove scroll listener once animated
            window.removeEventListener('scroll', checkSkillBars);
        }
    }
    
    // Add scroll listener for skill bars
    window.addEventListener('scroll', checkSkillBars);
    // Check once on page load
    checkSkillBars();
    
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (nav && nav.classList.contains('active') && !nav.contains(event.target) && !menuToggle.contains(event.target)) {
            nav.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Portfolio Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterBtns.length > 0 && portfolioItems.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                filterBtns.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                portfolioItems.forEach(item => {
                    if (filter === 'all') {
                        item.style.display = 'block';
                    } else {
                        const categories = item.getAttribute('data-category').split(' ');
                        if (categories.includes(filter)) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    }
                });
            });
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Close mobile menu if open
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    const icon = menuToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
                
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '20px 0';
            header.style.boxShadow = 'none';
        }
    });

    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    const consultationForm = document.getElementById('consultationForm');
    
    // Function to validate form
    function validateForm(form, formId) {
        let isValid = true;
        
        // Get form fields based on form ID
        const nameId = formId === 'contactForm' ? 'name' : 'consult-name';
        const emailId = formId === 'contactForm' ? 'email' : 'consult-email';
        const subjectId = formId === 'contactForm' ? 'subject' : null;
        const messageId = formId === 'contactForm' ? 'message' : 'project-details';
        
        const name = document.getElementById(nameId).value.trim();
        const email = document.getElementById(emailId).value.trim();
        const message = document.getElementById(messageId).value.trim();
        
        if (name === '') {
            showError(nameId, 'Name is required');
            isValid = false;
        } else {
            removeError(nameId);
        }
        
        if (email === '') {
            showError(emailId, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError(emailId, 'Please enter a valid email');
            isValid = false;
        } else {
            removeError(emailId);
        }
        
        if (subjectId && document.getElementById(subjectId)) {
            const subject = document.getElementById(subjectId).value.trim();
            if (subject === '') {
                showError(subjectId, 'Subject is required');
                isValid = false;
            } else {
                removeError(subjectId);
            }
        }
        
        if (message === '') {
            showError(messageId, 'Message is required');
            isValid = false;
        } else {
            removeError(messageId);
        }
        
        return isValid;
    }
    
    // Handle contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            if (!validateForm(this, 'contactForm')) {
                e.preventDefault();
            } else {
                // Form is valid and will be submitted to FormSubmit
                // We can add a loading animation here
                const submitBtn = this.querySelector('button[type="submit"]');
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitBtn.disabled = true;
                
                // We don't prevent default here to allow the form to submit to FormSubmit
            }
        });
    }
    
    // Handle consultation form submission
    if (consultationForm) {
        consultationForm.addEventListener('submit', function(e) {
            if (!validateForm(this, 'consultationForm')) {
                e.preventDefault();
            } else {
                // Form is valid and will be submitted to FormSubmit
                const submitBtn = this.querySelector('button[type="submit"]');
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitBtn.disabled = true;
                
                // We don't prevent default here to allow the form to submit to FormSubmit
            }
        });
    }
    
    // Helper functions for form validation
    function showError(inputId, message) {
        const input = document.getElementById(inputId);
        const formGroup = input.parentElement;
        
        // Remove existing error if any
        removeError(inputId);
        
        // Add error message
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        
        formGroup.appendChild(errorElement);
        input.classList.add('error');
    }
    
    function removeError(inputId) {
        const input = document.getElementById(inputId);
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error-message');
        
        if (errorElement) {
            formGroup.removeChild(errorElement);
        }
        
        input.classList.remove('error');
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Add animation to stats when they come into view
    const stats = document.querySelectorAll('.stat-number');
    let animated = false;
    
    function animateStats() {
        if (stats.length > 0 && !animated) {
            const statsSection = document.querySelector('.about-stats');
            const statsSectionTop = statsSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (statsSectionTop < windowHeight - 100) {
                stats.forEach(stat => {
                    const targetValue = parseInt(stat.textContent);
                    let currentValue = 0;
                    const increment = targetValue / 50; // Adjust for animation speed
                    
                    const updateCounter = () => {
                        currentValue += increment;
                        if (currentValue < targetValue) {
                            stat.textContent = Math.ceil(currentValue) + '+';
                            requestAnimationFrame(updateCounter);
                        } else {
                            stat.textContent = targetValue + '+';
                        }
                    };
                    
                    updateCounter();
                });
                
                animated = true;
            }
        }
    }
    
    // Call animateStats on scroll
    window.addEventListener('scroll', animateStats);
    // Call once on page load in case stats are already in view
    animateStats();

    // Add CSS styles for form validation
    const style = document.createElement('style');
    style.textContent = `
        .error-message {
            color: var(--danger-color);
            font-size: 0.85rem;
            margin-top: 5px;
        }
        
        .form-group input.error,
        .form-group textarea.error {
            border-color: var(--danger-color);
        }
        
        .form-success {
            text-align: center;
            padding: 30px;
        }
        
        .form-success i {
            font-size: 3rem;
            color: var(--success-color);
            margin-bottom: 20px;
        }
        
        .form-success h3 {
            margin-bottom: 15px;
        }
    `;
    document.head.appendChild(style);
});