document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach((link) => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'scale(1.1)';
            link.style.transition = 'transform 0.3s';
        });

        link.addEventListener('mouseleave', () => {
            link.style.transform = 'scale(1)';
            link.style.transition = 'transform 0.3s';
        });
    });

    const photoCards = document.querySelectorAll('.photo-card');
    photoCards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'rotateY(180deg)';
            card.style.transition = 'transform 0.5s';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateY(0deg)';
            card.style.transition = 'transform 0.5s';
        });
    });
    
});
