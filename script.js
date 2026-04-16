const navItems = document.querySelectorAll('.nav-item');
const homeAssets = document.getElementById('home-assets');
const aboutAssets = document.getElementById('about-assets');
const expAssets = document.getElementById('experience-assets');

// === 1. LOGIKA NAVIGASI ===
navItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault(); 
        
        const target = this.getAttribute('data-target');

        // Update Navigasi Active Class
        navItems.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');

        // Reset semua ke Hidden dulu
        homeAssets.classList.add('hidden');
        aboutAssets.classList.add('hidden');
        expAssets.classList.add('hidden');

        // Pindah Halaman Berdasarkan Target
        if (target === 'home') {
            homeAssets.classList.remove('hidden');
        } else if (target === 'about') {
            aboutAssets.classList.remove('hidden');
        } else if (target === 'experience') {
            expAssets.classList.remove('hidden');
        }
        
        window.scrollTo(0, 0);
    });
});

// === 2. MUSIC PLAYER LOGIC ===
const audioSpistols = document.getElementById('audio-spistols');
const audioBeatles = document.getElementById('audio-beatles');

const btnMulai1 = document.querySelector('.asset-mulai1');
const btnJeda1 = document.querySelector('.asset-jeda1');
const vinyl1 = document.querySelector('.asset-vinyl');

const btnMulai2 = document.querySelector('.asset-mulai2');
const btnJeda2 = document.querySelector('.asset-jeda2');
const vinyl2 = document.querySelector('.asset-vinyl2');

// Fungsi untuk Play/Pause via Klik Tombol
function toggleMusic(targetAudio, targetMulai, targetJeda, targetVinyl, otherAudio, otherMulai, otherJeda, otherVinyl) {
    if (targetAudio.paused) {
        otherAudio.pause();
        otherMulai.classList.remove('hidden');
        otherJeda.classList.add('hidden');
        otherVinyl.classList.remove('spinning');

        targetAudio.play();
        targetMulai.classList.add('hidden'); 
        targetJeda.classList.remove('hidden'); 
        targetVinyl.classList.add('spinning'); 
    } else {
        targetAudio.pause();
        targetMulai.classList.remove('hidden');
        targetJeda.classList.add('hidden');
        targetVinyl.classList.remove('spinning');
    }
}

// === FIX: Auto-reset saat lagu habis ===
function handleMusicEnded(audio, btnMulai, btnJeda, vinyl) {
    audio.addEventListener('ended', () => {
        btnMulai.classList.remove('hidden');
        btnJeda.classList.add('hidden');
        vinyl.classList.remove('spinning');
    });
}

// Pasang Event Listener Klik
btnMulai1.addEventListener('click', () => toggleMusic(audioSpistols, btnMulai1, btnJeda1, vinyl1, audioBeatles, btnMulai2, btnJeda2, vinyl2));
btnJeda1.addEventListener('click', () => toggleMusic(audioSpistols, btnMulai1, btnJeda1, vinyl1, audioBeatles, btnMulai2, btnJeda2, vinyl2));
btnMulai2.addEventListener('click', () => toggleMusic(audioBeatles, btnMulai2, btnJeda2, vinyl2, audioSpistols, btnMulai1, btnJeda1, vinyl1));
btnJeda2.addEventListener('click', () => toggleMusic(audioBeatles, btnMulai2, btnJeda2, vinyl2, audioSpistols, btnMulai1, btnJeda1, vinyl1));

// Jalankan fungsi auto-reset
handleMusicEnded(audioSpistols, btnMulai1, btnJeda1, vinyl1);
handleMusicEnded(audioBeatles, btnMulai2, btnJeda2, vinyl2);


// === 3. LOGIKA SCROLL ASSETS ===
const paulImage = document.querySelector('.asset-paul');
const kuliahImage = document.querySelector('.asset-kuliah');
const deviceImage = document.querySelector('.asset-device');
const laptopImage = document.querySelector('.asset-laptop');
const hpImage = document.querySelector('.asset-hp');
const textdeviceText = document.querySelector('.experience-textdevice');

window.addEventListener('scroll', function() {
    let scrollPos = window.scrollY;
    
    if (paulImage) {
        if (scrollPos > 200) paulImage.classList.add('active-scroll');
        else paulImage.classList.remove('active-scroll');
    }

    if (kuliahImage) {
        if (scrollPos > 190) kuliahImage.classList.add('active-scroll');
        else kuliahImage.classList.remove('active-scroll');
    }

    if (deviceImage) {
        // Logika muncul saat scroll sedikit (angka 100 bisa diatur sesuai selera)
        if (scrollPos > 100) deviceImage.classList.add('active-scroll');
        else deviceImage.classList.remove('active-scroll');
    }

    if (laptopImage) {
        // Logika muncul saat scroll sedikit (angka 100 bisa diatur sesuai selera)
        if (scrollPos > 100) laptopImage.classList.add('active-scroll');
        else laptopImage.classList.remove('active-scroll');
    }

    if (hpImage) {
        // Logika muncul saat scroll sedikit (angka 100 bisa diatur sesuai selera)
        if (scrollPos > 100) hpImage.classList.add('active-scroll');
        else hpImage.classList.remove('active-scroll');
    }

    if (textdeviceText) {
        // Logika muncul saat scroll sedikit (angka 100 bisa diatur sesuai selera)
        if (scrollPos > 100) textdeviceText.classList.add('active-scroll');
        else textdeviceText.classList.remove('active-scroll');
    }

});

// Efek Shake Paul
if (paulImage) {
    paulImage.addEventListener('click', function() {
        if (this.classList.contains('shaking')) return;
        this.classList.add('shaking');
        setTimeout(() => this.classList.remove('shaking'), 800);
    });
}

// === 4. LOGIKA SPIDERMAN (KLIK -> GANTI GAMBAR -> GETAR) ===
const spiderAman = document.querySelector('.asset-spidermanaman');
const spiderTakut = document.querySelector('.asset-spidermantakut');

spiderAman.addEventListener('click', () => {
    // 1. Langsung tukar gambar dan nyalakan getar
    spiderAman.style.display = 'none';
    spiderTakut.classList.add('shaking');

    setTimeout(() => {
        // 2. Langsung kembalikan ke kondisi semula tanpa efek apapun
        spiderTakut.classList.remove('shaking');
        spiderTakut.style.display = 'none';
        spiderAman.style.display = 'block';
        
    }, 600); // Sesuai durasi kaget yang kamu mau
});