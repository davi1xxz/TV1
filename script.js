
// Theme Management
const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');
const body = document.body;

// Initialize theme
let currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    currentTheme = 'dark';
}
applyTheme(currentTheme);

function applyTheme(theme) {
    if (theme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    } else {
        body.removeAttribute('data-theme');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    }
    localStorage.setItem('theme', theme);
    currentTheme = theme;
}

themeToggle.addEventListener('click', () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
});

// Navigation Management
const navLinks = document.querySelectorAll('.nav-link');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const pages = document.querySelectorAll('.page');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const closeIcon = document.querySelector('.close-icon');

// Mobile menu toggle
mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    hamburgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});

// Page navigation
function showPage(pageId) {
    // Hide all pages
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageId + '-page');
    if (targetPage) {
        targetPage.classList.add('active');
        targetPage.classList.add('fade-in');
    }
    
    // Update active nav links
    [...navLinks, ...mobileNavLinks].forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === pageId) {
            link.classList.add('active');
        }
    });
    
    // Close mobile menu
    mobileMenu.classList.remove('active');
    hamburgerIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    
    // Update URL hash
    window.location.hash = pageId === 'inicio' ? '' : pageId;
}

// Handle navigation clicks
[...navLinks, ...mobileNavLinks].forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.dataset.page;
        showPage(pageId);
    });
});

// Handle hash changes
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1);
    const pageId = hash || 'inicio';
    showPage(pageId);
});

// Initialize page on load
window.addEventListener('load', () => {
    const hash = window.location.hash.slice(1);
    const pageId = hash || 'inicio';
    showPage(pageId);
});

// Video Player Controls
const playPauseBtn = document.getElementById('play-pause-btn');
const playBtn = document.getElementById('play-btn');
const volumeBtn = document.getElementById('volume-btn');
const volumeSlider = document.getElementById('volume-slider');
const playIcons = document.querySelectorAll('.play-icon');
const pauseIcons = document.querySelectorAll('.pause-icon');
const volumeIcon = document.querySelector('.volume-icon');
const muteIcon = document.querySelector('.mute-icon');

let isPlaying = false;
let isMuted = false;
let volume = 80;

// Play/Pause functionality
function togglePlayPause() {
    isPlaying = !isPlaying;
    
    if (isPlaying) {
        playIcons.forEach(icon => icon.classList.add('hidden'));
        pauseIcons.forEach(icon => icon.classList.remove('hidden'));
        console.log('Radio started playing');
    } else {
        playIcons.forEach(icon => icon.classList.remove('hidden'));
        pauseIcons.forEach(icon => icon.classList.add('hidden'));
        console.log('Radio paused');
    }
}

playPauseBtn.addEventListener('click', togglePlayPause);
playBtn.addEventListener('click', togglePlayPause);

// Volume controls
function toggleMute() {
    isMuted = !isMuted;
    
    if (isMuted) {
        volumeIcon.classList.add('hidden');
        muteIcon.classList.remove('hidden');
        volumeSlider.value = 0;
        console.log('Radio muted');
    } else {
        volumeIcon.classList.remove('hidden');
        muteIcon.classList.add('hidden');
        volumeSlider.value = volume;
        console.log('Radio unmuted');
    }
}

volumeBtn.addEventListener('click', toggleMute);

volumeSlider.addEventListener('input', (e) => {
    const newVolume = e.target.value;
    
    if (newVolume == 0) {
        isMuted = true;
        volumeIcon.classList.add('hidden');
        muteIcon.classList.remove('hidden');
    } else {
        isMuted = false;
        volumeIcon.classList.remove('hidden');
        muteIcon.classList.add('hidden');
        volume = newVolume;
    }
    
    console.log('Volume changed to:', newVolume);
});

// News Slider
const newsData = [
    {
        id: 1,
        title: "Nova programação da rádio estreia na próxima semana",
        summary: "Confira os novos programas que chegam para diversificar ainda mais nossa grade de programação.",
        date: "11/07/2025",
        time: "14:30",
        image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=250&fit=crop",
        category: "Programação"
    },
    {
        id: 2,
        title: "Festival de música local será transmitido ao vivo",
        summary: "Não perca a cobertura completa do maior festival de música da região, direto dos nossos estúdios.",
        date: "10/07/2025",
        time: "16:45",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
        category: "Eventos"
    },
    {
        id: 3,
        title: "Entrevista exclusiva com artista local",
        summary: "O cantor João Silva fala sobre seu novo álbum e projetos futuros em entrevista exclusiva.",
        date: "09/07/2025",
        time: "10:15",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=250&fit=crop",
        category: "Entrevistas"
    },
    {
        id: 4,
        title: "Campanha solidária arrecada doações para comunidade",
        summary: "Nossa campanha beneficente já arrecadou mais de 500 cestas básicas para famílias necessitadas.",
        date: "08/07/2025",
        time: "09:20",
        image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop",
        category: "Social"
    }
];

