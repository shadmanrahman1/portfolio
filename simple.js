// SIMPLE PORTFOLIO SCRIPT - NO EXTERNAL DEPENDENCIES
console.log('Simple script loaded');

// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM ready - starting simple initialization');
    
    // Initialize typing animation
    initTypingAnimation();
    
    // 1. SIMPLE NAVIGATION
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                console.log('Navigated to:', targetId);
            }
        });
    });
    
    // 1.5. ENHANCED SIDEBAR FUNCTIONALITY
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const sidebarNavLinks = document.querySelectorAll('.sidebar .nav-link');
    let isScrollExpanded = false;
    let isHoverExpanded = false;

    // Check if device is mobile/tablet
    function isMobileDevice() {
        return window.innerWidth <= 768;
    }

    if (sidebar && mainContent && !isMobileDevice()) {
        // Function to expand sidebar
        function expandSidebar(source) {
            if (isMobileDevice()) return; // Prevent on mobile
            
            sidebar.classList.add('expanded');
            mainContent.classList.add('shifted');
            if (source === 'scroll') {
                isScrollExpanded = true;
                console.log('Sidebar expanded by scroll');
            } else if (source === 'hover') {
                isHoverExpanded = true;
                console.log('Sidebar expanded by hover');
            }
        }

        // Function to collapse sidebar
        function collapseSidebar(source) {
            if (isMobileDevice()) return; // Prevent on mobile
            
            if (source === 'scroll') {
                isScrollExpanded = false;
            } else if (source === 'hover') {
                isHoverExpanded = false;
            }

            // Only collapse if both scroll and hover are false
            if (!isScrollExpanded && !isHoverExpanded) {
                sidebar.classList.remove('expanded');
                mainContent.classList.remove('shifted');
                console.log('Sidebar collapsed');
            }
        }

        // Expand sidebar on hover
        sidebar.addEventListener('mouseenter', function() {
            expandSidebar('hover');
        });
        
        // Collapse sidebar when mouse leaves (but check scroll state)
        sidebar.addEventListener('mouseleave', function() {
            collapseSidebar('hover');
        });

        // Scroll detection for auto-expand
        let lastScrollY = window.scrollY;
        let ticking = false;

        function updateSidebarOnScroll() {
            if (isMobileDevice()) return; // Skip on mobile
            
            const currentScrollY = window.scrollY;
            const homeSection = document.querySelector('#home-about');
            const homeSectionHeight = homeSection ? homeSection.offsetHeight : 600;

            // Auto-expand when scrolling past 50% of the home section (made more responsive)
            if (currentScrollY > homeSectionHeight * 0.5) {
                if (!isScrollExpanded) {
                    expandSidebar('scroll');
                    // Add visual indicator for auto-expanded state
                    sidebar.classList.add('auto-expanded');
                }
            } else {
                // Collapse when back at top
                if (isScrollExpanded) {
                    collapseSidebar('scroll');
                    // Remove visual indicator
                    sidebar.classList.remove('auto-expanded');
                }
            }

            lastScrollY = currentScrollY;
            ticking = false;
        }

        function requestScrollUpdate() {
            if (!ticking) {
                requestAnimationFrame(updateSidebarOnScroll);
                ticking = true;
            }
        }

        window.addEventListener('scroll', requestScrollUpdate);

        // Handle window resize
        window.addEventListener('resize', function() {
            if (isMobileDevice()) {
                // Reset sidebar state on mobile
                sidebar.classList.remove('expanded');
                mainContent.classList.remove('shifted');
                isScrollExpanded = false;
                isHoverExpanded = false;
            }
        });

        // Active section highlighting (works on all devices)
        function updateActiveNavLink() {
            const sections = document.querySelectorAll('section[id]');
            const scrollPosition = window.scrollY + 100; // Offset for better detection

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    // Remove active class from all nav links
                    sidebarNavLinks.forEach(link => {
                        link.classList.remove('active');
                    });

                    // Add active class to current section's nav link
                    const activeLink = document.querySelector(`.sidebar .nav-link[href="#${sectionId}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                        console.log('Active section:', sectionId);
                    }
                }
            });
        }

        // Throttled scroll handler for active section
        let activeNavTicking = false;
        function requestActiveNavUpdate() {
            if (!activeNavTicking) {
                requestAnimationFrame(updateActiveNavLink);
                activeNavTicking = true;
                setTimeout(() => { activeNavTicking = false; }, 50);
            }
        }

        window.addEventListener('scroll', requestActiveNavUpdate);

        // Initial call to set active section
        updateActiveNavLink();
    } else if (sidebar) {
        // On mobile, still handle active section highlighting
        const sidebarNavLinks = document.querySelectorAll('.sidebar .nav-link');
        
        function updateActiveNavLink() {
            const sections = document.querySelectorAll('section[id]');
            const scrollPosition = window.scrollY + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    sidebarNavLinks.forEach(link => {
                        link.classList.remove('active');
                    });

                    const activeLink = document.querySelector(`.sidebar .nav-link[href="#${sectionId}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        }

        let activeNavTicking = false;
        function requestActiveNavUpdate() {
            if (!activeNavTicking) {
                requestAnimationFrame(updateActiveNavLink);
                activeNavTicking = true;
                setTimeout(() => { activeNavTicking = false; }, 50);
            }
        }

        window.addEventListener('scroll', requestActiveNavUpdate);
        updateActiveNavLink();
    }
    
    // 2. SIMPLE THEME SWITCH
    const themeSwitch = document.getElementById('themeSwitch');
    if (themeSwitch) {
        themeSwitch.addEventListener('change', function() {
            if (this.checked) {
                document.body.setAttribute('data-bs-theme', 'light');
                console.log('Switched to light mode');
            } else {
                document.body.setAttribute('data-bs-theme', 'dark');
                console.log('Switched to dark mode');
            }
        });
    }
    
    // 3. SIMPLE VIDEO PLAY
    const playButtons = document.querySelectorAll('.fa-play-circle');
    playButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const container = this.closest('.position-relative');
            const video = container.querySelector('video');
            if (video) {
                video.play();
                this.style.display = 'none';
                console.log('Video started');
            }
        });
    });
    
    // 4. SIMPLE BUTTON FEEDBACK
    const buttons = document.querySelectorAll('button, .btn');
    buttons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            console.log('Button clicked:', this.textContent.trim());
            this.style.transform = 'scale(0.95)';
            const self = this;
            setTimeout(function() {
                self.style.transform = 'scale(1)';
            }, 100);
        });
    });
    
    // 4.5. SMART PROJECT DETAILS - INTELLIGENT MODAL WITH ENHANCED FEATURES
    const projectButtons = document.querySelectorAll('[data-project-details]');
    projectButtons.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Smart prevention of multiple overlays
            const existingOverlay = document.querySelector('.project-overlay');
            if (existingOverlay) {
                existingOverlay.style.animation = 'fadeOut 0.2s ease';
                setTimeout(() => existingOverlay.remove(), 200);
                return;
            }
            
            // Smart project info extraction with enhanced data
            const card = this.closest('.card');
            const title = card.querySelector('.card-title').textContent;
            const description = card.querySelector('.card-text').textContent;
            const badges = Array.from(card.querySelectorAll('.badge')).map(b => b.textContent);
            const img = card.querySelector('img, video');
            
            // Smart project categorization and additional info
            const projectData = {
                title,
                description,
                badges,
                img,
                category: badges.includes('Python') ? 'AI/ML Project' : 
                         badges.includes('Power BI') ? 'Data Analytics' : 
                         badges.includes('Streamlit') ? 'Web Application' : 'Technical Project',
                complexity: badges.length > 3 ? 'Advanced' : badges.length > 2 ? 'Intermediate' : 'Basic',
                estimatedTime: Math.floor(Math.random() * 6) + 2 + ' months',
                status: 'Completed'
            };
            
            // Smart responsive overlay with device detection
            const overlay = document.createElement('div');
            overlay.className = 'project-overlay smart-modal';
            const isMobile = window.innerWidth <= 768;
            
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: rgba(0, 0, 0, ${isMobile ? '0.95' : '0.9'});
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: ${isMobile ? '10px' : '20px'};
                box-sizing: border-box;
                animation: smartFadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                backdrop-filter: blur(${isMobile ? '5px' : '10px'});
                -webkit-backdrop-filter: blur(${isMobile ? '5px' : '10px'});
                cursor: pointer;
            `;
            
            // Smart content container with adaptive sizing
            const content = document.createElement('div');
            content.style.cssText = `
                background: ${isMobile ? 
                    'linear-gradient(145deg, rgba(20, 20, 20, 0.95), rgba(40, 40, 40, 0.9))' :
                    'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))'
                };
                backdrop-filter: blur(25px);
                -webkit-backdrop-filter: blur(25px);
                color: var(--bs-body-color);
                border-radius: ${isMobile ? '15px' : '24px'};
                padding: ${isMobile ? '25px' : '45px'};
                max-width: ${isMobile ? '95vw' : '750px'};
                width: 100%;
                max-height: ${isMobile ? '90vh' : '85vh'};
                overflow-y: auto;
                position: relative;
                box-shadow: 
                    0 30px 100px rgba(0, 0, 0, 0.7),
                    inset 0 1px 0 rgba(255, 255, 255, 0.2),
                    0 0 0 1px rgba(255, 255, 255, 0.15);
                transform: scale(0.95);
                animation: smartSlideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                border: 1px solid rgba(255, 255, 255, 0.2);
                cursor: default;
                scrollbar-width: thin;
                scrollbar-color: rgba(255,255,255,0.3) transparent;
            `;
            
            // Smart enhanced content with interactive elements
            content.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 25px; flex-wrap: wrap; gap: 15px;">
                    <div style="flex: 1; min-width: 250px;">
                        <h2 style="margin: 0 0 10px 0; background: linear-gradient(135deg, var(--bs-primary), #00d4ff, #6f42c1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: 700; font-size: ${isMobile ? '24px' : '32px'}; text-shadow: 0 2px 10px rgba(0,0,0,0.3); line-height: 1.2;">${projectData.title}</h2>
                        <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 15px;">
                            <span style="background: linear-gradient(45deg, #28a745, #20c997); color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; box-shadow: 0 2px 8px rgba(40,167,69,0.3);">${projectData.status}</span>
                            <span style="background: linear-gradient(45deg, #007bff, #0056b3); color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; box-shadow: 0 2px 8px rgba(0,123,255,0.3);">${projectData.category}</span>
                            <span style="background: linear-gradient(45deg, #ffc107, #fd7e14); color: #000; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; box-shadow: 0 2px 8px rgba(255,193,7,0.3);">${projectData.complexity}</span>
                        </div>
                    </div>
                    <button id="smartCloseBtn" style="
                        background: rgba(255, 75, 75, 0.2); 
                        backdrop-filter: blur(10px);
                        border: 1px solid rgba(255, 75, 75, 0.3); 
                        font-size: ${isMobile ? '20px' : '24px'}; 
                        cursor: pointer; 
                        color: #ff4757; 
                        padding: ${isMobile ? '8px' : '12px'}; 
                        width: ${isMobile ? '40px' : '50px'}; 
                        height: ${isMobile ? '40px' : '50px'}; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                        border-radius: 50%; 
                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                        box-shadow: 0 4px 20px rgba(255, 75, 87, 0.3);
                        flex-shrink: 0;
                    " onmouseover="this.style.background='rgba(255,75,75,0.3)'; this.style.transform='scale(1.1) rotate(90deg)'; this.style.boxShadow='0 6px 25px rgba(255,75,87,0.5)'" onmouseout="this.style.background='rgba(255,75,75,0.2)'; this.style.transform='scale(1) rotate(0deg)'; this.style.boxShadow='0 4px 20px rgba(255,75,87,0.3)'">&times;</button>
                </div>
                
                ${projectData.img ? `<div style="margin-bottom: 30px; position: relative; text-align: center; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));">
                    ${projectData.img.tagName === 'VIDEO' ? 
                        `<video controls style="width: 100%; border-radius: 20px; background: #000;" onloadstart="this.style.filter='brightness(0.9)'" oncanplay="this.style.filter='brightness(1)'"><source src="${projectData.img.querySelector('source').src}" type="video/mp4"></video>
                        <div style="position: absolute; top: 15px; right: 15px; background: rgba(0,0,0,0.7); color: white; padding: 5px 10px; border-radius: 15px; font-size: 12px; backdrop-filter: blur(5px);">📹 Demo Video</div>` :
                        `<img src="${projectData.img.src}" alt="${projectData.img.alt}" style="width: 100%; border-radius: 20px; object-fit: cover; max-height: 350px; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
                        <div style="position: absolute; top: 15px; right: 15px; background: rgba(0,0,0,0.7); color: white; padding: 5px 10px; border-radius: 15px; font-size: 12px; backdrop-filter: blur(5px);">🖼️ Screenshot</div>`
                    }
                </div>` : ''}
                
                <div style="background: rgba(255,255,255,0.03); border-radius: 16px; padding: 25px; margin-bottom: 25px; border: 1px solid rgba(255,255,255,0.08);">
                    <h4 style="margin-bottom: 15px; color: var(--bs-body-color); font-weight: 600; font-size: 18px; display: flex; align-items: center; gap: 10px;">
                        <span style="font-size: 20px;">📝</span> Project Overview
                    </h4>
                    <p style="font-size: ${isMobile ? '16px' : '18px'}; line-height: 1.8; margin-bottom: 20px; color: var(--bs-body-color); opacity: 0.95; text-shadow: 0 1px 2px rgba(0,0,0,0.1);">${projectData.description}</p>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 20px;">
                        <div style="background: rgba(0,123,255,0.1); border-radius: 12px; padding: 15px; border: 1px solid rgba(0,123,255,0.2);">
                            <div style="font-size: 24px; margin-bottom: 8px;">⏱️</div>
                            <div style="font-weight: 600; margin-bottom: 4px;">Development Time</div>
                            <div style="font-size: 14px; opacity: 0.8;">${projectData.estimatedTime}</div>
                        </div>
                        <div style="background: rgba(40,167,69,0.1); border-radius: 12px; padding: 15px; border: 1px solid rgba(40,167,69,0.2);">
                            <div style="font-size: 24px; margin-bottom: 8px;">📊</div>
                            <div style="font-weight: 600; margin-bottom: 4px;">Complexity Level</div>
                            <div style="font-size: 14px; opacity: 0.8;">${projectData.complexity}</div>
                        </div>
                    </div>
                </div>
                
                <div style="margin-bottom: 30px; padding: 30px; background: linear-gradient(135deg, rgba(0,123,255,0.1), rgba(108,117,125,0.1)); border-radius: 20px; border: 1px solid rgba(255,255,255,0.1);">
                    <h4 style="margin-bottom: 25px; color: var(--bs-body-color); font-weight: 600; font-size: 20px; display: flex; align-items: center; gap: 10px;">
                        <span style="font-size: 24px;">🛠️</span> Technology Stack
                    </h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 12px;">
                        ${projectData.badges.map((badge, index) => `<span style="
                            background: linear-gradient(135deg, var(--bs-primary) 0%, #00d4ff 50%, #6f42c1 100%); 
                            color: white; 
                            padding: 12px 20px; 
                            border-radius: 25px; 
                            font-size: 15px; 
                            font-weight: 600; 
                            box-shadow: 0 8px 25px rgba(0,0,0,0.3);
                            border: 1px solid rgba(255,255,255,0.2);
                            backdrop-filter: blur(10px);
                            text-shadow: 0 1px 2px rgba(0,0,0,0.2);
                            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                            animation: techBadgeIn 0.6s ease-out ${index * 0.1}s both;
                            position: relative;
                            overflow: hidden;
                        " onmouseover="this.style.transform='translateY(-5px) scale(1.08)'; this.style.boxShadow='0 12px 35px rgba(0,0,0,0.4)'; this.style.filter='brightness(1.2)'" onmouseout="this.style.transform='translateY(0) scale(1)'; this.style.boxShadow='0 8px 25px rgba(0,0,0,0.3)'; this.style.filter='brightness(1)'">${badge}</span>`).join('')}
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 35px; padding-top: 25px; border-top: 1px solid rgba(255,255,255,0.2);">
                    <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                        <button id="smartCloseBtn2" style="
                            background: linear-gradient(135deg, #6c757d 0%, #495057 100%); 
                            color: white; 
                            border: none; 
                            padding: 15px 30px; 
                            border-radius: 12px; 
                            cursor: pointer; 
                            font-size: 16px; 
                            font-weight: 600; 
                            box-shadow: 0 8px 25px rgba(108,117,125,0.4);
                            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                            border: 1px solid rgba(255,255,255,0.2);
                            backdrop-filter: blur(10px);
                            text-shadow: 0 1px 2px rgba(0,0,0,0.2);
                            position: relative;
                            overflow: hidden;
                        " onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 12px 40px rgba(108,117,125,0.5)'; this.style.background='linear-gradient(135deg, #495057 0%, #343a40 100%)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 25px rgba(108,117,125,0.4)'; this.style.background='linear-gradient(135deg, #6c757d 0%, #495057 100)'">
                            <span style="position: relative; z-index: 1;">✕ Close Project</span>
                        </button>
                        <button onclick="window.open('https://github.com/shadmanrahman1', '_blank')" style="
                            background: linear-gradient(135deg, #28a745 0%, #20c997 100%); 
                            color: white; 
                            border: none; 
                            padding: 15px 30px; 
                            border-radius: 12px; 
                            cursor: pointer; 
                            font-size: 16px; 
                            font-weight: 600; 
                            box-shadow: 0 8px 25px rgba(40,167,69,0.4);
                            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                            border: 1px solid rgba(255,255,255,0.2);
                            backdrop-filter: blur(10px);
                            text-shadow: 0 1px 2px rgba(0,0,0,0.2);
                        " onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 12px 40px rgba(40,167,69,0.5)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 25px rgba(40,167,69,0.4)'">
                            <span>🔗 View on GitHub</span>
                        </button>
                    </div>
                </div>
            `;
            
            overlay.appendChild(content);
            document.body.appendChild(overlay);
            document.body.style.overflow = 'hidden';
            
            // Smart accessibility and focus management
            const originalFocus = document.activeElement;
            const closeBtn = content.querySelector('#smartCloseBtn');
            if (closeBtn) closeBtn.focus();
            
            console.log('Smart project details displayed:', projectData.title, `[${projectData.category} - ${projectData.complexity}]`);
            
            // Smart enhanced close functionality with multiple options
            const smartCloseProject = function(animate = true) {
                const projectOverlay = document.querySelector('.project-overlay');
                if (projectOverlay) {
                    if (animate) {
                        projectOverlay.style.animation = 'smartFadeOut 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                        content.style.animation = 'smartSlideOut 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                        setTimeout(() => {
                            if (projectOverlay.parentNode) {
                                projectOverlay.parentNode.removeChild(projectOverlay);
                            }
                        }, 300);
                    } else {
                        projectOverlay.remove();
                    }
                }
                document.body.style.overflow = '';
                if (originalFocus) originalFocus.focus();
                console.log('Smart project details closed');
            };
            
            // Smart event listeners with improved UX
            let clickTimer = null;
            
            // Smart outside click (with delay to prevent accidental closes)
            overlay.addEventListener('click', function(e) {
                if (e.target === overlay) {
                    clearTimeout(clickTimer);
                    clickTimer = setTimeout(() => smartCloseProject(), 200);
                }
            });
            
            // Prevent accidental close on content click
            content.addEventListener('click', function(e) {
                e.stopPropagation();
                clearTimeout(clickTimer);
            });
            
            // Smart button event listeners
            setTimeout(() => {
                const smartCloseBtn1 = content.querySelector('#smartCloseBtn');
                const smartCloseBtn2 = content.querySelector('#smartCloseBtn2');
                if (smartCloseBtn1) {
                    smartCloseBtn1.addEventListener('click', () => smartCloseProject());
                    smartCloseBtn1.addEventListener('mouseenter', function() {
                        this.setAttribute('title', 'Close project details (Esc)');
                    });
                }
                if (smartCloseBtn2) {
                    smartCloseBtn2.addEventListener('click', () => smartCloseProject());
                }
            }, 100);
            
            // Smart keyboard navigation
            const smartKeyHandler = function(e) {
                switch(e.key) {
                    case 'Escape':
                        smartCloseProject();
                        document.removeEventListener('keydown', smartKeyHandler);
                        break;
                    case 'Tab':
                        // Smart tab cycling within modal
                        const focusableElements = content.querySelectorAll('button, [tabindex]:not([tabindex="-1"])');
                        const firstElement = focusableElements[0];
                        const lastElement = focusableElements[focusableElements.length - 1];
                        
                        if (e.shiftKey && document.activeElement === firstElement) {
                            e.preventDefault();
                            lastElement.focus();
                        } else if (!e.shiftKey && document.activeElement === lastElement) {
                            e.preventDefault();
                            firstElement.focus();
                        }
                        break;
                }
            };
            document.addEventListener('keydown', smartKeyHandler);
            
            // Smart responsive handling
            const handleResize = () => {
                const newIsMobile = window.innerWidth <= 768;
                if (newIsMobile !== isMobile) {
                    smartCloseProject(false);
                }
            };
            window.addEventListener('resize', handleResize);
            
            // Clean up resize listener when modal closes
            const originalClose = smartCloseProject;
            smartCloseProject = function(animate = true) {
                window.removeEventListener('resize', handleResize);
                document.removeEventListener('keydown', smartKeyHandler);
                originalClose(animate);
            };
        });
    });
    
    // 5. HIDE LOADING SCREEN IMMEDIATELY
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.style.display = 'none';
        console.log('Loading screen hidden');
    } else {
        console.log('Loading screen not found');
    }
    
    console.log('Simple initialization complete');
});

// Typing Animation Function
function initTypingAnimation() {
    const typingText = document.getElementById('typing-text');
    const cursor = document.querySelector('.cursor');
    
    if (!typingText || !cursor) {
        console.warn('Typing animation elements not found');
        return;
    }
    
    const texts = [
        'Machine Learning Developer',
        'Data Science Enthusiast', 
        'Biomedical Engineering Student'
    ];
    
    let currentIndex = 0;
    let isTyping = false;
    let isErasing = false;
    
    function typeText(text, callback) {
        if (isTyping) return;
        isTyping = true;
        
        let charIndex = 0;
        typingText.textContent = '';
        
        // Add typing animation class
        typingText.classList.add('typing');
        
        const typeInterval = setInterval(() => {
            if (charIndex < text.length) {
                typingText.textContent += text.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typeInterval);
                typingText.classList.remove('typing');
                isTyping = false;
                
                // Wait before starting to erase
                setTimeout(() => {
                    if (callback) callback();
                }, 2000);
            }
        }, 100);
    }
    
    function eraseText(callback) {
        if (isErasing) return;
        isErasing = true;
        
        const currentText = typingText.textContent;
        let charIndex = currentText.length;
        
        // Add erasing animation class
        typingText.classList.add('erasing');
        
        const eraseInterval = setInterval(() => {
            if (charIndex > 0) {
                typingText.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                clearInterval(eraseInterval);
                typingText.classList.remove('erasing');
                isErasing = false;
                
                if (callback) callback();
            }
        }, 50);
    }
    
    function cycleTexts() {
        const currentText = texts[currentIndex];
        
        typeText(currentText, () => {
            eraseText(() => {
                currentIndex = (currentIndex + 1) % texts.length;
                
                // Wait before typing next text
                setTimeout(cycleTexts, 500);
            });
        });
    }
    
    // Start the animation after a brief delay
    setTimeout(() => {
        cycleTexts();
    }, 1000);
    
    console.log('Typing animation initialized');
}
