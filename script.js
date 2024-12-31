
const countdownElement = document.getElementById('countdown');
const fireworksElement = document.getElementById('fireworks');
const music = document.getElementById('background-music');

// Set the date we're counting down to
const countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();

// Update the countdown every 1 second
const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is over, display a message and trigger fireworks
    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "Happy New Year!";
        music.play();
        triggerFireworks();
    }
}, 1000);

// Function to trigger fireworks
function triggerFireworks() {
    fireworksElement.style.opacity = 1;
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            createFirework();
        }, i * 500);
    }
}

// Function to create a firework
function createFirework() {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = Math.random() * 100 + 'vw';
    firework.style.top = Math.random() * 100 + 'vh';
    fireworksElement.appendChild(firework);
    
    // Remove the firework after the animation
    setTimeout(() => {
        firework.remove();
    }, 1000); // Adjust the timing to match the animation duration
}