let currentSlide = 0;
let isAutoPlay = true;
let autoPlayInterval;

const newsSliderTrack = document.getElementById('news-slider-track');
const newsDots = document.getElementById('news-dots');
const prevNewsBtn = document.getElementById('prev-news');
const nextNewsBtn = document.getElementById('next-news');
const autoplayToggle = document.getElementById('autoplay-toggle');

// Create news slides
function createNewsSlides() {
    newsSliderTrack.innerHTML = '';
    newsDots.innerHTML = '';
    
    newsData.forEach((news, index) => {
        // Create slide
        const slide = document.createElement('div');
        slide.className = 'news-item';
        slide.innerHTML = `
            <div class="news-content">
                <div class="news-image">
                    <img src="${news.image}" alt="${news.title}" loading="lazy">
                    <div class="news-category">${news.category}</div>
                </div>
                <div class="news-text">
                    <div class="news-meta">
                        <div class="news-meta-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                <line x1="16" y1="2" x2="16" y2="6"/>
                                <line x1="8" y1="2" x2="8" y2="6"/>
                                <line x1="3" y1="10" x2="21" y2="10"/>
                            </svg>
                            <span>${news.date}</span>
                        </div>
                        <div class="news-meta-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"/>
                                <polyline points="12,6 12,12 16,14"/>
                            </svg>
                            <span>${news.time}</span>
                        </div>
                    </div>
                    <h3 class="news-title">${news.title}</h3>
                    <p class="news-summary">${news.summary}</p>
                    <button class="news-btn">Ler mais</button>
                </div>
            </div>
        `;
        newsSliderTrack.appendChild(slide);
        
        // Create dot
        const dot = document.createElement('button');
        dot.className = `news-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        newsDots.appendChild(dot);
    });
}

// Navigation functions
function goToSlide(index) {
    currentSlide = index;
    updateSlider();
    updateDots();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % newsData.length;
    updateSlider();
    updateDots();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + newsData.length) % newsData.length;
    updateSlider();
    updateDots();
}

function updateSlider() {
    const translateX = -currentSlide * 100;
    newsSliderTrack.style.transform = `translateX(${translateX}%)`;
}

function updateDots() {
    const dots = document.querySelectorAll('.news-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Auto play functionality
function startAutoPlay() {
    if (isAutoPlay) {
        autoPlayInterval = setInterval(nextSlide, 5000);
    }
}

function stopAutoPlay() {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
    }
}

function toggleAutoPlay() {
    isAutoPlay = !isAutoPlay;
    autoplayToggle.textContent = isAutoPlay ? 'Pausar' : 'Reproduzir';
    
    if (isAutoPlay) {
        startAutoPlay();
    } else {
        stopAutoPlay();
    }
}

// Event listeners
prevNewsBtn.addEventListener('click', prevSlide);
nextNewsBtn.addEventListener('click', nextSlide);
autoplayToggle.addEventListener('click', toggleAutoPlay);

// Pause autoplay on hover
newsSliderTrack.addEventListener('mouseenter', stopAutoPlay);
newsSliderTrack.addEventListener('mouseleave', () => {
    if (isAutoPlay) startAutoPlay();
});

// Initialize news slider
createNewsSlides();
startAutoPlay();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.stat-card, .news-card, .schedule-item, .team-member, .value-card');
    animateElements.forEach(el => observer.observe(el));
});

// Handle window resize
window.addEventListener('resize', () => {
    // Close mobile menu on resize
    if (window.innerWidth > 768) {
        mobileMenu.classList.remove('active');
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
});

// Console welcome message
console.log('🎵 WebRadio - Sua Rádio Online');
console.log('📻 Sistema carregado com sucesso!');
console.log('🔊 Todos os controles funcionando perfeitamente');

// Error handling
window.addEventListener('error', (e) => {
    console.error('Erro capturado:', e);
});

// Performance monitoring
window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`⚡ Página carregada em ${Math.round(loadTime)}ms`);
});
