const countdownEl = document.getElementById("countdown");
const releaseDate = new Date("2026-05-26T00:00:00");

function updateCountdown() {
    const now = new Date();
    const diff = releaseDate - now;

    if (diff <= 0) {
        countdownEl.textContent = "GTA VI is out now!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownEl.textContent = `${days}D ${hours}H ${minutes}M ${seconds}S`;
}

setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call
