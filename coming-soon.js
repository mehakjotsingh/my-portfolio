// Coming Soon Page - Interactive Game & Animations

// Create animated background particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (10 + Math.random() * 10) + 's';
        particlesContainer.appendChild(particle);
    }
}


// Game Logic - Catch the Stars (Hard Mode)
class StarGame {
    constructor() {
        this.score = 0;
        this.timeLeft = 10;
        this.gameInterval = null;
        this.timerInterval = null;
        this.isPaused = false;
        this.isGameOver = false;
        this.starsOnScreen = 0;
        this.maxStars = 8; // More stars at once
        this.highScore = this.loadHighScore();

        this.gameArea = document.getElementById('gameArea');
        this.scoreValue = document.getElementById('scoreValue');
        this.timerValue = document.getElementById('timerValue');
        this.highScoreValue = document.getElementById('highScoreValue');
        this.startBtn = document.getElementById('startGameBtn');
        this.gameContainer = document.getElementById('gameContainer');
        this.gameIntro = document.querySelector('.game-intro');
        this.gameOver = document.getElementById('gameOver');
        this.finalScore = document.getElementById('finalScore');
        this.playAgainBtn = document.getElementById('playAgainBtn');
        this.backBtn = document.getElementById('backBtn');
        this.pauseBtn = document.getElementById('pauseBtn');
        this.gameInstructions = document.getElementById('gameInstructions');
        this.gameDescription = document.getElementById('gameDescription');

        this.initializeEventListeners();
        this.updateHighScore();
    }

    loadHighScore() {
        const saved = localStorage.getItem('starGameHighScore');
        return saved ? parseInt(saved) : 0;
    }

    saveHighScore() {
        if (this.score > this.highScore) {
            this.highScore = this.score;
            localStorage.setItem('starGameHighScore', this.highScore.toString());
            this.updateHighScore();
        }
    }

    updateHighScore() {
        if (this.highScoreValue) {
            this.highScoreValue.textContent = this.highScore;
        }
    }

    initializeEventListeners() {
        this.startBtn.addEventListener('click', () => this.startGame());
        this.playAgainBtn.addEventListener('click', () => this.startGame());
        this.backBtn.addEventListener('click', () => this.resetGame());
        this.pauseBtn.addEventListener('click', () => this.togglePause());
        this.gameArea.addEventListener('click', (e) => {
            if (!this.isPaused && !this.isGameOver && e.target.classList.contains('star')) {
                this.catchStar(e.target);
            }
        });
    }

    startGame() {
        this.score = 0;
        this.timeLeft = 10;
        this.isPaused = false;
        this.isGameOver = false;
        this.starsOnScreen = 0;

        // Hide intro and game over, show game
        this.gameIntro.style.display = 'none';
        this.gameOver.style.display = 'none';
        this.gameContainer.style.display = 'block';
        this.gameInstructions.style.display = 'none';
        
        // Show game description
        if (this.gameDescription) {
            this.gameDescription.style.display = 'block';
        }

        // Clear game area
        this.gameArea.innerHTML = '';
        const instructions = document.createElement('div');
        instructions.className = 'game-instructions';
        instructions.id = 'gameInstructions';
        instructions.style.display = 'none';
        this.gameArea.appendChild(instructions);

        // Update UI
        this.updateScore();
        this.updateTimer();
        this.updateHighScore();

        // Start game with faster spawn rate (harder difficulty)
        this.gameInterval = setInterval(() => this.spawnStar(), 400); // Faster spawn
        this.timerInterval = setInterval(() => this.updateTimer(), 1000);
    }

    spawnStar() {
        if (this.isPaused || this.isGameOver || this.starsOnScreen >= this.maxStars) {
            return;
        }

        const star = document.createElement('div');
        star.className = 'star';
        star.textContent = '⭐';
        
        // Smaller stars for harder difficulty
        const starSize = 28 + Math.random() * 8; // 28-36px (smaller than before)
        star.style.width = starSize + 'px';
        star.style.height = starSize + 'px';
        star.style.fontSize = (starSize - 4) + 'px';
        
        // Random position
        const gameAreaRect = this.gameArea.getBoundingClientRect();
        const maxX = gameAreaRect.width - starSize;
        const maxY = gameAreaRect.height - starSize;
        
        star.style.left = Math.random() * maxX + 'px';
        star.style.top = Math.random() * maxY + 'px';

        // Add random animation delay
        star.style.animationDelay = Math.random() * 0.2 + 's';

        // Remove star after 1.5 seconds if not clicked (faster disappearance - harder!)
        const removeTimeout = setTimeout(() => {
            if (star.parentNode) {
                star.remove();
                this.starsOnScreen--;
            }
        }, 1500);

        // Store timeout ID for cleanup
        star.dataset.timeoutId = removeTimeout;

        this.gameArea.appendChild(star);
        this.starsOnScreen++;

        // Add pulsing animation
        star.addEventListener('mouseenter', () => {
            star.style.transform = 'scale(1.3) rotate(15deg)';
        });
        star.addEventListener('mouseleave', () => {
            star.style.transform = 'scale(1) rotate(0deg)';
        });
    }

    catchStar(starElement) {
        // Add pop animation
        starElement.classList.add('clicked');
        
        // Clear timeout
        if (starElement.dataset.timeoutId) {
            clearTimeout(parseInt(starElement.dataset.timeoutId));
        }

        // Update score
        this.score += 10;
        this.updateScore();

        // Create score popup
        this.createScorePopup(starElement);

        // Remove star after animation
        setTimeout(() => {
            starElement.remove();
            this.starsOnScreen--;
        }, 300);
    }

