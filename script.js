const forgiveBtn = document.getElementById("forgiveBtn");
const noBtn = document.getElementById("noBtn");
const buttonArea = document.getElementById("buttonArea");
const hint = document.getElementById("hint");
const successMessage = document.getElementById("successMessage");

let moveCount = 0;
const playfulMessages = [
  "Coba tekan tombol yang pink dulu ya...",
  "Aku masih berharap kamu mau memaafkan aku ♡",
  "Tombolnya malu kalau ditekan...",
  "Aku sungguh-sungguh minta maaf, Seva.",
  "Setidaknya baca permintaan maafku sekali lagi ya ♡"
];

function moveNoButton() {
  moveCount++;
  const areaRect = buttonArea.getBoundingClientRect();
  const buttonRect = noBtn.getBoundingClientRect();
  const maxX = Math.max(10, areaRect.width - buttonRect.width - 10);
  const maxY = Math.max(10, areaRect.height - buttonRect.height - 10);

  // Tombol berpindah secara acak tetapi tetap berada di dalam area tombol.
  const randomX = Math.floor(Math.random() * maxX) - maxX / 2;
  const randomY = Math.floor(Math.random() * maxY) - maxY / 2;

  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
  hint.textContent = playfulMessages[Math.min(moveCount - 1, playfulMessages.length - 1)];
}

// Di desktop tombol bergerak saat didekati; di ponsel bergerak saat disentuh.
noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", (event) => {
  event.preventDefault();
  moveNoButton();
}, { passive: false });
noBtn.addEventListener("click", (event) => {
  event.preventDefault();
  moveNoButton();
});

forgiveBtn.addEventListener("click", () => {
  successMessage.hidden = false;
  hint.textContent = "Terima kasih sudah memberi kesempatan untuk memperbaiki semuanya.";
  forgiveBtn.textContent = "Terima Kasih, Seva ♡";
  forgiveBtn.disabled = true;
  forgiveBtn.style.opacity = "0.85";
  noBtn.style.display = "none";
  successMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
});
