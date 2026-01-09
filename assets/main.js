/* ============================================
   MAIN.JS - FUNCIONALIDAD PRINCIPAL
   ============================================ */

// ============================================
// INICIALIZACION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initStars();
    initParallax();
    initSmoothScroll();
    initFlowersSection();
    initNurseQuiz();
    initCaptainSection();
});

// ============================================
// ESTRELLAS DE FONDO
// ============================================

function initStars() {
    const starsContainer = document.getElementById('stars');
    if (!starsContainer) return;
    
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 2 + 2) + 's';
        starsContainer.appendChild(star);
    }
}

// ============================================
// PARALLAX EN ORBES
// ============================================

function initParallax() {
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        document.querySelectorAll('.orb').forEach((orb, i) => {
            const speed = (i + 1) * 15;
            orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// SECCION FLORES
// ============================================

function initFlowersSection() {
    const container = document.querySelector('.particles-container');
    if (!container) return;
    
    // Crear particulas
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = `particle ${Math.random() > 0.5 ? 'particle-gold' : 'particle-cyan'}`;
        particle.style.width = (Math.random() * 8 + 4) + 'px';
        particle.style.height = particle.style.width;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
        container.appendChild(particle);
    }
    
    // Crear corazones flotantes
    const heartsContainer = document.querySelector('.hearts-container');
    if (heartsContainer) {
        setInterval(() => {
            if (document.querySelectorAll('.floating-heart').length < 10) {
                const heart = document.createElement('div');
                heart.className = 'floating-heart';
                heart.innerHTML = '❤';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
                heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
                heartsContainer.appendChild(heart);
                
                setTimeout(() => heart.remove(), 8000);
            }
        }, 1500);
    }
    
    // Crear luces flotantes
    const lightsContainer = document.querySelector('.flower-lights');
    if (lightsContainer) {
        for (let i = 0; i < 8; i++) {
            const light = document.createElement('div');
            light.className = `light-orb ${Math.random() > 0.5 ? 'gold' : 'cyan'}`;
            light.style.left = (Math.random() * 100) + '%';
            light.style.animationDelay = (Math.random() * 4) + 's';
            lightsContainer.appendChild(light);
        }
    }
}

// ============================================
// SECCION ENFERMERIA - QUIZ AVANZADO
// ============================================

const nurseQuizData = {
    questions: [
        // CATEGORIA: Farmacologia Avanzada
        {
            id: 1,
            category: 'Farmacologia Avanzada',
            difficulty: 'hard',
            question: 'En un paciente con insuficiencia renal cronica (TFG < 30 mL/min), cual de los siguientes analgesicos debe evitarse por riesgo de acumulacion toxica?',
            options: ['Paracetamol', 'Morfina', 'Fentanilo', 'Buprenorfina'],
            correctAnswer: 'Morfina',
            explanation: 'La morfina tiene metabolitos activos (M3G y M6G) que se acumulan en insuficiencia renal, causando sedacion excesiva y depresion respiratoria. El fentanilo y buprenorfina son alternativas mas seguras.'
        },
        {
            id: 2,
            category: 'Farmacologia Avanzada',
            difficulty: 'hard',
            question: 'Cual es el antidoto especifico para la intoxicacion por benzodiacepinas?',
            options: ['Naloxona', 'Flumazenilo', 'N-acetilcisteina', 'Atropina'],
            correctAnswer: 'Flumazenilo',
            explanation: 'El flumazenilo es un antagonista competitivo del receptor GABA-A. La naloxona es para opioides, la N-acetilcisteina para paracetamol y la atropina para organofosforados.'
        },
        {
            id: 3,
            category: 'Farmacologia Avanzada',
            difficulty: 'medium',
            question: 'Que efecto secundario es MAS caracteristico de los inhibidores de la ECA (como enalapril)?',
            options: ['Hipopotasemia', 'Tos seca persistente', 'Taquicardia refleja', 'Retencion de sodio'],
            correctAnswer: 'Tos seca persistente',
            explanation: 'Los IECA causan acumulacion de bradicinina que irrita las vias respiratorias, produciendo tos seca en 5-20% de los pacientes. Causan hiperpotasemia, no hipopotasemia.'
        },
        
        // CATEGORIA: Cuidados Criticos
        {
            id: 4,
            category: 'Cuidados Criticos',
            difficulty: 'hard',
            question: 'En la monitorizacion hemodinamica invasiva, un valor de presion venosa central (PVC) elevado junto con gasto cardiaco bajo sugiere:',
            options: ['Hipovolemia', 'Disfuncion ventricular derecha', 'Vasodilatacion periferica', 'Hemorragia activa'],
            correctAnswer: 'Disfuncion ventricular derecha',
            explanation: 'La PVC alta con bajo gasto cardiaco indica que el ventriculo derecho no puede bombear eficientemente la sangre que recibe, sugiriendo falla ventricular derecha, TEP masivo o taponamiento.'
        },
        {
            id: 5,
            category: 'Cuidados Criticos',
            difficulty: 'hard',
            question: 'En un paciente con SDRA, cual es la estrategia ventilatoria recomendada para proteccion pulmonar?',
            options: [
                'Volumen tidal 10-12 mL/kg peso ideal',
                'Volumen tidal 6-8 mL/kg peso ideal con PEEP',
                'Frecuencia respiratoria baja sin PEEP',
                'FiO2 al 100% sin limite de presion'
            ],
            correctAnswer: 'Volumen tidal 6-8 mL/kg peso ideal con PEEP',
            explanation: 'La ventilacion protectora en SDRA usa volumenes tidales bajos (6-8 mL/kg peso ideal) para evitar volutrauma, con PEEP para prevenir atelectrauma y mantener reclutamiento alveolar.'
        },
        {
            id: 6,
            category: 'Cuidados Criticos',
            difficulty: 'medium',
            question: 'Cual es el primer signo de hipoxia en un paciente adulto?',
            options: ['Cianosis', 'Taquicardia', 'Bradipnea', 'Hipotension'],
            correctAnswer: 'Taquicardia',
            explanation: 'La taquicardia es una respuesta compensatoria temprana a la hipoxia. La cianosis es un signo tardio que aparece cuando hay >5g/dL de hemoglobina desoxigenada.'
        },
        
        // CATEGORIA: Emergencias
        {
            id: 7,
            category: 'Emergencias',
            difficulty: 'hard',
            question: 'Durante una RCP en adulto, cual es la relacion compresiones-ventilaciones con via aerea avanzada?',
            options: [
                '30:2 con pausas',
                'Compresiones continuas 100-120/min, ventilaciones cada 6 seg',
                '15:2 con pausas',
                'Compresiones continuas 80-100/min, ventilaciones cada 3 seg'
            ],
            correctAnswer: 'Compresiones continuas 100-120/min, ventilaciones cada 6 seg',
            explanation: 'Con via aerea avanzada, las compresiones son continuas (100-120/min) sin pausas, mientras otro rescatador ventila cada 6 segundos (10 ventilaciones/min) de forma asincrona.'
        },
        {
            id: 8,
            category: 'Emergencias',
            difficulty: 'hard',
            question: 'En un paciente con shock anafilactico, cual es la primera intervencion farmacologica?',
            options: [
                'Difenhidramina IV',
                'Metilprednisolona IV',
                'Adrenalina IM en muslo',
                'Salbutamol nebulizado'
            ],
            correctAnswer: 'Adrenalina IM en muslo',
            explanation: 'La adrenalina IM (0.3-0.5 mg en adultos) en el muslo es el tratamiento de primera linea. Los antihistaminicos y corticoides son coadyuvantes, no sustituyen a la adrenalina.'
        },
        {
            id: 9,
            category: 'Emergencias',
            difficulty: 'medium',
            question: 'Ante un paciente con sospecha de ACV, cual es el tiempo maximo recomendado para administrar trombolisis IV (puerta-aguja)?',
            options: ['30 minutos', '45 minutos', '60 minutos', '90 minutos'],
            correctAnswer: '60 minutos',
            explanation: 'El objetivo es puerta-aguja menor a 60 minutos, aunque lo ideal es menor a 45 minutos. La ventana terapeutica total es de 4.5 horas desde el inicio de sintomas.'
        },
        
        // CATEGORIA: Pediatria
        {
            id: 10,
            category: 'Pediatria',
            difficulty: 'medium',
            question: 'Cual es la frecuencia cardiaca normal en un recien nacido a termino?',
            options: ['60-100 lpm', '100-160 lpm', '80-120 lpm', '120-180 lpm'],
            correctAnswer: '100-160 lpm',
            explanation: 'Los recien nacidos tienen frecuencias cardiacas mas altas que los adultos. El rango normal es 100-160 lpm, pudiendo llegar a 180 con el llanto.'
        },
        {
            id: 11,
            category: 'Pediatria',
            difficulty: 'hard',
            question: 'En reanimacion neonatal, si el RN tiene FC < 60 lpm a pesar de ventilacion efectiva, cual es el siguiente paso?',
            options: [
                'Administrar adrenalina IV',
                'Iniciar compresiones toracicas 3:1',
                'Intubar inmediatamente',
                'Administrar surfactante'
            ],
            correctAnswer: 'Iniciar compresiones toracicas 3:1',
            explanation: 'En neonatos con FC < 60 lpm tras 30 segundos de ventilacion efectiva, se inician compresiones (3:1) coordinadas con ventilacion. La adrenalina se considera si no hay respuesta.'
        },
        {
            id: 12,
            category: 'Pediatria',
            difficulty: 'medium',
            question: 'Cual es el sitio de eleccion para acceso intraoseo en pediatria?',
            options: [
                'Humero proximal',
                'Tibia proximal anteromedial',
                'Femur distal',
                'Esternon'
            ],
            correctAnswer: 'Tibia proximal anteromedial',
            explanation: 'La tibia proximal (1-2 cm por debajo de la tuberosidad tibial, cara anteromedial) es el sitio de eleccion en pediatria por ser facilmente accesible y tener buena cortical.'
        },
        
        // CATEGORIA: Interpretacion Clinica
        {
            id: 13,
            category: 'Interpretacion Clinica',
            difficulty: 'hard',
            question: 'Un paciente presenta: pH 7.28, PaCO2 55 mmHg, HCO3 26 mEq/L. Cual es la interpretacion correcta?',
            options: [
                'Acidosis metabolica no compensada',
                'Acidosis respiratoria aguda',
                'Alcalosis respiratoria compensada',
                'Acidosis mixta'
            ],
            correctAnswer: 'Acidosis respiratoria aguda',
            explanation: 'pH bajo (acidosis) con CO2 alto indica origen respiratorio. El HCO3 normal-alto sin compensacion completa indica proceso agudo. En cronico, el HCO3 estaria mas elevado (3-4 mEq/L por cada 10 mmHg de CO2).'
        },
        {
            id: 14,
            category: 'Interpretacion Clinica',
            difficulty: 'hard',
            question: 'En un ECG, un intervalo QT corregido (QTc) > 500 ms indica:',
            options: [
                'Riesgo bajo de arritmias',
                'Necesidad inmediata de marcapasos',
                'Alto riesgo de Torsades de Pointes',
                'Bloqueo AV de tercer grado'
            ],
            correctAnswer: 'Alto riesgo de Torsades de Pointes',
            explanation: 'QTc > 500 ms es un factor de riesgo importante para Torsades de Pointes, una taquicardia ventricular polimorfa potencialmente mortal. Requiere revision de farmacos y electrolitos.'
        },
        {
            id: 15,
            category: 'Interpretacion Clinica',
            difficulty: 'medium',
            question: 'Cual de los siguientes valores de lactato arterial indica hipoperfusion tisular significativa?',
            options: ['> 1 mmol/L', '> 2 mmol/L', '> 4 mmol/L', '> 0.5 mmol/L'],
            correctAnswer: '> 2 mmol/L',
            explanation: 'Lactato > 2 mmol/L indica hipoperfusion tisular. Valores > 4 mmol/L se asocian con mayor mortalidad en sepsis y son criterio de shock septico.'
        }
    ],
    currentIndex: 0,
    score: 0,
    answered: false,
    selectedCategory: 'all'
};

function initNurseQuiz() {
    const quizContainer = document.getElementById('nurse-quiz');
    if (!quizContainer) return;
    
    // Inicializar botones de categoria
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            nurseQuizData.selectedCategory = this.dataset.category;
            resetQuiz();
        });
    });
    
    loadQuestion();
}

