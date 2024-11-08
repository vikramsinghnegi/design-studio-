// Initialize Lenis
const lenis = new Lenis();

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);








// Select the cursor ball element
const cursorBall = document.querySelector('.cursor-ball');

// Initial position of the cursor ball
let mouseX = 0, mouseY = 0;
let ballX = 0, ballY = 0;

// Track mouse movement and update target position
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Smoothly move the ball by interpolating positions
function animate() {
  // Apply easing for smooth follow effect
  ballX += (mouseX - ballX) * 0.1;
  ballY += (mouseY - ballY) * 0.1;

  // Update the cursor-ball position
  cursorBall.style.transform = `translate(${ballX - 10}px, ${ballY - 10}px)`;

  // Recursively call animate to keep the loop going
  requestAnimationFrame(animate);
}

// Start the animation loop
animate();
