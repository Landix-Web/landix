document.addEventListener('DOMContentLoaded', () => {

    // Animación de aparición al hacer scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.appear-animation').forEach(element => {
        observer.observe(element);
    });

    // Validar y enviar formulario de contacto
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Lógica para enviar el formulario a un servicio de backend.
            alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
            contactForm.reset();
        });
    }

});