// IMMEDIATE BUTTON FIX - Load this first
console.log('JavaScript file loaded');

// Basic button functionality that loads immediately
function initializeBasicButtons() {
    console.log('Initializing basic buttons...');
    
    // Fix all navigation buttons
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                console.log('Navigating to:', targetId);
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Fix modal buttons
    document.querySelectorAll('[data-bs-toggle="modal"]').forEach(button => {
        button.addEventListener('click', function() {
            console.log('Modal button clicked:', this.getAttribute('data-bs-target'));
        });
    });
    
    // Fix theme switcher
    const themeSwitch = document.getElementById('themeSwitch');
    const mobileThemeSwitch = document.getElementById('mobileThemeSwitch');
    
    if (themeSwitch) {
        themeSwitch.addEventListener('change', function() {
            console.log('Theme switch clicked');
            const isDark = !this.checked;
            if (isDark) {
                document.body.setAttribute('data-bs-theme', 'dark');
            } else {
                document.body.setAttribute('data-bs-theme', 'light');
            }
        });
    }
    
    if (mobileThemeSwitch) {
        mobileThemeSwitch.addEventListener('change', function() {
            console.log('Mobile theme switch clicked');
            const isDark = this.checked;
            if (isDark) {
                document.body.setAttribute('data-bs-theme', 'dark');
            } else {
                document.body.setAttribute('data-bs-theme', 'light');
            }
        });
    }
    
    // Fix video play buttons
    document.querySelectorAll('.fa-play-circle').forEach(playBtn => {
        playBtn.addEventListener('click', function() {
            console.log('Play button clicked');
            const video = this.closest('.position-relative').querySelector('video');
            if (video) {
                video.play();
                this.style.display = 'none';
                console.log('Video playing');
            }
        });
    });
    
    // Fix download buttons
    document.querySelectorAll('a[download]').forEach(link => {
        link.addEventListener('click', function() {
            console.log('Download started:', this.getAttribute('href'));
        });
    });
    
    // Add visual feedback to all buttons
    document.querySelectorAll('button, .btn, a[role="button"]').forEach(button => {
        button.addEventListener('click', function() {
            console.log('Button clicked:', this.textContent.trim());
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });
    
    console.log('Basic buttons initialized successfully');
}

// Run immediately when script loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeBasicButtons);
} else {
    initializeBasicButtons();
}

document.addEventListener('DOMContentLoaded', () => {
    // Loading screen animation
    const loadingScreen = document.getElementById('loading-screen');
    
    // Hide loading screen once everything is loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (loadingScreen) {
                loadingScreen.style.opacity = '0';
                loadingScreen.style.transition = 'opacity 0.5s ease-out';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }
        }, 500); // More conservative timing
    });

    // Initialize AOS safely
    try {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: true,
                mirror: false
            });
            console.log('AOS initialized');
        } else {
            console.log('AOS not loaded');
        }
    } catch (error) {
        console.log('AOS error:', error);
    }

    // Initialize Typed.js safely
    try {
        if (typeof Typed !== 'undefined') {
            new Typed('.typed-text', {
                strings: ["Machine Learning Developer", "Data Science Enthusiast", "Biomedical Engineer", "Python Developer", "AI Enthusiast"],
                typeSpeed: 60,
                backSpeed: 40,
                backDelay: 2000,
                loop: true,
                smartBackspace: true
            });
            console.log('Typed.js initialized');
        } else {
            console.log('Typed.js not loaded');
        }
    } catch (error) {
        console.log('Typed.js error:', error);
    }

    // Theme switcher - FIXED
    const themeSwitch = document.getElementById('themeSwitch');
    const mobileThemeSwitch = document.getElementById('mobileThemeSwitch');
    
    // Function to handle theme change - SIMPLIFIED
    function changeTheme(isDark) {
        try {
            if (isDark) {
                document.body.setAttribute('data-bs-theme', 'dark');
            } else {
                document.body.setAttribute('data-bs-theme', 'light');
            }
            // Sync both switches
            if (themeSwitch) themeSwitch.checked = !isDark;
            if (mobileThemeSwitch) mobileThemeSwitch.checked = isDark;
        } catch (error) {
            console.log('Theme change error:', error);
        }
    }
    
    // Desktop theme switch
    if (themeSwitch) {
        themeSwitch.addEventListener('change', () => {
            changeTheme(!themeSwitch.checked);
        });
    }
    
    // Mobile theme switch
    if (mobileThemeSwitch) {
        mobileThemeSwitch.addEventListener('change', () => {
            changeTheme(mobileThemeSwitch.checked);
        });
    }
    
    // Set initial mobile theme switch state
    if (mobileThemeSwitch) {
        mobileThemeSwitch.checked = true; // Default to dark mode
    }

    // Mobile navigation smooth scroll
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    // Close the offcanvas menu
                    const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('mobileMenu'));
                    if (offcanvas) {
                        offcanvas.hide();
                    }
                    // Smooth scroll to target
                    setTimeout(() => {
                        target.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 300);
                }
            }
        });
    });

    // Mobile-specific optimizations
    if (window.innerWidth <= 768) {
        // Disable AOS animations on mobile for better performance
        document.querySelectorAll('[data-aos]').forEach(element => {
            element.removeAttribute('data-aos');
        });
        
        // Optimize carousel for mobile
        const carousel = document.querySelector('#certCarousel');
        if (carousel) {
            // Enable touch swiping for carousel
            carousel.addEventListener('touchstart', handleTouchStart, false);
            carousel.addEventListener('touchmove', handleTouchMove, false);
            
            let xDown = null;
            let yDown = null;
            
            function handleTouchStart(evt) {
                const firstTouch = evt.touches[0];
                xDown = firstTouch.clientX;
                yDown = firstTouch.clientY;
            }
            
            function handleTouchMove(evt) {
                if (!xDown || !yDown) {
                    return;
                }
                
                let xUp = evt.touches[0].clientX;
                let yUp = evt.touches[0].clientY;
                
                let xDiff = xDown - xUp;
                let yDiff = yDown - yUp;
                
                if (Math.abs(xDiff) > Math.abs(yDiff)) {
                    if (xDiff > 0) {
                        // Swipe left - next slide
                        bootstrap.Carousel.getInstance(carousel).next();
                    } else {
                        // Swipe right - previous slide
                        bootstrap.Carousel.getInstance(carousel).prev();
                    }
                }
                
                xDown = null;
                yDown = null;
            }
        }
    }

    // Prevent zoom on double tap for iOS
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    // Sidebar dynamic behavior
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const navLinks = document.querySelectorAll('.sidebar .nav-link');
    const sections = document.querySelectorAll('.scroll-section');

    // Auto-expand/collapse sidebar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Adjust scroll threshold as needed
            sidebar.classList.add('expanded');
            mainContent.classList.add('shifted');
        } else {
            sidebar.classList.remove('expanded');
            mainContent.classList.remove('shifted');
        }
    });

    // Expand/collapse sidebar on hover
    sidebar.addEventListener('mouseenter', () => {
        sidebar.classList.add('expanded');
        mainContent.classList.add('shifted');
    });

    sidebar.addEventListener('mouseleave', () => {
        // Only collapse if not scrolled down
        if (window.scrollY <= 50) {
            sidebar.classList.remove('expanded');
            mainContent.classList.remove('shifted');
        }
    });

    // Highlight active section in sidebar
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Adjust as needed: 0.5 means 50% of the section must be visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentSectionId = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').includes(currentSectionId)) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Smooth scrolling for navigation links - SIMPLIFIED
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

    // Enhanced Button Interactions - SIMPLIFIED
    function addButtonFeedback() {
        // Add simple click feedback to buttons
        document.querySelectorAll('button, .btn').forEach(button => {
            if (button.hasAttribute('data-bs-toggle')) return; // Skip modal/dropdown buttons
            
            button.addEventListener('click', function(e) {
                // Simple visual feedback only
                this.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 100);
            });
        });
    }

    // Simple Video Controls - FIXED
    function setupVideoControls() {
        // Simple play button functionality only
        document.querySelectorAll('.fa-play-circle').forEach(playBtn => {
            playBtn.addEventListener('click', function() {
                try {
                    const video = this.closest('.position-relative').querySelector('video');
                    if (video) {
                        video.play();
                        this.style.display = 'none';
                    }
                } catch (error) {
                    console.log('Video play error:', error);
                }
            });
        });
    }

    // Show video status messages - DISABLED
    function showVideoMessage(video, message) {
        // Disabled to prevent errors
        console.log(message);
    }

    // Toast notification system - SIMPLIFIED 
    function showToast(message, type = 'info') {
        try {
            console.log(`Toast: ${message}`);
            // Temporarily disabled to prevent crashes
        } catch (error) {
            console.log('Toast error:', error);
        }
    }

    function getToastIcon(type) {
        switch(type) {
            case 'success': return 'check-circle';
            case 'error': return 'exclamation-circle';
            case 'warning': return 'exclamation-triangle';
            default: return 'info-circle';
        }
    }

    // Enhanced Modal Interactions
    function setupModalEnhancements() {
        const modals = document.querySelectorAll('.modal');
        
        modals.forEach(modal => {
            modal.addEventListener('shown.bs.modal', function() {
                // Focus on modal for better accessibility
                this.focus();
                
                // Pause any playing videos when modal opens
                const modalVideo = this.querySelector('video');
                if (modalVideo) {
                    modalVideo.currentTime = 0;
                }
                
                // Add modal entrance animation
                this.querySelector('.modal-dialog').style.animation = 'modalSlideIn 0.3s ease-out';
            });
            
            modal.addEventListener('hidden.bs.modal', function() {
                // Pause videos when modal closes
                const modalVideo = this.querySelector('video');
                if (modalVideo) {
                    modalVideo.pause();
                    modalVideo.currentTime = 0;
                }
            });
        });
    }

    // Enhanced Loading States
    function addLoadingStates() {
        // Add loading to external links
        document.querySelectorAll('a[target="_blank"]').forEach(link => {
            link.addEventListener('click', function() {
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Opening...';
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                }, 2000);
            });
        });
    }

    // Disable problematic scroll animations
    function setupScrollAnimations() {
        // Disabled to fix floating issues
        return;
    }

    // Smart Form Handling
    function setupFormEnhancements() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                
                // Show loading state
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
                submitBtn.disabled = true;
                
                // Simulate form submission
                setTimeout(() => {
                    submitBtn.innerHTML = '<i class="fas fa-check me-2"></i>Sent!';
                    submitBtn.classList.add('btn-success');
                    
                    setTimeout(() => {
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                        submitBtn.classList.remove('btn-success');
                        form.reset();
                    }, 3000);
                }, 2000);
            });
        });
    }

    // Keyboard Navigation Enhancement
    function setupKeyboardNavigation() {
        document.addEventListener('keydown', function(e) {
            // ESC to close modals
            if (e.key === 'Escape') {
                const openModal = document.querySelector('.modal.show');
                if (openModal) {
                    bootstrap.Modal.getInstance(openModal).hide();
                }
            }
            
            // Space or Enter to trigger video play
            if (e.key === ' ' || e.key === 'Enter') {
                const focusedElement = document.activeElement;
                if (focusedElement.classList.contains('fa-play-circle')) {
                    e.preventDefault();
                    focusedElement.click();
                }
            }
        });
    }

    // Simplified Skill Card Interactions
    function setupSkillCardInteractions() {
        document.querySelectorAll('.skill-card').forEach(card => {
            card.addEventListener('click', function() {
                // Simple click effect only
                this.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 200);
            });
        });
    }

    // Simplified initialization - ONLY ESSENTIAL FUNCTIONS
    try {
        addButtonFeedback();
        setupVideoControls();
        setupSkillCardInteractions();
    } catch (error) {
        console.log('Initialization error:', error);
    }

    // Error handling for external resources
    window.addEventListener('error', function(e) {
        console.warn('Resource failed to load:', e.target);
    });

    // Performance monitoring - SIMPLIFIED
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                try {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
                    console.log('Page load time:', loadTime + 'ms');
                } catch (error) {
                    console.log('Performance monitoring error:', error);
                }
            }, 1000);
        });
    }
});

// EMERGENCY BUTTON FIX - Run after everything loads
window.addEventListener('load', function() {
    console.log('Window fully loaded, running emergency button fix...');
    
    // Emergency re-initialization of buttons
    setTimeout(() => {
        initializeBasicButtons();
        
        // Test all buttons
        const buttons = document.querySelectorAll('button, .btn, a[href]');
        console.log(`Found ${buttons.length} interactive elements`);
        
        // Add emergency click handlers
        buttons.forEach((btn, index) => {
            if (!btn.hasAttribute('data-emergency-fixed')) {
                btn.setAttribute('data-emergency-fixed', 'true');
                btn.addEventListener('click', function(e) {
                    console.log(`Emergency: Button ${index} clicked:`, this.textContent.trim() || this.getAttribute('aria-label') || 'No text');
                });
            }
        });
        
        console.log('Emergency button fix completed');
    }, 500);
});

// Global test function you can call from browser console
window.testButtons = function() {
    console.log('Testing all buttons...');
    document.querySelectorAll('button, .btn').forEach((btn, i) => {
        console.log(`Button ${i}:`, btn.textContent.trim(), btn.onclick, btn.getAttribute('data-bs-toggle'));
    });
};
