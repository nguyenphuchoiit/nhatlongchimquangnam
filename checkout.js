// Hàm hiển thị giỏ hàng trên trang checkout
function displayCheckoutCart() {
    const checkoutCartContainer = document.getElementById('checkout-cart');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        checkoutCartContainer.innerHTML = '<p>Giỏ hàng của bạn trống.</p>';
        return;
    }

    let total = 0;
    const ul = document.createElement('ul');

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`;
        ul.appendChild(li);
        total += item.price * item.quantity;
    });

    checkoutCartContainer.appendChild(ul);
    checkoutCartContainer.innerHTML += `<p>Tổng cộng: $${total.toFixed(2)}</p>`;
}

// Hiển thị giỏ hàng khi trang checkout được tải
document.addEventListener('DOMContentLoaded', function() {
    displayCheckoutCart();
});
