const finalPrice = document.getElementById('finalPrice')
const finalSeats = document.getElementById('finalSeats')
finalPrice.textContent ="Total Amount : " + window.localStorage.getItem('price') + " Rs only."
finalSeats.textContent ="Seats Selected are : " + window.localStorage.getItem('seats')