const container = document.querySelector('.container')
const seats = document.querySelectorAll('.seats .seat:not(.booked)')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')
let ticketPrice = +movieSelect.value
function updateSelectedCount(){
    const selectedSeats =document.querySelectorAll('.seats .seat.selected' )
    const selectedSeatsCount = selectedSeats.length
    count.innerText=selectedSeats.length
    total.innerText=selectedSeats.length *ticketPrice
}
movieSelect.addEventListener('change',(e)=>
{
    ticketPrice = +e.target.value
})
container.addEventListener('click',(e)=> {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('booked'))
    {e.target.classList.toggle('selected')}
    updateSelectedCount()
})