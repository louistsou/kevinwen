// App.js
import React from 'react';
import ProductCatalog from 'productcatalog.js';
import products from './products'; // Import your product data from a file

function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        h1 > Product Catalog < /h1> < /
        header > <
        main >
        <
        ProductCatalog products = { products }
        /> < /
        main > <
        /div>
    );
}

export default App;