function updateClock() {
  const now = new Date();
  const clock = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
  document.getElementById("clock").textContent = clock;
}

function updateExpiry() {
  const expiry = new Date(Date.now() + 2 * 60 * 60 * 1000); // 2 hours from now

  const datePart = expiry.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  const timePart = expiry.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  document.getElementById("expire-time").textContent = `Expires ${datePart} at ${timePart}`;
}


setInterval(updateClock, 1000);
updateClock();
updateExpiry();
