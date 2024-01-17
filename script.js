let cartItems = [];

function addToCart(itemName, itemPrice) {
    cartItems.push({ name: itemName, price: itemPrice });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");

    cartList.innerHTML = "";
    let total = 0;

    cartItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
        total += item.price;
    });

    totalPrice.textContent = `$${total.toFixed(2)}`;
}

function checkout() {
    alert("Thank you for your order!");
    // You can implement additional checkout functionality here
    cartItems = [];
    updateCart();
}
