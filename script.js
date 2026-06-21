let total = 0;

function addToCart(service, price){

    const cartItems =
    document.getElementById("cart-items");

    const item =
    document.createElement("div");

    item.classList.add("cart-item");

    item.innerHTML =
    `${service} - ₹${price}`;

    cartItems.appendChild(item);

    total += price;

    document.getElementById("total")
    .innerText = total;
}



document
.getElementById("bookingForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert(
      "Booking Confirmed Successfully!"
    );

    this.reset();
});