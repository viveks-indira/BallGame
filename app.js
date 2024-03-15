// const btn = document.querySelector(".btn");
// const goal = document.querySelector(".target");

// const len = 200;

// function moveButton() {
//   const axisx = Math.floor(Math.random() * (innerWidth - len));
//   const axisy = Math.floor(Math.random() * (innerHeight - len));

//   this.style.top = `${axisy}px`;
//   this.style.left = `${axisx}px`;

// //   const ballReact = btn.getBoundingClientRect();
// //   const goalReact = goal.getBoundingClientRect();

// //   if(
// //     ballReact.left < goalReact.right &&
// //     ballReact.right > goalReact.left &&
// //     ballReact.top < goalReact.bottom &&
// //     ballReact.bottom > goalReact.top
// //   ){
// //     alert("Congratulation ! You have reach the goal ....! ");
// //     restartGame();
// //   }
// const rect1 = btn.getBoundingClientRect(); 
 
// // Get the position and dimensions of the second element 
// const rect2 = goal.getBoundingClientRect(); 

// // Check if the two elements are touching horizontally 
// const horizontalTouch = rect1.right >= rect2.left && rect1.left <= rect2.right; 
 
// // Check if the two elements are touching vertically 
// const verticalTouch = rect1.bottom >= rect2.top && rect1.top <= rect2.bottom; 
 
// // Check if the two elements are touching each other 
// if (horizontalTouch && verticalTouch) { 
//   alert("Congratulation ! You have reach the goal ....! ") ;
//   restartGame();
// } else { 
// } 


// }
// function restartGame() {
//   location.reload();
// }

// for (const eventName of ["mouseover", "mousemove"]) {
//   btn.addEventListener(eventName, moveButton);
// }


const btn = document.querySelector(".btn");
const men = document.querySelectorAll(".man");
 
const len = 200;

function moveButton() {
  const axisx = Math.floor(Math.random() * (innerWidth - len));
  const axisy = Math.floor(Math.random() * (innerHeight - len));
  

  this.style.top = `${axisy}px`;
  this.style.left = `${axisx}px`;
  checkGoal();
}

function passBallToNextMan() {
  currentManIndex = (currentManIndex + 1) % men.length; // Loop through the men array
  const man = men[currentManIndex];
  const manPos = man.getBoundingClientRect();
  const ballPos = btn.getBoundingClientRect();

  const deltaX = manPos.left - ballPos.left;
  const deltaY = manPos.top - ballPos.top;

  const moveX = deltaX / 10;
  const moveY = deltaY / 10;

  let newX = ballPos.left + moveX;
  let newY = ballPos.top + moveY;

  btn.style.left = newX + "px";
  btn.style.top = newY + "px";

  // Check if the ball has reached the man
  if (Math.abs(deltaX) < 5 && Math.abs(deltaY) < 5) {
    setTimeout(passBallToNextMan, 1000); // Wait for a second before passing to next man
  } else {
    requestAnimationFrame(passBallToNextMan);
  }
}
 
for (const eventName of ["mouseover", "mousemove"]) {
  btn.addEventListener(eventName, moveButton);
}

// Trigger the passing of the ball to the next man when the button is clicked
btn.addEventListener("click", () => {
  passBallToNextMan();
});