function getFilteredQuestions() {
    if (nurseQuizData.selectedCategory === 'all') {
        return nurseQuizData.questions;
    }
    return nurseQuizData.questions.filter(q => 
        q.category.toLowerCase().includes(nurseQuizData.selectedCategory.toLowerCase())
    );
}

function loadQuestion() {
    const questions = getFilteredQuestions();
    const container = document.getElementById('quiz-content');
    const resultContainer = document.getElementById('quiz-result');
    
    if (!container) return;
    
    if (nurseQuizData.currentIndex >= questions.length) {
        showQuizResult();
        return;
    }
    
    const q = questions[nurseQuizData.currentIndex];
    nurseQuizData.answered = false;
    
    // Actualizar progreso
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-info span:first-child');
    if (progressFill) {
        progressFill.style.width = ((nurseQuizData.currentIndex) / questions.length * 100) + '%';
    }
    if (progressText) {
        progressText.textContent = `Pregunta ${nurseQuizData.currentIndex + 1} de ${questions.length}`;
    }
    
    // Actualizar score
    const scoreEl = document.querySelector('.quiz-score span');
    if (scoreEl) {
        scoreEl.textContent = nurseQuizData.score;
    }
    
    // Renderizar pregunta
    container.innerHTML = `
        <div class="quiz-question">
            <span class="question-category">${q.category}</span>
            <span class="difficulty-badge difficulty-${q.difficulty}">${q.difficulty}</span>
            <h3 class="question-text">${q.question}</h3>
        </div>
        <div class="quiz-options">
            ${q.options.map((opt, i) => `
                <button class="option-btn" data-answer="${opt}">
                    <span class="option-letter">${String.fromCharCode(65 + i)}</span>
                    <span>${opt}</span>
                </button>
            `).join('')}
        </div>
        <div class="explanation-box" id="explanation">
            <div class="explanation-title">📚 Explicacion:</div>
            <p class="explanation-text">${q.explanation}</p>
        </div>
        <div class="quiz-controls">
            <div class="quiz-score">Puntuacion: <span>${nurseQuizData.score}</span></div>
            <button class="btn btn-nurse" id="next-btn" style="display:none;" onclick="nextQuestion()">
                Siguiente →
            </button>
        </div>
    `;
    
    // Agregar listeners a opciones
    container.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (nurseQuizData.answered) return;
            selectAnswer(this, q.correctAnswer);
        });
    });
}

