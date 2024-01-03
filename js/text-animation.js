const hamburger = document.getElementById('hamburger');
const sidenav = document.getElementById('sidenav');
const changingText = document.getElementById('changing-text');
const typingIndicator = document.querySelector('.typing-indicator');
const words = ["expiration", "certs and licenses", " renewal dates"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
  const currentWord = words[wordIndex];
  if (!isDeleting) {
    changingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentWord.length) {
      isDeleting = true;
      typingIndicator.style.display = 'none';
      setTimeout(typeText, 2000); // Delay before backspacing
    } else {
      setTimeout(typeText, 150); // Typing speed
    }
  } else {
    changingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingIndicator.style.display = 'inline-block';
      setTimeout(typeText, 500); // Delay before typing next word
    } else {
      setTimeout(typeText, 50); // Backspacing speed
    }
  }
}

// Start the typing animation
setTimeout(typeText, 1500); // Initial delay

