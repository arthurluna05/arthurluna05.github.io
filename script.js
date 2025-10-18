document.addEventListener('DOMContentLoaded', () => {
    // Efeito de Digitação
    const subtitle = document.getElementById('subtitle');
    const roles = [
        "Desenvolvedor Backend",
        "Especialista em Automação",
        "Entusiasta de IA & GenAI",
        "Focado em Java & Python"
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentRole = roles[roleIndex];
        let displayText = '';

        if (isDeleting) {
            displayText = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            displayText = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        subtitle.textContent = displayText;

        let typeSpeed = 100;

        if (isDeleting) {
            typeSpeed /= 2;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            // Pausa no final da palavra
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();


    // Marcar link da Nav como ativo ao rolar
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});