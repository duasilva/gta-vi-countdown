const countdownEl = document.getElementById("countdown");
const releaseDate = new Date("2026-11-19T00:00:00");

function pad(num) {
  return num.toString().padStart(2, "0");
}

function updateCountdown() {
  const now = new Date();
  const diff = releaseDate - now;

  if (diff <= 0) {
    countdownEl.textContent = "GTA VI is out now!";
    clearInterval(intervalId);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.textContent = `${days}D ${pad(hours)}H ${pad(minutes)}M ${pad(
    seconds,
  )}S`;
}

const intervalId = setInterval(updateCountdown, 1000);
updateCountdown();

const countdownEl2 = document.getElementById("countdown2");
const releaseDate2 = new Date("2026-11-12T00:00:00");

function updateCountdown2() {
  const now = new Date();
  const diff = releaseDate2 - now;

  if (diff <= 0) {
    countdownEl2.textContent = "Monster Hunter Wilds is out now!";
    clearInterval(intervalId2);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl2.textContent = `${days}D ${pad(hours)}H ${pad(minutes)}M ${pad(seconds)}S`;
}

const intervalId2 = setInterval(updateCountdown2, 1000);
updateCountdown2();
