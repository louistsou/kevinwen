const productList = document.getElementById('product-container'); // Update to match the container ID

function displayProducts(products) {
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        // ... rest of the code to create product elements ...

        productList.appendChild(productDiv); // Append product to the container
    });
}

displayProducts(products); // Display products in the container