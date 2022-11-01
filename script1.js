const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row1 .seats:not(.booked)')
const total = document.getElementById('total')
let numberTOtal = +total.textContent
const selectedSeats = document.getElementById("selectedSeats")
let count = 0
let seatArray=[]
container.addEventListener('click',(e)=> {
    if(e.target.classList.contains('seats') && !e.target.classList.contains('booked'))

{e.target.classList.toggle('selected')
if(e.target.classList.contains('selected'))
{   seatArray.push(e.target.textContent)
    count++}
else{


    seatArray.removeByValue = function (val) {
        for (let i = 0; i < this.length; i++) {
          if (this[i] === val) {
            this.splice(i, 1);
            i--;
          }
        }
        return this;
      }
      seatArray.removeByValue(e.target.textContent)

    count--}
total.textContent= 150 * count
window.localStorage.setItem('price',total.textContent)
}
selectedSeats.textContent = seatArray 
window.localStorage.setItem('seats',selectedSeats.textContent)
})
const nameContainer = document.getElementById('movieId')
nameContainer.textContent = window.localStorage.getItem('m1')