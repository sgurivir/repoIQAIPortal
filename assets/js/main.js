// Main JavaScript for repoIQ website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initScrollEffects();
    initAnimations();
    initModals();
    initTabs();
    initDropdowns();
    initPricingForm();
});

// Navigation functionality
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
    });
}

// Scroll effects and animations
function initScrollEffects() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .pricing-card, .metric-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Initialize animations
function initAnimations() {
    // Counter animation for stats
    const stats = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element) => {
        const target = element.textContent;
        const numericValue = parseInt(target.replace(/[^\d]/g, ''));
        const suffix = target.replace(/[\d]/g, '');
        
        if (numericValue) {
            let current = 0;
            const increment = numericValue / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= numericValue) {
                    current = numericValue;
                    clearInterval(timer);
                }
                element.textContent = Math.floor(current) + suffix;
            }, 30);
        }
    };
    
    // Animate counters when they come into view
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    });
    
    stats.forEach(stat => {
        counterObserver.observe(stat);
    });
}

// Modal functionality
function initModals() {
    const modalTriggers = document.querySelectorAll('[data-modal]');
    const modals = document.querySelectorAll('.modal-overlay');
    const modalCloses = document.querySelectorAll('.modal-close');
    
    // Open modal
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close modal
    modalCloses.forEach(close => {
        close.addEventListener('click', function() {
            const modal = this.closest('.modal-overlay');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Close modal on overlay click
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal-overlay.active');
            if (activeModal) {
                activeModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
}

// Tab functionality
function initTabs() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetTab = this.getAttribute('href').substring(1);
            
            // Remove active class from all tabs and contents
            tabLinks.forEach(l => l.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// Dropdown functionality
function initDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        if (toggle && menu) {
            toggle.addEventListener('click', function(e) {
                e.stopPropagation();
                dropdown.classList.toggle('active');
            });
        }
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function() {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    });
}

// Form handling
function handleFormSubmission(form, callback) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.innerHTML = '<span class="loading"></span> Processing...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            if (callback) {
                callback(data);
            }
        }, 2000);
    });
}

// Utility functions
function showAlert(message, type = 'success') {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    
    document.body.insertBefore(alert, document.body.firstChild);
    
    setTimeout(() => {
        alert.remove();
    }, 5000);
}

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

// Dashboard tab switching (for the hero section preview)
function initDashboardTabs() {
    const dashboardTabs = document.querySelectorAll('.dashboard-tabs .tab');
    
    dashboardTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            dashboardTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Update dashboard content based on selected tab
            updateDashboardContent(this.textContent);
        });
    });
}

function updateDashboardContent(tabName) {
    const metricCards = document.querySelectorAll('.metric-card');
    
    // Sample data for different tabs
    const tabData = {
        'Overview': [
            { value: '23', label: 'Critical Issues', type: 'critical' },
            { value: '156', label: 'Warnings', type: 'warning' },
            { value: 'A', label: 'Quality Grade', type: 'success' }
        ],
        'Issues': [
            { value: '179', label: 'Total Issues', type: 'critical' },
            { value: '45', label: 'New Issues', type: 'warning' },
            { value: '12', label: 'Fixed Today', type: 'success' }
        ],
        'Security': [
            { value: '5', label: 'Vulnerabilities', type: 'critical' },
            { value: '12', label: 'Security Hotspots', type: 'warning' },
            { value: 'B', label: 'Security Rating', type: 'success' }
        ],
        'Performance': [
            { value: '8', label: 'Bottlenecks', type: 'critical' },
            { value: '2.3s', label: 'Avg Load Time', type: 'warning' },
            { value: '85%', label: 'Performance Score', type: 'success' }
        ]
    };
    
    const data = tabData[tabName] || tabData['Overview'];
    
    metricCards.forEach((card, index) => {
        if (data[index]) {
            const valueEl = card.querySelector('.metric-value');
            const labelEl = card.querySelector('.metric-label');
            
            valueEl.textContent = data[index].value;
            labelEl.textContent = data[index].label;
            
            // Update value class
            valueEl.className = `metric-value ${data[index].type}`;
        }
    });
}

// Initialize dashboard tabs when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initDashboardTabs();
});

// Initialize pricing form
function initPricingForm() {
    const pricingForm = document.getElementById('pricingForm');
    
    if (pricingForm) {
        handleFormSubmission(pricingForm, function(data) {
            showAlert('Thank you for your interest! We\'ll send you a custom quote within 24 hours.', 'success');
            pricingForm.reset();
        });
    }
    
    // Initialize custom pricing form
    initCustomPricingForm();
}

// Initialize custom pricing form functionality
function initCustomPricingForm() {
    const customPricingForm = document.getElementById('customPricingForm');
    const getQuoteBtn = document.getElementById('getCustomQuoteBtn');
    
    if (customPricingForm && getQuoteBtn) {
        getQuoteBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get form data
            const email = document.getElementById('userEmail').value;
            const company = document.getElementById('companyName').value;
            const teamSize = document.getElementById('teamSize').value;
            
            // Validate form
            if (!email || !company || !teamSize) {
                showAlert('Please fill in all required fields.', 'error');
                return;
            }
            
            // Generate email content
            generateCustomQuoteEmail(email, company, teamSize);
        });
    }
}

// Generate custom quote email with general description and user data
function generateCustomQuoteEmail(email, company, teamSize) {
    const subject = 'RepoIQ Custom Pricing Request';
    
    // General description about RepoIQ
    const generalDescription = `Hello RepoIQ Team,

I am interested in learning more about RepoIQ's AI-powered code quality analysis platform and would like to request custom pricing for my organization.

ABOUT REPOIQ:
RepoIQ is an advanced AI-powered code analysis platform that helps development teams:
• Identify performance bottlenecks and optimization opportunities
• Detect security vulnerabilities and potential threats
• Find code quality issues and technical debt
• Generate comprehensive reports with actionable insights
• Integrate seamlessly with GitHub repositories
• Prioritize issues using intelligent AI-powered ranking

I believe RepoIQ's capabilities would be valuable for improving our code quality and development efficiency.`;

    // User-provided information
    const userInfo = `

CONTACT INFORMATION:
• Email: ${email}
• Company: ${company}
• Team Size: ${teamSize}

Please provide me with:
1. Custom pricing options for our team size
2. Information about deployment options (cloud vs on-premise)
3. Details about dedicated support and training
4. Available volume discounts
5. Implementation timeline and onboarding process

I look forward to discussing how RepoIQ can help improve our development workflow and code quality.

Best regards,
${company} Team`;

    // Combine general description with user information
    const emailBody = generalDescription + userInfo;
    
    // Create mailto link
    const mailtoLink = `mailto:support@repoiq.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    showAlert('Email client opened with your custom quote request!', 'success');
}

// Export functions for use in other scripts
window.repoIQ = {
    showAlert,
    debounce,
    handleFormSubmission
};