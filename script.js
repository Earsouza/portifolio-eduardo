// Rolagem suave para seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Fechar menu móvel após clicar em um link
        document.querySelector('nav ul').classList.remove('active');
        document.querySelector('.menu-toggle').classList.remove('active');
    });
});

// Toggle menu móvel
document.querySelector('.menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('nav ul').classList.toggle('active');
});

const text = "Criação de Landing Pages e Soluções Digitais";
        const typingElement = document.getElementById("typing");
        let index = 0;

        function typeText() {
            if (index < text.length) {
                typingElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeText, 100);
            } else {
                typingElement.style.borderRight = "none"; // Remove o cursor ao final
            }
        }

        setTimeout(typeText, 500);

// Validação de formulário simples
document.querySelector('.contato-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    this.reset();
});

// Existing smooth scroll and mobile menu toggle code remains the same

// Add a subtle tech-inspired interaction for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        // Create a small visual effect on hover
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.2s ease';
    });

    link.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Optional: Add a console-like effect to logo
const logoIcon = document.querySelector('.logo-icon');
const consoleEffects = ['🖥️', '💻', '⌨️', '🔧'];
let effectIndex = 0;

logoIcon.addEventListener('click', function() {
    this.textContent = consoleEffects[effectIndex];
    effectIndex = (effectIndex + 1) % consoleEffects.length;
});

