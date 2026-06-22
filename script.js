
const services = [
{
    name: "Dry Cleaning",
    price: 200,
    image: "images/dry-cleaning.jpg"
},
{
    name: "Shoe Cleaning",
    price: 150,
    image: "images/shoe-cleaning.jpg"
},
{
    name: "Leather Cleaning",
    price: 999,
    image: "images/leather-cleaning.jpg"
},
{
    name: "Washing & Ironing",
    price: 140,
    image: "images/washing.jpg"
}
];

let currentIndex = 0;
let cart = [];



function showService(){

    document.getElementById("serviceName").innerText =
    services[currentIndex].name;

    document.getElementById("servicePrice").innerText =
    "₹" + services[currentIndex].price;

    document.getElementById("serviceImage").src =
    services[currentIndex].image;
}



function skipService(){

    currentIndex++;

    if(currentIndex >= services.length){
        currentIndex = 0;
    }

    showService();
}



function addCurrentService(){

    cart.push({
        name: services[currentIndex].name,
        price: services[currentIndex].price
    });

    saveCart();

    renderCart();

    skipService();
}



function renderCart(){

    const cartBody =
    document.getElementById("cartBody");

    cartBody.innerHTML = "";

    let total = 0;

    cart.forEach((item,index)=>{

        total += item.price;

        cartBody.innerHTML += `
        <tr>
            <td>${index+1}</td>
            <td>${item.name}</td>
            <td>₹${item.price}</td>
            <td>
                <button
                class="remove-btn"
                onclick="removeItem(${index})">
                Remove
                </button>
            </td>
        </tr>
        `;
    });

    document.getElementById("total").innerText =
    total;
}



function removeItem(index){

    cart.splice(index,1);

    saveCart();

    renderCart();
}



function saveCart(){

    localStorage.setItem(
        "laundryCart",
        JSON.stringify(cart)
    );
}


function loadCart(){

    const storedCart =
    localStorage.getItem("laundryCart");

    if(storedCart){

        cart = JSON.parse(storedCart);

        renderCart();
    }
}


document
.getElementById("bookingForm")
.addEventListener("submit",function(e){

    e.preventDefault();

    alert(
        "Laundry Service Booked Successfully!"
    );

    this.reset();
});



loadCart();

showService();

