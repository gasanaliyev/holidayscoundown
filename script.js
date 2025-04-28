
document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('countdown');
    const notificationElement = document.getElementById('notification');
    const targetDate = new Date('December 31, 2025 00:00:00').getTime();
    const themeToggleButton = document.getElementById('theme-toggle');
    const languageSelector = document.getElementById('language-selector');

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            countdownElement.innerHTML = "EXPIRED";
        }

        if (distance <= 86400000) { // 24 hours before the target
            notificationElement.innerHTML = "The holiday is coming soon!";
            notificationElement.style.display = 'block';
        }
    }

    setInterval(updateCountdown, 1000);

    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });

    languageSelector.addEventListener('change', (e) => {
        const selectedLanguage = e.target.value;
        if (selectedLanguage === 'ru') {
            document.getElementById('header').innerText = "Отсчёт до праздников";
            notificationElement.innerText = "Праздник скоро!";
        } else if (selectedLanguage === 'ar') {
            document.getElementById('header').innerText = "العد التنازلي للعطلات";
            notificationElement.innerText = "العيد قريب!";
        } else {
            document.getElementById('header').innerText = "Holiday Countdown";
            notificationElement.innerText = "The holiday is coming soon!";
        }
    });
});
