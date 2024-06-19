const monthName = document.getElementById("month-name");
const dayName = document.getElementById("day-name");
const dayNumber = document.getElementById("day-number");
const year = document.getElementById("year");
const date = new Date();
const monthEl = date.getMonth();
const dayEl = date.getDay();
const yearEl = date.getFullYear();

monthName.innerHTML = date.toLocaleString("en", {
  month: "long",
});
dayName.innerHTML = date.toLocaleString("en", {
  weekday: "long",
});
dayNumber.innerText = date.toLocaleString("en", {
    day: "numeric",
})
year.innerText = date.toLocaleString("en", {
    year: "numeric",
})
