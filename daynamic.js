function copyCouponCode(code) {
    const el = document.createElement('textarea');
    el.value = code.textContent.trim();
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Coupon code copied to clipboard: ' + code.textContent.trim());
}


const availableSeats = document.querySelectorAll('.available-seat');
const selectedSeats = document.getElementById('selected-seats');

availableSeats.forEach(seat => {
  seat.addEventListener('click', () => {
    seat.classList.toggle('selected');
    updateSelectedSeatsList(); 
  });
});
