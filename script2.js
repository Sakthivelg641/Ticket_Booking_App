const finalPrice = document.getElementById('finalPrice')
const finalSeats = document.getElementById('finalSeats')
const heading = document.querySelectorAll(".image_container .image-block h1");
let j = 0;
let movietitleArray = [];
for (let i = 0; i < heading.length; i++) {
    movietitleArray[j] = heading[i].textContent
    j++
}
window.localStorage.setItem('movieTitle',JSON.stringify(movietitleArray))
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
finalPrice.textContent ="Total Amount : " + window.localStorage.getItem('price') + " Rs only."
finalSeats.textContent ="Seats Selected are : " + window.localStorage.getItem('seats')