function selectAnswer(btn, correctAnswer) {
    nurseQuizData.answered = true;
    const selectedAnswer = btn.dataset.answer;
    const isCorrect = selectedAnswer === correctAnswer;
    
    // Deshabilitar todas las opciones
    document.querySelectorAll('.option-btn').forEach(b => {
        b.classList.add('disabled');
        if (b.dataset.answer === correctAnswer) {
            b.classList.add('correct');
        }
    });
    
    if (isCorrect) {
        btn.classList.add('correct');
        nurseQuizData.score++;
    } else {
        btn.classList.add('incorrect');
    }
    
    // Mostrar explicacion y boton siguiente
    document.getElementById('explanation').classList.add('show');
    document.getElementById('next-btn').style.display = 'inline-flex';
    
    // Actualizar score
    const scoreEl = document.querySelector('.quiz-score span');
    if (scoreEl) {
        scoreEl.textContent = nurseQuizData.score;
    }
}

function nextQuestion() {
    nurseQuizData.currentIndex++;
    loadQuestion();
}

function resetQuiz() {
    nurseQuizData.currentIndex = 0;
    nurseQuizData.score = 0;
    nurseQuizData.answered = false;
    
    const resultContainer = document.getElementById('quiz-result');
    const quizContent = document.getElementById('quiz-content');
    
    if (resultContainer) resultContainer.classList.remove('show');
    if (quizContent) quizContent.style.display = 'block';
    
    loadQuestion();
}

