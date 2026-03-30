window.addEventListener('scroll', function() {
    const scrollValue = window.scrollY;
    const logoBackground = document.querySelector('.hero-bg-logo');
    
    // Angka 0.2 menentukan kecepatan gerak. 
    // Semakin kecil angkanya, semakin lambat/halus gerakannya (efek kedalaman).
    if (logoBackground) {
        logoBackground.style.transform = `translateY(${scrollValue * 0.2}px)`;
    }
});
// --- Inisialisasi Pustaka Animate On Scroll (AOS) ---
// Letakkan ini di bagian paling atas atau paling bawah file script.js Anda
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        // Pengaturan Global:
        offset: 120, // Jarak (px) dari offset asli untuk memicu animasi
        delay: 0, // Nilai delay (ms), dari 0 hingga 3000
        duration: 800, // Durasi animasi (ms), dari 0 hingga 3000
        easing: 'ease-out-cubic', // Easing default untuk animasi AOS
        once: true, // Apakah animasi hanya terjadi sekali saat di-scroll ke bawah
        mirror: false, // Apakah elemen harus beranimasi keluar saat di-scroll melewati layar
        anchorPlacement: 'top-bottom', // Menentukan posisi elemen relatif terhadap layar untuk memicu animasi
    });
});


// --- Kode Parallax Lama Anda (Tetap Dipertahankan) ---
window.addEventListener('scroll', function() {
    const scrollValue = window.scrollY;
    const logoBackground = document.querySelector('.hero-bg-logo');
    
    if (logoBackground) {
        logoBackground.style.transform = `translateY(${scrollValue * 0.2}px)`;
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // 1. Inisialisasi AOS (Animate on Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out'
    });

    // 2. Hamburger Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // Animasi simpel garis hamburger
            hamburger.style.opacity = '0.7';
            setTimeout(() => hamburger.style.opacity = '1', 100);
        });
    }

    // Tutup menu saat link diklik
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // 3. Parallax Hero Background (Kode lama Anda yang dioptimasi)
    window.addEventListener('scroll', function() {
        const scrollValue = window.scrollY;
        const logoBackground = document.querySelector('.hero-bg-logo');
        if (logoBackground) {
            logoBackground.style.transform = `translateY(${scrollValue * 0.3}px)`;
        }
    });
});