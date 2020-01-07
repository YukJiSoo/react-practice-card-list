import * as React from 'react';
import { createContext, useEffect, useReducer } from 'react';
import ProductReducer from './reducer';

import { useFakeFetch } from 'hooks';

import ProductsDummyData from 'data/procucts';

import { newProductsFetchedActionCreator } from 'actions/Product';

export const ProductContext = createContext();

const initialValue = {
    fetchedProducts: [],
    wishList: [],
};

const ProductStore = ({ children }) => {
    const [product, dispatchProduct] = useReducer(ProductReducer, initialValue);

    const [{ data }, fetchData] = useFakeFetch();

    const handleFirstFetchData = () => {
        const data = ProductsDummyData;
        const startDataOrder = 0;
        const dataNumber = 10;
        fetchData({ data, startDataOrder, dataNumber });
    };
    const handleDataFetched = () => {
        if (!data) return;
        const payload = { newProducts: data };
        const newProductsFetchedAction = newProductsFetchedActionCreator(
            payload
        );
        dispatchProduct(newProductsFetchedAction);
    };

    useEffect(handleFirstFetchData, []);
    useEffect(handleDataFetched, [data]);

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
