// const header = document.querySelector('h1');
// const btnClick = document.querySelector("button")

// btnClick.addEventListener('click', () => {
//     header.style.color = "red";
//     header.innerText = "You just learn dom manipulation, we will get to that later"
// })

const bodyEl = document.querySelector("body");
bodyEl.addEventListener("mousemove", (e) => {
  const xPosX = e.offsetX;
  const xPosY = e.offsetY;
  const spanEl = document.createElement("span");
  spanEl.style.top = `${xPosY}px`;
  spanEl.style.left = `${xPosX}px`;
  const size = Math.random() * 100;
  spanEl.style.width = `${size}px`;
  spanEl.style.height = `${size}px`;
  bodyEl.appendChild(spanEl);

  setTimeout(() => {
    spanEl.remove();
  }, 3000);
}); 
