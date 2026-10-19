const releaseDate = new Date("2026-11-19T00:00:00");
const preloadDate = new Date("2026-11-12T00:00:00");

function pad(num) {
  return String(num).padStart(2, "0");
}

function formatCountdown(diff) {
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return `${days}D ${pad(hours)}H ${pad(minutes)}M ${pad(seconds)}S`;
}

function startCountdown(elementId, targetDate, label, finishedMessage) {
  const element = document.getElementById(elementId);

  if (!element) return;

  function update() {
    const diff = targetDate.getTime() - Date.now();

    if (diff <= 0) {
      element.textContent = finishedMessage;
      clearInterval(intervalId);
      return;
    }

    element.textContent = `${formatCountdown(diff)}`;
  }

  update();

  const intervalId = setInterval(update, 1000);
}

// Main release countdown
startCountdown("countdown", releaseDate, "Release", "GTA VI is out now!");

// Pre-load countdown
startCountdown(
  "countdown2",
  preloadDate,
  "Pre-Load",
  "You can pre-load GTA VI now!",
);
