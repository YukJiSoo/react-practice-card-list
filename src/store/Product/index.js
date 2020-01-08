import * as React from 'react';
import { createContext, useReducer } from 'react';
import ProductReducer from './reducer';

import * as LocalStorage from 'utils/localStorage';

export const ProductContext = createContext();

const initialValue = {
    fetchedProducts: [],
    wishList: LocalStorage.getData('wishList')
        ? LocalStorage.getData('wishList')
        : {},
};

const ProductStore = ({ children }) => {
    const [product, dispatchProduct] = useReducer(ProductReducer, initialValue);

    return (
        <ProductContext.Provider
            value={{
                product,
                dispatchProduct,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export default ProductStore;