    createScorePopup(starElement) {
        const popup = document.createElement('div');
        popup.textContent = '+10';
        popup.style.cssText = `
            position: absolute;
            left: ${starElement.offsetLeft}px;
            top: ${starElement.offsetTop}px;
            color: #0a84ff;
            font-size: 24px;
            font-weight: 600;
            pointer-events: none;
            z-index: 1000;
            animation: scorePop 1s ease-out forwards;
        `;

        // Add animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes scorePop {
                0% {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
                100% {
                    opacity: 0;
                    transform: translateY(-50px) scale(1.5);
                }
            }
        `;
        if (!document.getElementById('scorePopAnimation')) {
            style.id = 'scorePopAnimation';
            document.head.appendChild(style);
        }

        this.gameArea.appendChild(popup);
        setTimeout(() => popup.remove(), 1000);
    }

    updateScore() {
        this.scoreValue.textContent = this.score;
    }

    updateTimer() {
        if (this.isPaused) return;

        this.timerValue.textContent = this.timeLeft;

        if (this.timeLeft <= 0) {
            this.endGame();
            return;
        }

        this.timeLeft--;
    }

    togglePause() {
        this.isPaused = !this.isPaused;
        this.pauseBtn.textContent = this.isPaused ? '▶' : '⏸';
        
        if (this.isPaused) {
            // Pause all stars
            const stars = this.gameArea.querySelectorAll('.star');
            stars.forEach(star => {
                star.style.animationPlayState = 'paused';
            });
        } else {
            // Resume all stars
            const stars = this.gameArea.querySelectorAll('.star');
            stars.forEach(star => {
                star.style.animationPlayState = 'running';
            });
        }
    }

    endGame() {
        this.isGameOver = true;
        this.isPaused = false;

        // Save high score
        this.saveHighScore();

        // Clear intervals
        if (this.gameInterval) {
            clearInterval(this.gameInterval);
        }
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }

        // Remove all stars
        const stars = this.gameArea.querySelectorAll('.star');
        stars.forEach(star => {
            if (star.dataset.timeoutId) {
                clearTimeout(parseInt(star.dataset.timeoutId));
            }
            star.remove();
        });
        this.starsOnScreen = 0;

        // Hide game description
        if (this.gameDescription) {
            this.gameDescription.style.display = 'none';
        }

        // Show game over
        this.finalScore.textContent = this.score;
        this.gameOver.style.display = 'block';
        
        // Update high score display
        this.updateHighScore();

        // Add celebration if new high score
        if (this.score > this.loadHighScore() || this.score >= 100) {
            this.celebrate();
        }
    }

    celebrate() {
        // Create confetti effect
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.textContent = '🎉';
                confetti.style.cssText = `
                    position: fixed;
                    left: ${Math.random() * 100}vw;
                    top: -50px;
                    font-size: 24px;
                    pointer-events: none;
                    z-index: 10000;
                    animation: confettiFall 3s ease-out forwards;
                `;
                document.body.appendChild(confetti);
                setTimeout(() => confetti.remove(), 3000);
            }, i * 50);
        }

        // Add confetti animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes confettiFall {
                to {
                    transform: translateY(100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        if (!document.getElementById('confettiAnimation')) {
            style.id = 'confettiAnimation';
            document.head.appendChild(style);
        }
    }

    resetGame() {
        this.isGameOver = false;
        this.isPaused = false;

        // Clear intervals
        if (this.gameInterval) {
            clearInterval(this.gameInterval);
        }
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }

        // Clear game area
        this.gameArea.innerHTML = '';
        const instructions = document.createElement('div');
        instructions.className = 'game-instructions';
        instructions.id = 'gameInstructions';
        instructions.innerHTML = `
            <p>Click the stars as they appear!</p>
            <p>Get as many points as you can in 10 seconds.</p>
        `;
        this.gameArea.appendChild(instructions);

        // Hide game description
        if (this.gameDescription) {
            this.gameDescription.style.display = 'none';
        }

        // Reset UI
        this.gameContainer.style.display = 'none';
        this.gameIntro.style.display = 'block';
        this.gameOver.style.display = 'none';
        this.score = 0;
        this.timeLeft = 10;
        this.starsOnScreen = 0;
        this.pauseBtn.textContent = '⏸';
    }
}

// Contact Form Handling
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Create notification (Apple style)
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: rgba(0, 0, 0, 0.85);
            backdrop-filter: saturate(180%) blur(20px);
            color: white;
            padding: 16px 24px;
            border-radius: 12px;
            font-size: 15px;
            letter-spacing: -0.016em;
            z-index: 10000;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
            max-width: 300px;
        `;
        notification.textContent = `Thanks ${name}! I'll get back to you soon.`;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        }, 10);
        
        // Animate out and remove
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(20px)';
            setTimeout(() => notification.remove(), 400);
        }, 3000);
        
        // Reset form
        contactForm.reset();
    });
}

// Handle image loading error
function setupImageErrorHandler() {
    const profilePhoto = document.getElementById('profilePhoto');
    if (profilePhoto) {
        profilePhoto.addEventListener('error', function() {
            this.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.style.cssText = `
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(135deg, #1d1d1f 0%, #2d2d2f 100%);
                color: #86868b;
                font-size: 18px;
                letter-spacing: -0.022em;
                border-radius: 50%;
            `;
            placeholder.textContent = 'Photo';
            this.parentElement.appendChild(placeholder);
        });
    }
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    setupContactForm();
    setupImageErrorHandler();
    
    // Initialize game
    const game = new StarGame();
    
    // Smooth page load animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

