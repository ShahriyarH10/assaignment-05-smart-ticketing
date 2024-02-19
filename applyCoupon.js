const seatCost = 500;

function updateSeatSelection(seat) {
    if (!seat.classList.contains('selected-seat')) {
        seat.classList.add('selected-seat');
        seat.style.backgroundColor = '#4caf50'; 
    } else {
        seat.classList.remove('selected-seat');
        seat.style.backgroundColor = ''; 
    }
    document.getElementById('total-cost').textContent = calculateTotalCost();
}

const seatElements = document.querySelectorAll('.kbd');
seatElements.forEach(seat => {
    seat.addEventListener('click', function() {
        updateSeatSelection(seat);
        updateSelectedSeatInfo(seat.id);
    });
});

function updateSelectedSeatInfo(seatId) {
    const selectedSeatInfo = document.getElementById('selected-seat-info');
    selectedSeatInfo.textContent = `Selected Seat: ${seatId}, Cost: ${seatCost} taka`;
}

function calculateTotalCost() {
    const selectedSeats = document.querySelectorAll('.selected-seat');
    const totalSeats = selectedSeats.length;
    const totalCost = totalSeats * seatCost;
    return totalCost;
}

function applyCoupon(couponCode) {
    let discount = 0;
    if (couponCode === 'NEW15') {
        discount = 0.15 * calculateTotalCost(); // 15% discount
    } else if (couponCode === 'Couple20') {
        discount = 0.2 * calculateTotalCost(); // 20% discount
    }
    const totalCost = calculateTotalCost() - discount;
    document.getElementById('total-cost').textContent = totalCost;
}

const applyCouponButton = document.getElementById('apply-coupon');
applyCouponButton.addEventListener('click', function() {
    const couponCode = document.getElementById('coupon-input').value;
    applyCoupon(couponCode);
});