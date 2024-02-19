function copyCouponCode(code) {
    const el = document.createElement('textarea');
    el.value = code.textContent.trim();
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Coupon code copied to clipboard: ' + code.textContent.trim());
}


document.addEventListener('DOMContentLoaded', function() {
    const buyTicketsBtn = document.getElementById('buyTicketsBtn');
    const selectSeatSection = document.getElementById('selectSeatSection');

    if (buyTicketsBtn && selectSeatSection) {
        buyTicketsBtn.addEventListener('click', function() {
            selectSeatSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});