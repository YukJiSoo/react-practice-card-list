import * as React from 'react';
import { createContext, useReducer } from 'react';
import ProductReducer from './reducer';

export const ProductContext = createContext();

const initialValue = {
    fetchedProducts: [],
    wishList: [],
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
