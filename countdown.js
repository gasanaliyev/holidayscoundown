// List of holidays with their dates
const holidays = {
    "new-year": { name: "New Year", date: "2026-01-01" },
    "christmas": { name: "Christmas", date: "2025-12-25" },
    // Add more holidays here
};

// Function to update countdown
function updateCountdown(holiday) {
    const holidayDate = new Date(holidays[holiday].date);
    const now = new Date();
    const diff = holidayDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('countdown-timer').innerHTML = `
        ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds
    `;
    document.getElementById('holiday-name').innerText = holidays[holiday].name;
}

// Handle holiday selection
document.getElementById('holiday-select').addEventListener('change', function(e) {
    updateCountdown(e.target.value);
});

// Handle language change
document.getElementById('language-select').addEventListener('change', function(e) {
    const language = e.target.value;
    // You can switch between language packs here
    console.log(`Language switched to: ${language}`);
});

// Handle theme toggle
document.getElementById('theme-toggle').addEventListener('click', function() {
    const themeLink = document.getElementById('theme-style');
    if (themeLink.getAttribute('href') === 'light-theme.css') {
        themeLink.setAttribute('href', 'dark-theme.css');
    } else {
        themeLink.setAttribute('href', 'light-theme.css');
    }
});

// Update the countdown for the default holiday
updateCountdown('new-year');
