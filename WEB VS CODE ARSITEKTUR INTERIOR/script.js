window.addEventListener('scroll', function() {
    const scrollValue = window.scrollY;
    const logoBackground = document.querySelector('.hero-bg-logo');
    
    // Angka 0.2 menentukan kecepatan gerak. 
    // Semakin kecil angkanya, semakin lambat/halus gerakannya (efek kedalaman).
    if (logoBackground) {
        logoBackground.style.transform = `translateY(${scrollValue * 0.2}px)`;
    }
});