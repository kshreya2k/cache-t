function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock(); // initial call

function updateExpiry() {
  const expiry = new Date(Date.now() + 2 * 30 * 60 * 1000); // now + 2 hours
  const options = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  };
  const formatted = expiry.toLocaleString('en-US', options);
  document.getElementById("expire-time").textContent = `Expires ${formatted}`;
}

setInterval(updateClock, 1000);
updateClock();
updateExpiry();