function showQuizResult() {
    const questions = getFilteredQuestions();
    const quizContent = document.getElementById('quiz-content');
    const resultContainer = document.getElementById('quiz-result');
    
    if (quizContent) quizContent.style.display = 'none';
    if (!resultContainer) return;
    
    const percentage = Math.round((nurseQuizData.score / questions.length) * 100);
    let message = '';
    let icon = '';
    
    if (percentage >= 90) {
        message = 'Excelente! Dominas estos temas como una experta.';
        icon = '🏆';
    } else if (percentage >= 70) {
        message = 'Muy bien! Tienes una base solida de conocimientos.';
        icon = '⭐';
    } else if (percentage >= 50) {
        message = 'Buen intento! Sigue repasando estos temas.';
        icon = '📚';
    } else {
        message = 'No te desanimes! La practica hace al maestro.';
        icon = '💪';
    }
    
    resultContainer.innerHTML = `
        <div class="result-icon">${icon}</div>
        <h3 class="result-title">Quiz Completado!</h3>
        <div class="result-score">${nurseQuizData.score}/${questions.length}</div>
        <p class="result-message">${message}</p>
        <div class="result-breakdown">
            <div class="breakdown-item">
                <div class="breakdown-number correct">${nurseQuizData.score}</div>
                <div class="breakdown-label">Correctas</div>
            </div>
            <div class="breakdown-item">
                <div class="breakdown-number incorrect">${questions.length - nurseQuizData.score}</div>
                <div class="breakdown-label">Incorrectas</div>
            </div>
        </div>
        <button class="btn btn-nurse" onclick="resetQuiz()">
            🔄 Reintentar
        </button>
    `;
    
    resultContainer.classList.add('show');
}

