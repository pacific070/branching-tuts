document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.getElementById('open-btn');
    const envelope = document.querySelector('.letter-envelope');
    const letterPaper = document.querySelector('.letter-paper');
    
    // Add floating hearts to the floating hearts container when button is clicked
    function addFloatingHearts() {
        const floatingHeartsContainer = document.querySelector('.floating-hearts');
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            
            // Random position
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            
            heart.style.top = `${top}%`;
            heart.style.left = `${left}%`;
            
            // Random size
            const size = 10 + Math.random() * 12;
            heart.style.width = `${size}px`;
            heart.style.height = `${size}px`;
            
            // Random animation delay and duration
            const delay = Math.random() * 2;
            const duration = 3 + Math.random() * 4;
            
            heart.style.animationDelay = `${delay}s`;
            heart.style.animationDuration = `${duration}s`;
            
            // Add pseudo-elements for the heart shape
            const before = document.createElement('div');
            before.style.position = 'absolute';
            before.style.width = `${size}px`;
            before.style.height = `${size}px`;
            before.style.backgroundColor = `rgba(233, 30, 99, ${0.5 + Math.random() * 0.4})`;
            before.style.borderRadius = '50%';
            before.style.top = `-${size/2}px`;
            before.style.left = '0';
            
            const after = document.createElement('div');
            after.style.position = 'absolute';
            after.style.width = `${size}px`;
            after.style.height = `${size}px`;
            after.style.backgroundColor = `rgba(233, 30, 99, ${0.5 + Math.random() * 0.4})`;
            after.style.borderRadius = '50%';
            after.style.top = '0';
            after.style.left = `${size/2}px`;
            
            heart.appendChild(before);
            heart.appendChild(after);
            
            floatingHeartsContainer.appendChild(heart);
        }
    }
    
    openBtn.addEventListener('click', function() {
        // Add class to animate the envelope
        envelope.classList.add('envelope-open');
        
        // Show the letter paper after a delay to match the envelope animation
        setTimeout(() => {
            letterPaper.classList.add('show');
        }, 800);
        
        // Add floating hearts effect
        addFloatingHearts();
        
        // Change button text
        openBtn.textContent = 'Letter Opened';
        openBtn.disabled = true;
        
        // Add ripple effect to button
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        this.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        }, 600);
    });
    
    // Add hover effect to the button
    openBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
        this.style.boxShadow = '0 10px 25px rgba(233, 30, 99, 0.5)';
    });
    
    openBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 6px 15px rgba(233, 30, 99, 0.4)';
    });
    
    // Create additional floating hearts periodically
    setInterval(() => {
        if (document.querySelectorAll('.hearts-container .heart').length < 50) {
            const heartsContainer = document.querySelector('.hearts-container');
            const heart = document.createElement('div');
            heart.className = 'heart';
            
            // Random position
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            
            heart.style.top = `${top}%`;
            heart.style.left = `${left}%`;
            
            // Random size
            const size = 12 + Math.random() * 18;
            heart.style.width = `${size}px`;
            heart.style.height = `${size}px`;
            
            // Random animation delay and duration
            const delay = Math.random() * 5;
            const duration = 6 + Math.random() * 8;
            
            heart.style.animationDelay = `${delay}s`;
            heart.style.animationDuration = `${duration}s`;
            
            // Add pseudo-elements for the heart shape
            const before = document.createElement('div');
            before.style.position = 'absolute';
            before.style.width = `${size}px`;
            before.style.height = `${size}px`;
            before.style.backgroundColor = `rgba(255, 0, 85, ${0.4 + Math.random() * 0.4})`;
            before.style.borderRadius = '50%';
            before.style.top = `-${size/2}px`;
            before.style.left = '0';
            
            const after = document.createElement('div');
            after.style.position = 'absolute';
            after.style.width = `${size}px`;
            after.style.height = `${size}px`;
            after.style.backgroundColor = `rgba(255, 0, 85, ${0.4 + Math.random() * 0.4})`;
            after.style.borderRadius = '50%';
            after.style.top = '0';
            after.style.left = `${size/2}px`;
            
            heart.appendChild(before);
            heart.appendChild(after);
            
            heartsContainer.appendChild(heart);
            
            // Remove heart after animation completes to prevent too many elements
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, duration * 1000);
        }
    }, 1500);
    
    // Add click effect to the entire page
    document.body.addEventListener('click', function(e) {
        // Only create effects if not clicking on the button
        if (!e.target.closest('#open-btn')) {
            createClickEffect(e.clientX, e.clientY);
        }
    });
    
    function createClickEffect(x, y) {
        const effect = document.createElement('div');
        effect.style.position = 'fixed';
        effect.style.left = `${x}px`;
        effect.style.top = `${y}px`;
        effect.style.width = '25px';
        effect.style.height = '25px';
        effect.style.border = '2px solid rgba(233, 30, 99, 0.7)';
        effect.style.borderRadius = '50%';
        effect.style.transform = 'scale(0)';
        effect.style.pointerEvents = 'none';
        effect.style.zIndex = '100';
        
        document.body.appendChild(effect);
        
        // Animate the effect
        const animation = effect.animate([
            { transform: 'scale(0)', opacity: 1 },
            { transform: 'scale(1.2)', opacity: 0.7 },
            { transform: 'scale(2.5)', opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        });
        
        animation.onfinish = () => {
            if (effect.parentNode) {
                effect.parentNode.removeChild(effect);
            }
        };
    }
    
    // Add touch feedback for mobile devices
    document.body.addEventListener('touchstart', function(e) {
        if (!e.target.closest('#open-btn')) {
            createClickEffect(e.touches[0].clientX, e.touches[0].clientY);
        }
    });
});