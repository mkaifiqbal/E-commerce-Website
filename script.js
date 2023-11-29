
function selectSize(button) {

    var sizeButtons = document.querySelectorAll('.size-button');
    sizeButtons.forEach(function (sizeButton) {
        sizeButton.classList.remove('selected');
    });

    button.classList.add('selected');
}


let cartItems = [];

function addToCart(productName, price, image) {
    const product = {
        name: productName,
        price: price,
        image: image,
    };

    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartUI();
}


function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');

    const storedCartItems = localStorage.getItem('cartItems');
    cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];

    cartItems.forEach((item, index) => {
        const row = document.createElement('tr');

        const imgCell = document.createElement('td');
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        imgCell.appendChild(img);
        row.appendChild(imgCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = item.name;
        row.appendChild(nameCell);

        const priceCell = document.createElement('td');
        priceCell.textContent = `₹${item.price}`;
        row.appendChild(priceCell);

        const removeCell = document.createElement('td');
        const removeButton = document.createElement('button');
        removeButton.style.backgroundColor = '#007f77';
        removeButton.style.border = 'none';
        removeButton.style.color = '#fff';
        removeButton.style.padding = '10px 20px';
        removeButton.style.borderRadius = '15px';
        removeButton.style.cursor = 'pointer';
        removeButton.style.display = 'flex';
        removeButton.style.justifyContent = 'center';
        removeButton.style.alignItems = 'center';
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removeFromCart(index));
        removeCell.appendChild(removeButton);
        row.appendChild(removeCell);

        cartItemsContainer.appendChild(row);
    });
}


function updateCartUI() {

    alert('Item added to the cart!');
}


function removeFromCart(index) {
    cartItems.splice(index, 1);

    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    displayCartItems();
}


displayCartItems();


