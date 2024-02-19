const seatCost = 500;

function calculateTotalCost() {
    const selectedSeats = document.querySelectorAll('.selected-seat');
    const totalSeats = selectedSeats.length;
    const totalCost = totalSeats * seatCost;
    return totalCost;
}


function applyCoupon(couponCode) {
    let discount = 0;
    if (couponCode === 'NEW15') {
        discount = 0.15 * calculateTotalCost(); 
    } else if (couponCode === 'Couple20') {
        discount = 0.2 * calculateTotalCost();
    }
    const totalCost = calculateTotalCost() - discount;
    document.getElementById('total-cost').textContent = totalCost;
}

const seatElements = document.querySelectorAll('.kbd');
seatElements.forEach(seat => {
    seat.addEventListener('click', function() {
        if (!seat.classList.contains('selected-seat')) {
            seat.classList.add('selected-seat');
        } else {
            seat.classList.remove('selected-seat');
        }
        document.getElementById('total-cost').textContent = calculateTotalCost();
    });
});

const applyCouponButton = document.getElementById('apply-coupon');
applyCouponButton.addEventListener('click', function() {
    const couponCode = document.getElementById('coupon-input').value;
    applyCoupon(couponCode);
});