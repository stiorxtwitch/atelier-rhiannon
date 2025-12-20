// Animation au scroll et au chargement
function checkVisibility() {
    document.querySelectorAll('main section').forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            sec.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility); // Au chargement

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

if (lightbox && lightboxImg) {
    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.classList.add('active');
        });
    });
    lightbox.addEventListener('click', () => lightbox.classList.remove('active'));
}

// Lien actif menu
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(a => {
    if (a.getAttribute('href') === currentPage) a.classList.add('active');
});
