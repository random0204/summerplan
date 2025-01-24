const nextMeetingDate = new Date("2025-06-08T14:00:00"); // Update this date

function updateCountdown() {
    const now = new Date();
    const diff = nextMeetingDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerHTML = "Shall we go on this date?! 💕";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;
}

setInterval(updateCountdown, 1000);

// Show audio controls and attempt to autoplay
const music = document.getElementById("music");
music.volume = 0.5;
music.play().catch(() => console.log("User interaction required to play music."));