import React from 'react';

const Product = ({ product }) => {
    return ( <
        div className = "product" >
        <
        img src = { product.imageUrl }
        alt = { product.name }
        /> <
        h2 > { product.name } < /h2> <
        p > { product.description } < /p> <
        p > $ { product.price.toFixed(2) } < /p> <
        /div>
    );
};

export default Product;