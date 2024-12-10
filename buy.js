// Select elements
const buyPage = document.getElementById("buyPage");
const closeBtn = document.getElementById("closeBtn");
const cancelBtn = document.getElementById("cancelBtn");
const confirmOrderBtn = document.getElementById("confirmOrderBtn");
const orderForm = document.getElementById("orderForm");

// Show the buy page
function showBuyPage() {
    buyPage.classList.add("show");
}

// Hide the buy page
function hideBuyPage() {
    buyPage.classList.remove("show");
}

// Handle form submission
function confirmOrder(event) {
    event.preventDefault();
    const formData = new FormData(orderForm);
    const orderDetails = Object.fromEntries(formData);
    alert(
        `Order Confirmed!\n\nName: ${orderDetails.name}\nEmail: ${orderDetails.email}\nAddress: ${orderDetails.address}\nProduct: ${orderDetails.product}`
    );
    hideBuyPage();
}

// Event listeners
closeBtn.addEventListener("click", hideBuyPage);
cancelBtn.addEventListener("click", hideBuyPage);
confirmOrderBtn.addEventListener("click", confirmOrder);

// Example usage: Show the buy page on load
setTimeout(showBuyPage, 1000);
