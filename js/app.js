function countdown() {
  let now = new Date();

  let christmasDay = new Date("December 24, 2021 18:00:00");

  let diffSeconds = Math.floor((christmasDay.getTime() - now.getTime()) / 1000);

  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  days = Math.floor(diffSeconds / (3600 * 24));
  diffSeconds -= days * 3600 * 24;
  hours = Math.floor(diffSeconds / 3600);
  diffSeconds -= hours * 3600;
  minutes = Math.floor(diffSeconds / 60);
  diffSeconds -= minutes * 60;
  seconds = diffSeconds;

  document.querySelector("#days p").innerText = days;
  document.querySelector("#hours p").innerText = hours;
  document.querySelector("#minutes p").innerText = minutes;
  document.querySelector("#secounds p").innerText = seconds;

  setTimeout(countdown, 1000);
}

countdown();
