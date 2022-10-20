const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row1 .seats:not(.booked)')
const total = document.getElementById('total')
let numberTOtal = +total.textContent
const selectedSeats = document.getElementById("selectedSeats")
container.addEventListener('click',(e)=> {
    if(e.target.classList.contains('seats') && !e.target.classList.contains('booked'))

{e.target.classList.toggle('selected')
console.log(e.target.textContent)
selectedSeats.textContent += e.target.textContent + ","
total.textContent= ""
}
})
