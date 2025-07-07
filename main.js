document.addEventListener('DOMContentLoaded', () => {

    // Initialize AOS
    AOS.init();

    // Typed.js animation
    new Typed('.typed-text', {
        strings: ["Data Analyst", "Machine Learning Engineer", "Biomedical Engineering Student"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });

    // Theme switcher
    const themeSwitch = document.getElementById('themeSwitch');
    themeSwitch.addEventListener('change', () => {
        if (themeSwitch.checked) {
            document.body.setAttribute('data-bs-theme', 'light');
        } else {
            document.body.setAttribute('data-bs-theme', 'dark');
        }
    });

    // Gallery filtering
    // Gallery filtering
    const filterButtons = document.querySelectorAll('.filter-button');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

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

    

});
