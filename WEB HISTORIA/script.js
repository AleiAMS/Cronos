/* --- 1. BASE DE DATOS DE HISTORIA --- */
const eventos = [
    {
        year: "27 a.C. - 476 d.C.",
        title: "El Imperio Romano",
        color: "rgba(212, 175, 55, 0.3)", // LUZ DORADA
        desc: "La historia completa: desde el asesinato de César hasta la caída de Occidente, pasando por el Coliseo y los grandes emperadores.",
        details: `
            <strong>El fin de la República</strong><br>
            Para empezar debemos tener en cuenta que Roma fue uno de los imperios más grandes de la historia. Todo cambió con Julio César, quien usó su poderoso ejército para alzarse al poder. Aunque el Senado seguía existiendo, era solo una fachada. Su asesinato tenía como objetivo volver a la República, pero ocurrió totalmente lo contrario: inició una búsqueda del Imperio perfecto y una guerra civil donde su hijo adoptivo, Augusto, se enfrentó a Marco Antonio.<br><br>
            
            <strong>Augusto y el inicio del Imperio</strong><br>
            Augusto se encargó de eliminar a sus opositores y estableció la paz. Su gobierno fue tan exitoso que le concedieron el título de "Augusto" por haber traído felicidad a los romanos. A su muerte, estableció que el poder sería hereditario, creando así las dinastías, comenzando por la Julio-Claudia.<br><br>
            
            <strong>La Decadencia de Nerón</strong><br>
            Pero tener elecciones de líder por sangre no siempre traía suerte. Nerón, el último descendiente de Augusto, empezó el declive. Mató a su propia familia para mantener el poder y lo usó para su disfrute personal, dejando desatendido el Imperio. Aunque construyó la Domus Aurea, las revueltas provocaron que ordenara su propia muerte.<br><br>
            
            <strong>El Coliseo y los Flavios</strong><br>
            Tras el caos, Vespasiano salió ganador y fundó la dinastía Flavia. Él comenzó el Coliseo en el año 72 d.C. y su hijo Tito lo terminó en el 80 d.C. Al principio tenía otro nombre, Anfiteatro Flavio, pero se le empezó a llamar Coliseo por una estatua de Nerón que había cerca.<br><br>
            
            <strong>La Edad Dorada</strong><br>
            Con los Antoninos llegó el mejor momento de Roma. Destacaron los hispanos Trajano y Adriano. Trajano consiguió la máxima extensión territorial del imperio. Adriano fue la mezcla perfecta entre pensador y guerrero; amante de la cultura griega y la filosofía, enriqueció el imperio con arte mientras defendía las fronteras.<br><br>
            
            <strong>La Caída</strong><br>
            Finalmente, tras siglos de dominio rodeando todo el Mediterráneo, el Imperio cayó en Occidente en el año 476. Sin embargo, la parte oriental resistiría hasta 1453.
        `,
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80"
    },
    {
        year: "1985 - 1991",
        title: "La Caída de la URSS",
        color: "rgba(255, 0, 60, 0.25)", // LUZ ROJA
        desc: "El colapso de la superpotencia: crisis, Chernóbil, la Cadena Báltica, el golpe de estado y el fin de la Guerra Fría.",
        details: `
            <strong>La Era del Estancamiento y la "Ley Seca"</strong><br>
            Para comprender la implosión de la Unión Soviética, hay que mirar más allá de 1991. Durante décadas, la URSS mantuvo una fachada de superpotencia militar, gastando hasta el 20% de su PIB en defensa para competir con la "Guerra de las Galaxias" de Reagan, mientras su economía interna se pudría. La caída de los precios del petróleo en los años 80 fue un golpe mortal. Además, una de las primeras medidas de Gorbachov fue un error fatal: la campaña contra el alcohol. Intentó reducir el consumo de vodka para mejorar la salud, pero solo logró destruir una fuente clave de ingresos fiscales y disparar la producción ilegal de alcohol casero (samogon) y el mercado negro.<br><br>

            <strong>Gorbachov: Perestroika y Glásnost</strong><br>
            En este contexto crítico, en 1985 asumió el poder Mijaíl Gorbachov. Lanzó la "Perestroika" (reestructuración económica) y la "Glásnost" (transparencia). Sin embargo, Gorbachov subestimó las consecuencias: al permitir la libertad de expresión, el pueblo no agradeció las reformas, sino que aprovechó para ventilar décadas de resentimiento. Se empezaron a publicar libros prohibidos (como Archipiélago Gulag) y se denunciaron abiertamente los crímenes de Stalin, destruyendo la legitimidad moral del Partido Comunista.<br><br>
            
            <strong>El Fin de la Inocencia: Chernóbil y Afganistán</strong><br>
            Dos eventos catastróficos aceleraron la desmoralización. Primero, la interminable Guerra de Afganistán, el "Vietnam soviético", que mató a 15.000 soldados y desangró el presupuesto. Segundo, el accidente nuclear de Chernóbil en 1986. El gobierno tardó días en admitir la catástrofe ante el mundo y su propio pueblo. La radiación no solo envenenó el aire, sino la confianza en el sistema: los ciudadanos comprendieron que sus líderes les mentían incluso ante la muerte.<br><br>

            <strong>La Cadena Báltica y el Despertar Nacional</strong><br>
            Aprovechando la debilidad de Moscú, los nacionalismos estallaron. En 1989, cayó el Muro de Berlín y Gorbachov se negó a intervenir. Esto inspiró a las repúblicas soviéticas. El momento cumbre fue la "Cadena Báltica" del 23 de agosto de 1989: dos millones de personas se tomaron de las manos formando una cadena humana de 600 km que cruzó Estonia, Letonia y Lituania exigiendo libertad. Fue una protesta pacífica que dejó al Kremlin sin respuesta.<br><br>

            <strong>El Golpe de Estado y "El Lago de los Cisnes"</strong><br>
            En agosto de 1991, la línea dura de la KGB y el ejército intentó un golpe de estado desesperado. Secuestraron a Gorbachov en Crimea y sacaron los tanques a Moscú. En un acto de censura surrealista, todas las televisiones del país dejaron de emitir noticias y pusieron en bucle el ballet "El Lago de los Cisnes". Pero el pueblo ya no tenía miedo. Boris Yeltsin, presidente de Rusia, se subió a un tanque frente al Parlamento y lideró la resistencia. Las manos temblorosas del líder golpista Yanayev en televisión mostraron la debilidad del régimen.<br><br>

            <strong>El Tratado del Bosque y el Maletín Nuclear</strong><br>
            El golpe fracasó, pero la URSS estaba muerta. El 8 de diciembre, los líderes de Rusia, Ucrania y Bielorrusia se reunieron en secreto en un refugio de caza en el bosque de Belavezha. Allí, a espaldas de Gorbachov, firmaron la disolución legal de la Unión Soviética. El 25 de diciembre de 1991, Gorbachov dimitió. En un traspaso de poder dramático, entregó el "Cheget" (el maletín con los códigos nucleares) a Boris Yeltsin. A las 19:32, la bandera roja fue arriada del Kremlin por última vez. La Guerra Fría había terminado.
        `,
        image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=800&q=80"
    }
];

