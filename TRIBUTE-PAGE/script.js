

document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });


    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const parallax = document.body;
        const speed = scrolled * 0.5;
        parallax.style.backgroundPosition = `center ${speed}px`;
    });

    document.querySelectorAll('.timeline-item').forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });

        item.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });


    document.querySelectorAll('.quality-card').forEach(card => {
        card.addEventListener('click', function () {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-10px)';
            }, 100);
        });
    });

    const title = document.querySelector('.header h1');
    const titleText = title.textContent;
    title.textContent = '';

    let i = 0;
    const typeWriter = () => {
        if (i < titleText.length) {
            title.textContent += titleText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };

    setTimeout(typeWriter, 500);


    document.querySelectorAll('.quality-icon').forEach(icon => {
        icon.style.animation = 'float 3s ease-in-out infinite';
    });


    const style = document.createElement('style');
    style.textContent = `
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
            `;
    document.head.appendChild(style);


    let clickCount = 0;
    document.addEventListener('click', function () {
        clickCount++;
        if (clickCount === 10) {
            alert('Thank you for exploring Marie Curie\'s inspiring story! 🌟');
        }
    });


    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowDown') {
            window.scrollBy(0, 100);
        } else if (e.key === 'ArrowUp') {
            window.scrollBy(0, -100);
        }
    });

    const facts = [
        "Marie Curie's notebooks are still radioactive and will be for another 1,500 years!",
        "She was the first woman professor at the University of Paris.",
        "The element Curium (Cm) was named in honor of Marie and Pierre Curie.",
        "She founded the field of atomic physics.",
        "Marie Curie was the first woman to be entombed on her own merits in the Panthéon in Paris."
    ];


    document.addEventListener('dblclick', function () {
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        alert(`Did you know? ${randomFact}`);
    });
});


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


window.addEventListener('scroll', function () {
    if (window.pageYOffset > 300) {
        if (!document.querySelector('.scroll-top')) {
            const scrollBtn = document.createElement('button');
            scrollBtn.innerHTML = '↑';
            scrollBtn.className = 'scroll-top';
            scrollBtn.style.cssText = `
                        position: fixed;
                        bottom: 20px;
                        right: 20px;
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        border: none;
                        background: linear-gradient(135deg, #667eea, #764ba2);
                        color: white;
                        font-size: 20px;
                        cursor: pointer;
                        z-index: 1000;
                        transition: all 0.3s ease;
                        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                    `;
            scrollBtn.onclick = scrollToTop;
            document.body.appendChild(scrollBtn);
        }
    } else {
        const scrollBtn = document.querySelector('.scroll-top');
        if (scrollBtn) {
            scrollBtn.remove();
        }
    }
});