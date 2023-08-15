// ProductCatalog.js
import React from 'react';
import Product from 'product.js';

const ProductCatalog = ({ products }) => {
    return ( <
        div className = "product-catalog" > {
            products.map((product) => ( <
                Product key = { product.id }
                product = { product }
                />
            ))
        } <
        /div>
    );
};

export default ProductCatalog;