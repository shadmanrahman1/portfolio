console.log('BACKUP SCRIPT LOADED');

// EMERGENCY BACKUP - WORKS WITHOUT ANY LIBRARIES
(function() {
    'use strict';
    
    console.log('Emergency backup script running...');
    
    function addBackupFunctionality() {
        console.log('Adding backup functionality...');
        
        // Emergency navigation
        document.querySelectorAll('a[href^="#"]').forEach(function(link) {
            link.onclick = function(e) {
                e.preventDefault();
                var target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    console.log('Backup navigation to:', this.getAttribute('href'));
                    target.scrollIntoView({ behavior: 'smooth' });
                }
                return false;
            };
        });
        
        // Emergency theme switch
        var themeSwitch = document.getElementById('themeSwitch');
        if (themeSwitch) {
            themeSwitch.onchange = function() {
                var isDark = !this.checked;
                document.body.setAttribute('data-bs-theme', isDark ? 'dark' : 'light');
                console.log('Backup theme change:', isDark ? 'dark' : 'light');
            };
        }
        
        // Emergency video play
        document.querySelectorAll('.fa-play-circle').forEach(function(btn) {
            btn.onclick = function() {
                var video = this.closest('.position-relative').querySelector('video');
                if (video) {
                    video.play();
                    this.style.display = 'none';
                    console.log('Backup video play');
                }
            };
        });
        
        // Emergency button feedback
        document.querySelectorAll('button, .btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                console.log('Backup button clicked:', this.textContent.trim());
                this.style.transform = 'scale(0.95)';
                var self = this;
                setTimeout(function() {
                    self.style.transform = 'scale(1)';
                }, 100);
            });
        });
        
        console.log('Backup functionality added');
    }
    
    // Try multiple ways to initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addBackupFunctionality);
    } else {
        addBackupFunctionality();
    }
    
    // Also try after a delay
    setTimeout(addBackupFunctionality, 1000);
    setTimeout(addBackupFunctionality, 3000);
    
    // Global backup test
    window.testBackup = function() {
        console.log('Backup test running...');
        addBackupFunctionality();
        console.log('You can now test buttons manually');
    };
    
})();