// ============================================
// SECCION CAPITAN
// ============================================

let captainProgressWidth = 0;
let captainButtonScale = 1;

function initCaptainSection() {
    const progressBar = document.getElementById('captain-progress-fill');
    if (!progressBar) return;
    
    // Animacion de barra de progreso
    const texts = ["Izando velas...", "Limpiando cubierta...", "Preparando ofrenda..."];
    const interval = setInterval(() => {
        if (captainProgressWidth >= 100) {
            clearInterval(interval);
            progressBar.textContent = "LISTO PARA LA RECONCILIACION!";
        } else {
            captainProgressWidth++;
            progressBar.style.width = captainProgressWidth + '%';
            
            if (captainProgressWidth < 30) progressBar.textContent = texts[0];
            else if (captainProgressWidth < 70) progressBar.textContent = texts[1];
            else progressBar.textContent = texts[2];
        }
    }, 40);
}

function moveCancelButton() {
    const btnCancel = document.getElementById('btn-cancel');
    const btnAccept = document.getElementById('btn-accept');
    
    if (window.innerWidth <= 768) {
        spawnMutinyPopup();
        return;
    }
    
    // Mover boton cancelar
    const newX = Math.random() * (window.innerWidth - 200);
    const newY = Math.random() * (window.innerHeight - 100);
    
    btnCancel.style.position = 'fixed';
    btnCancel.style.left = newX + 'px';
    btnCancel.style.top = newY + 'px';
    btnCancel.style.zIndex = '1000';
    
    // Crecer boton aceptar
    captainButtonScale += 0.3;
    btnAccept.style.transform = `scale(${captainButtonScale})`;
    
    if (captainButtonScale > 1.5) {
        btnAccept.innerHTML = 'SI, MI CAPITAN!';
        btnAccept.style.background = 'linear-gradient(135deg, #ff4500, #ff6347)';
        btnAccept.style.color = 'white';
    }
}

