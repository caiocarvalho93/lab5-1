const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const addProductButton = document.getElementById("add-product");
const cart = document.getElementById("cart");
const totalH3 = document.querySelector("h3");

let totalPrice = 0;

// here ill change the total on my t=html3
function updateTotalPrice(amount) {
    totalPrice += amount;
    totalH3.textContent = "Total: " + totalPrice.toFixed(2);
}


function removeItem(event) {
    const item = event.target.closest("li");
    //go through, got float & not int 
    const price = parseFloat(item.dataset.price);
    updateTotalPrice(-price); //aqui eu uso minus
    item.remove();
}

function addProduct() {
    const name = productNameInput.value.trim();
    const price = parseFloat(productPriceInput.value);

    if (name === "" || isNaN(price) || price <= 0) {
        alert("noe... tantan, try again with a valid num");
        return;
    }

    const li = document.createElement("li");
    li.className = "cart-item";
    li.dataset.price = price;

    const nameSpan = document.createElement("span");
    nameSpan.textContent = name;

    const priceSpan = document.createElement("span");
    priceSpan.textContent = price.toFixed(2);

//so inside the li have two sections - name & price now 

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove"; //removing based on the textt , will get the one item i need pressing it
    removeBtn.addEventListener("click", removeItem);  

    li.appendChild(nameSpan);
    li.appendChild(priceSpan);
    li.appendChild(removeBtn);
    cart.appendChild(li);

    updateTotalPrice(price);

    // always gotta clear after!
    productNameInput.value = "";
    productPriceInput.value = "";
}

addProductButton.addEventListener("click", addProduct);
