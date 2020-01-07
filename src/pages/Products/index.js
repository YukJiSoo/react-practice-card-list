import * as React from 'react';

import { Header, Main } from 'containers/Products';

import ProductStore from 'store/Product';

const Products = () => {
    return (
        <ProductStore>
            <Header />
            <Main />
        </ProductStore>
    );
};

export default Products;
