const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const currentCard = button.closest(".track-card");
    const currentContent = currentCard.querySelector(".more-content");

    // Close all other cards
    document.querySelectorAll(".track-card").forEach(card => {
      if (card !== currentCard) {
        card.querySelector(".more-content").style.maxHeight = null;
        card.querySelector(".toggle-btn").innerText = "More details";
      }
    });

    // Toggle current card
    if (currentContent.style.maxHeight) {
      currentContent.style.maxHeight = null;
      button.innerText = "More details";
    } else {
      currentContent.style.maxHeight = currentContent.scrollHeight + "px";
      button.innerText = "Less details";
    }
  });
});