function spawnMutinyPopup() {
    const popup = document.createElement('div');
    popup.className = 'mutiny-popup';
    popup.style.left = Math.max(10, Math.random() * (window.innerWidth - 320)) + 'px';
    popup.style.top = Math.max(10, Math.random() * (window.innerHeight - 200)) + 'px';
    
    popup.innerHTML = `
        <div class="pirate-titlebar">
            <span class="pirate-title">⚠️ MOTIN</span>
            <div class="pirate-controls">
                <button class="pirate-control-btn" onclick="this.closest('.mutiny-popup').remove()">X</button>
            </div>
        </div>
        <div class="pirate-body">
            <p>Esa opcion no esta en el mapa, Capitan!</p>
            <button class="pirate-btn pirate-btn-secondary" onclick="this.closest('.mutiny-popup').remove()">Entendido</button>
        </div>
    `;
    
    document.body.appendChild(popup);
}

function acceptApology() {
    // Ocultar ventana principal
    const mainWindow = document.querySelector('.pirate-window');
    if (mainWindow) mainWindow.style.display = 'none';
    
    // Remover popups
    document.querySelectorAll('.mutiny-popup').forEach(p => p.remove());
    
    // Mostrar pantalla de tesoro
    const treasureScreen = document.getElementById('treasure-screen');
    if (treasureScreen) {
        treasureScreen.classList.add('show');
        startCaptainConfetti();
    }
    
    // Reproducir sonido
    try {
        const audio = new Audio('https://www.myinstants.com/media/sounds/tada_1.mp3');
        audio.volume = 0.5;
        audio.play();
    } catch(e) {}
}

function startCaptainConfetti() {
    const canvas = document.getElementById('captain-confetti');
    if (!canvas) return;
    
    canvas.style.display = 'block';
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    
    const particles = [];
    const colors = ['#ffd700', '#8b0000', '#ffffff', '#f4e4bc', '#daa520'];
    
    function Particle() {
        this.x = Math.random() * width;
        this.y = Math.random() * height - height;
        this.rotation = Math.random() * 360;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.size = Math.random() * 10 + 5;
        this.speedY = Math.random() * 3 + 2;
        this.speedX = Math.random() * 2 - 1;
        this.rotationSpeed = Math.random() * 2 - 1;
    }
    
    for (let i = 0; i < 150; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach((p) => {
            p.y += p.speedY;
            p.x += p.speedX;
            p.rotation += p.rotationSpeed;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation * Math.PI / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            ctx.restore();
            if (p.y > height) {
                p.y = -20;
                p.x = Math.random() * width;
            }
        });
        requestAnimationFrame(animate);
    }
    animate();
}

function closeTreasure() {
    const treasureScreen = document.getElementById('treasure-screen');
    if (treasureScreen) {
        treasureScreen.classList.remove('show');
    }
    
    const canvas = document.getElementById('captain-confetti');
    if (canvas) canvas.style.display = 'none';
    
    // Reiniciar
    const mainWindow = document.querySelector('.pirate-window');
    if (mainWindow) mainWindow.style.display = 'block';
    
    captainProgressWidth = 0;
    captainButtonScale = 1;
    
    const btnAccept = document.getElementById('btn-accept');
    if (btnAccept) {
        btnAccept.style.transform = 'scale(1)';
        btnAccept.innerHTML = 'ACEPTAR LA PAZ';
        btnAccept.style.background = '';
        btnAccept.style.color = '';
    }
    
    const btnCancel = document.getElementById('btn-cancel');
    if (btnCancel) {
        btnCancel.style.position = '';
        btnCancel.style.left = '';
        btnCancel.style.top = '';
    }
    
    initCaptainSection();
}
