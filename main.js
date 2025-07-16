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
    if (typeof AOS !== 'undefined') {
        AOS.init();
    }

    // Typed.js animation safely
    if (typeof Typed !== 'undefined') {
        new Typed('.typed-text', {
            strings: ["Machine Learning Developer", "Data Science Enthusiast", "Biomedical Engineer", "Python Developer", "AI Enthusiast"],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 2000,
            loop: true,
            smartBackspace: true
        });
    }

    // Theme switcher
    const themeSwitch = document.getElementById('themeSwitch');
    const mobileThemeSwitch = document.getElementById('mobileThemeSwitch');
    
    // Function to handle theme change
    function changeTheme(isDark) {
        if (isDark) {
            document.body.setAttribute('data-bs-theme', 'dark');
        } else {
            document.body.setAttribute('data-bs-theme', 'light');
        }
        // Sync both switches
        themeSwitch.checked = !isDark;
        if (mobileThemeSwitch) {
            mobileThemeSwitch.checked = isDark;
        }
    }
    
    // Desktop theme switch
    themeSwitch.addEventListener('change', () => {
        changeTheme(!themeSwitch.checked);
    });
    
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

    // Error handling for external resources
    window.addEventListener('error', function(e) {
        console.warn('Resource failed to load:', e.target);
    });

    // Performance monitoring (optional)
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart + 'ms');
            }, 0);
        });
    }
});
