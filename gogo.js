document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("valentineButton");
  const message = document.getElementById("message");

  button.addEventListener("click", function () {
    message.classList.remove("hidden");
    button.classList.add("hidden");
    showFloatingHearts();
  });

  function showFloatingHearts() {
    for (let i = 0; i < 30; i++) {
      setTimeout(createHeart, i * 150);
    }
  }

  function createHeart() {
    const heart = document.createElement("div");
    heart.textContent = "💖";
    heart.classList.add("heart");
    document.body.appendChild(heart);

    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animation = `float ${3 + Math.random() * 2}s ease-in-out`;

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
});
