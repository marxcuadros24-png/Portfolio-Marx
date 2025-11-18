// ===== INICIALIZAR AOS (ANIMATE ON SCROLL) =====
AOS.init({
    duration: 1000,
    once: false,
    mirror: true,
    offset: 100
});

// ===== CONFIGURAR PARTICLES.JS =====
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ['#00fff7', '#00ff88', '#ff00ff']
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#00fff7',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 0.5
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// ===== SMOOTH SCROLL PARA NAVEGACIÓN =====
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Remover clase active de todos los links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        // Agregar clase active al link clickeado
        this.classList.add('active');
        
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// ===== HIGHLIGHT ACTIVO EN NAV AL SCROLL =====
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 300)) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== EFECTO DE ESCRITURA (TYPING) =====
const texts = [
    'Creando experiencias digitales únicas',
    'Transformando ideas en código',
    'Innovación y creatividad'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const typingElement = document.querySelector('.typing-text');
    const currentText = texts[textIndex];
    
    if (!isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex);
        charIndex++;
        
        if (charIndex > currentText.length) {
            isDeleting = true;
            typingSpeed = 50;
            setTimeout(typeEffect, 2000);
            return;
        }
    } else {
        typingElement.textContent = currentText.substring(0, charIndex);
        charIndex--;
        
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 100;
            setTimeout(typeEffect, 500);
            return;
        }
    }
    
    setTimeout(typeEffect, typingSpeed);
}

// Iniciar efecto de escritura cuando cargue la página
window.addEventListener('load', () => {
    setTimeout(typeEffect, 1000);
});

// ===== ANIMACIÓN DE SKILLS AL HACER HOVER =====
document.querySelectorAll('.skill-item').forEach(skill => {
    skill.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) rotate(3deg)';
    });
    
    skill.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotate(0)';
    });
});


// ===== CONTADOR DE ANIMACIÓN PARA ESTADÍSTICAS (OPCIONAL) =====
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// ===== EFECTOS DE CURSOR PERSONALIZADO (OPCIONAL) =====
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
cursor.style.cssText = `
    width: 20px;
    height: 20px;
    border: 2px solid #00fff7;
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s;
    display: none;
`;
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
    cursor.style.display = 'block';
});

// Agrandar cursor en hover de links
document.querySelectorAll('a, button, .skill-item').forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
        cursor.style.backgroundColor = 'rgba(0, 255, 247, 0.2)';
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.backgroundColor = 'transparent';
    });
});

// ===== EFECTO DE BRILLO EN PROJECT CARDS =====
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// ===== PRELOADER (OPCIONAL) =====
window.addEventListener('load', () => {
    document.body.style.overflow = 'auto';
    console.log('Portfolio cargado con éxito!');
    console.log('Desarrollado por Marx Cuadros');
});

// ===== DETECTAR TEMA DEL SISTEMA (OPCIONAL) =====
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.log('🌙 Modo oscuro detectado');
}

// ===== EASTER EGG: MENSAJE EN CONSOLA =====
console.log('%c¡Hola Developer! ', 'color: #00fff7; font-size: 20px; font-weight: bold;');
console.log('%c¿Curioseando el código? Me gusta tu estilo ', 'color: #00ff88; font-size: 14px;');
console.log('%cContáctame: marxcuadros24@gmail.com', 'color: #ff00ff; font-size: 12px;');