// Esperar a que cargue todo el HTML
document.addEventListener('DOMContentLoaded', () => {

    /* --- 2. GESTIÓN DEL TEMA (PERSISTENTE) --- */
    const btnTheme = document.getElementById('btn-theme-toggle');
    // Recuperar tema guardado
    const savedTheme = localStorage.getItem('cronos-theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if(btnTheme) btnTheme.textContent = '☀️';
    }

    if (btnTheme) {
        btnTheme.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            btnTheme.textContent = isDark ? '☀️' : '🌙';
            localStorage.setItem('cronos-theme', isDark ? 'dark' : 'light');
        });
    }

    /* --- 3. PRELOADER Y TÍTULO MATRIX --- */
    const removePreloader = () => {
        document.body.classList.add('loaded');
        document.body.classList.remove('loading');
    };
    setTimeout(removePreloader, 1000); // 1 segundo de carga mínima

    // Efecto Matrix en Título Principal
    const textElement = document.querySelector(".gradient-text");
    if(textElement) {
        const originalText = textElement.innerText;
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&";
        let iteration = 0;
        let interval = setInterval(() => {
            textElement.innerText = originalText.split("").map((letter, index) => {
                if(index < iteration) return originalText[index];
                return letters[Math.floor(Math.random() * letters.length)];
            }).join("");
            if(iteration >= originalText.length) clearInterval(interval);
            iteration += 1 / 3; 
        }, 30);
    }

    /* --- 4. SCROLL SUAVE (LENIS) --- */
    // Verificamos si Lenis está cargado para evitar errores
    let lenis;
    if (typeof Lenis !== 'undefined') {
        lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smooth: true });
        function raf(time) { 
            lenis.raf(time); 
            requestAnimationFrame(raf); 
        }
        requestAnimationFrame(raf);
    }

    /* --- 5. SISTEMA DE PARTÍCULAS COMPLETO --- */
    const canvas = document.getElementById('particles-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        let particlesArray = [];
        const numberOfParticles = 80;
        const isMobile = window.innerWidth <= 768;
        
        // Ratón para partículas
        let particleMouse = { x: null, y: null, radius: 150 };
        
        window.addEventListener('mousemove', (e) => {
            particleMouse.x = e.x;
            particleMouse.y = e.y;
        });

        window.addEventListener('resize', () => { 
            canvas.width = window.innerWidth; 
            canvas.height = window.innerHeight; 
            initParticles(); 
        });
        
        class Particle {
            constructor() { 
                this.x = Math.random() * canvas.width; 
                this.y = Math.random() * canvas.height; 
                this.size = Math.random() * 2 + 1; 
                this.speedX = (Math.random() * 0.5) - 0.25; 
                this.speedY = (Math.random() * 0.5) - 0.25; 
            }
            update() { 
                // Efecto Warp Speed al hacer scroll
                let warpSpeed = 0;
                if (lenis && lenis.velocity) {
                    warpSpeed = lenis.velocity * 0.5;
                }

                this.x += this.speedX;
                this.y += this.speedY + warpSpeed;
                
                // Reposicionar si salen de pantalla
                if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;

                // Conexiones neuronales (SOLO EN PC)
                if (!isMobile && particleMouse.x != null) {
                    let dx = particleMouse.x - this.x;
                    let dy = particleMouse.y - this.y;
                    let distance = Math.sqrt(dx*dx + dy*dy);
                    
                    if (distance < particleMouse.radius) {
                        ctx.beginPath();
                        const isDark = document.body.classList.contains('dark-mode'); 
                        // Color dinámico según tema
                        let color = isDark ? '255,255,255' : '212,175,55';
                        ctx.strokeStyle = `rgba(${color}, ${1 - distance/particleMouse.radius})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(this.x, this.y);
                        ctx.lineTo(particleMouse.x, particleMouse.y);
                        ctx.stroke();
                    }
                }
            }
            draw() { 
                const isDark = document.body.classList.contains('dark-mode'); 
                ctx.fillStyle = isDark ? '#ffffff' : '#d4af37'; 
                ctx.globalAlpha = 0.6; 
                ctx.beginPath(); 
                
                // Si hay velocidad de scroll, estiramos la partícula
                let stretch = 0;
                if(lenis && lenis.velocity) stretch = Math.abs(lenis.velocity) * 0.5;
                
                if(stretch > 1) {
                    ctx.fillRect(this.x, this.y, this.size, this.size + stretch);
                } else {
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); 
                }
                ctx.fill(); 
            }
        }

        function initParticles() { 
            particlesArray = []; 
            for (let i = 0; i < numberOfParticles; i++) { 
                particlesArray.push(new Particle()); 
            } 
        }
        
        function animateParticles() { 
            ctx.clearRect(0, 0, canvas.width, canvas.height); 
            for (let i = 0; i < particlesArray.length; i++) { 
                particlesArray[i].update(); 
                particlesArray[i].draw(); 
            } 
            requestAnimationFrame(animateParticles); 
        }
        
        initParticles(); 
        animateParticles();
    }

    /* --- 6. CURSOR PERSONALIZADO (Solo PC) --- */
    if (window.innerWidth > 768) {
        const cursorDot = document.querySelector('[data-cursor-dot]');
        const cursorOutline = document.querySelector('[data-cursor-outline]');
        if (cursorDot && cursorOutline) {
            let mouseX = 0, mouseY = 0;
            let cursorX = 0, cursorY = 0;
            
            window.addEventListener('mousemove', (e) => { 
                mouseX = e.clientX; mouseY = e.clientY; 
                cursorDot.style.left = `${mouseX}px`; 
                cursorDot.style.top = `${mouseY}px`; 
            });
            
            window.addEventListener('mousedown', () => document.body.classList.add('clicking'));
            window.addEventListener('mouseup', () => document.body.classList.remove('clicking'));
            
            function animateCursor() { 
                const speed = 0.15; 
                cursorX += (mouseX - cursorX) * speed; 
                cursorY += (mouseY - cursorY) * speed; 
                cursorOutline.style.left = `${cursorX}px`; 
                cursorOutline.style.top = `${cursorY}px`; 
                requestAnimationFrame(animateCursor); 
            }
            animateCursor();
            
            // Hover states
            document.querySelectorAll('a, button, .card, .modal-close-btn, #search-input').forEach(el => { 
                el.addEventListener('mouseenter', () => document.body.classList.add('hovering')); 
                el.addEventListener('mouseleave', () => document.body.classList.remove('hovering')); 
            });
        }
    }

    /* --- 7. NAVEGACIÓN Y PANTALLAS --- */
    const viewHome = document.getElementById('home-view');
    const viewTimeline = document.getElementById('timeline-view');
    const btnHome = document.getElementById('btn-home');
    const btnTimeline = document.getElementById('btn-timeline');
    const btnStart = document.getElementById('btn-start');
    
    // Función para cambiar de pantalla
    function cambiarPantalla(pantalla) {
        if (!viewHome || !viewTimeline) return;
        
        if (pantalla === 'home') {
            viewHome.classList.remove('hidden'); 
            viewTimeline.classList.add('hidden');
            if(btnHome) btnHome.classList.add('active'); 
            if(btnTimeline) btnTimeline.classList.remove('active');
            window.scrollTo(0,0);
        } else {
            viewHome.classList.add('hidden'); 
            viewTimeline.classList.remove('hidden');
            if(btnHome) btnHome.classList.remove('active'); 
            if(btnTimeline) btnTimeline.classList.add('active');
            window.scrollTo(0,0);
            
            // Resetear visibilidad de tarjetas para animarlas de nuevo
            const cards = document.querySelectorAll('.card');
            cards.forEach(c => c.classList.remove('visible'));
        }
    }

    if(btnHome) btnHome.addEventListener('click', (e) => { e.preventDefault(); cambiarPantalla('home'); });
    if(btnTimeline) btnTimeline.addEventListener('click', (e) => { e.preventDefault(); cambiarPantalla('timeline'); });
    if(btnStart) btnStart.addEventListener('click', () => { cambiarPantalla('timeline'); });

    /* --- 8. MODAL (Pop-up) --- */
    const modalOverlay = document.getElementById('modal-overlay');
    const modalBody = document.getElementById('modal-body-content');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    function abrirModal(evento) {
        if (!modalOverlay || !modalBody) return;
        modalBody.innerHTML = `
            <span class="card-year">${evento.year}</span>
            <h2>${evento.title}</h2>
            <div style="font-size: 1.15rem; line-height: 1.7;">${evento.details}</div>
            ${evento.image ? `<img src="${evento.image}" alt="${evento.title}">` : ''}
        `;
        modalOverlay.classList.add('active');
        document.body.classList.add('no-scroll');
        if(lenis) lenis.stop(); // Detener scroll suave
    }

    function cerrarModal() {
        if (!modalOverlay) return;
        modalOverlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
        if(lenis) lenis.start(); // Reanudar scroll
    }

    if(modalCloseBtn) modalCloseBtn.addEventListener('click', cerrarModal);
    if(modalOverlay) modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) cerrarModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') cerrarModal(); });

    /* --- 9. GENERADOR DE TARJETAS --- */
    const container = document.getElementById('timeline');
    const searchInput = document.getElementById('search-input');
    const noResultsMsg = document.getElementById('no-results');

    // Función auxiliar para efecto Matrix en títulos de tarjetas
    function scrambleCardTitle(element) {
        if(element.dataset.scrambling === "true") return; 
        element.dataset.scrambling = "true";
        const originalText = element.innerText;
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&";
        let iteration = 0;
        let interval = setInterval(() => {
            element.innerText = originalText.split("").map((letter, index) => {
                if(index < iteration) return originalText[index];
                return letters[Math.floor(Math.random() * letters.length)];
            }).join("");
            if(iteration >= originalText.length) {
                clearInterval(interval);
                element.dataset.scrambling = "false";
            }
            iteration += 1 / 2;
        }, 30);
    }

    if (container) {
        container.innerHTML = ''; // Limpiar por si acaso
        eventos.forEach(evento => {
            const card = document.createElement('div');
            card.classList.add('card');
            
            // Atributos para búsqueda y color
            card.setAttribute('data-title', evento.title.toLowerCase());
            card.setAttribute('data-year', evento.year.toLowerCase());
            card.setAttribute('data-desc', evento.desc.toLowerCase());
            card.setAttribute('data-color', evento.color);

            card.innerHTML = `
                <span class="card-year">${evento.year}</span>
                <h2>${evento.title}</h2>
                <p>${evento.desc}</p>
                <img src="${evento.image}" alt="${evento.title}">
            `;
            
            // INTERACTIVIDAD TARJETA (Solo PC)
            if (window.innerWidth > 768) {
                // Movimiento magnético 2D
                card.addEventListener('mousemove', (e) => {
                    if (!card.classList.contains('visible')) return;
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    
                    card.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`; 
                    
                    // Variables para el brillo holográfico
                    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                });

                card.addEventListener('mouseleave', () => {
                    card.style.transform = `translate(0px, 0px)`;
                    document.body.classList.remove('hovering');
                });

                card.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
            }

            card.addEventListener('click', () => abrirModal(evento));
            container.appendChild(card);
        });
    }

    // BUSCADOR
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const cards = document.querySelectorAll('.card');
            let visibleCount = 0;
            
            cards.forEach(card => {
                const title = card.getAttribute('data-title');
                const year = card.getAttribute('data-year');
                const desc = card.getAttribute('data-desc');
                
                if (title.includes(searchTerm) || year.includes(searchTerm) || desc.includes(searchTerm)) {
                    card.style.display = 'block';
                    // Re-activar animación si se vuelve visible
                    if (card.getBoundingClientRect().top < window.innerHeight) {
                        setTimeout(() => card.classList.add('visible'), 50);
                    }
                    visibleCount++;
                } else {
                    card.style.display = 'none'; 
                    card.classList.remove('visible');
                }
            });
            
            if (visibleCount === 0) noResultsMsg.classList.remove('hidden'); 
            else noResultsMsg.classList.add('hidden');
        });
    }

    /* --- 10. SCROLL OBSERVER Y BARRA PROGRESO --- */
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercentage = (scrollTop / scrollHeight) * 100;
            progressBar.style.width = scrollPercentage + "%";
        });
    }

    // Observer para animar tarjetas al entrar en pantalla
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Cambiar color ambiente
                if(entry.target.dataset.color) {
                    document.documentElement.style.setProperty('--active-light', entry.target.dataset.color);
                }

                // Efecto Matrix en título de tarjeta
                const title = entry.target.querySelector('h2');
                if (title && !title.classList.contains('scrambled-done')) {
                    scrambleCardTitle(title);
                    title.classList.add('scrambled-done');
                }
            }
        });
    }, { threshold: 0.15 }); // Umbral bajo para que salten antes
    
    const observeCards = () => {
        const currentCards = document.querySelectorAll('.card');
        currentCards.forEach(card => cardObserver.observe(card));
    };
    observeCards();

    // Línea de vida dorada
    window.addEventListener('scroll', () => {
        const timeline = document.getElementById('timeline');
        const activeLine = document.getElementById('active-line');
        if (timeline && activeLine) {
            const rect = timeline.getBoundingClientRect();
            const startOffset = window.innerHeight / 2; 
            let height = startOffset - rect.top;
            if (height < 0) height = 0;
            if (height > rect.height) height = rect.height;
            activeLine.style.height = `${height}px`;
        }
    });

    /* --- 11. EFECTOS ADICIONALES --- */
    // Botones magnéticos (Solo PC)
    if (window.innerWidth > 768) {
        const magnets = document.querySelectorAll('.magnetic');
        magnets.forEach((magnet) => {
            magnet.addEventListener('mousemove', (e) => {
                const rect = magnet.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                magnet.style.transform = `translate(${x * 0.4}px, ${y * 0.4}px)`;
            });
            magnet.addEventListener('mouseleave', () => {
                magnet.style.transform = `translate(0px, 0px)`;
            });
        });
    }

    // Efecto Ripple (Onda) al hacer click
    window.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.className = 'click-ripple';
        const size = 30; 
        
        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - size/2}px`;
        ripple.style.top = `${e.clientY - size/2}px`;
        
        document.body.appendChild(ripple);
        
        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    });
});