const tmName = document.querySelector(
  ".ticket_container .ticketMovieName .tmName"
);
const tmSeats = document.querySelector(
  ".ticket_container .ticketMovieName .tmSeats"
);
const tmAmount = document.querySelector(
  ".ticket_container .ticketMovieName .tmAmount"
);
tmName.textContent = window.localStorage.getItem("m1");
tmSeats.textContent = window.localStorage.getItem("seats");
tmAmount.textContent = window.localStorage.getItem("price");

