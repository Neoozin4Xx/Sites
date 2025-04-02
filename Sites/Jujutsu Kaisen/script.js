document.addEventListener('DOMContentLoaded', function () {
    // Mobile Navigation Toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Expandable Content
    const expandBtns = document.querySelectorAll('.expand-btn');

    expandBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const expandedContent = btn.nextElementSibling;

            if (expandedContent.style.display === 'block') {
                expandedContent.style.display = 'none';
                btn.textContent = 'Learn More';
            } else {
                expandedContent.style.display = 'block';
                btn.textContent = 'Show Less';
            }
        });
    });

    // Character Tab Switching
    const characterBtns = document.querySelectorAll('.character-btn');
    const charInfoPanels = document.querySelectorAll('.char-info-panel');

    characterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and panels
            characterBtns.forEach(button => button.classList.remove('active'));
            charInfoPanels.forEach(panel => panel.classList.remove('active'));

            // Add active class to clicked button
            btn.classList.add('active');

            // Get the character data attribute and show corresponding panel
            const character = btn.getAttribute('data-character');
            document.getElementById(`${character}-info`).classList.add('active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});