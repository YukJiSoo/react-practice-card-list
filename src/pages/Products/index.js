import * as React from 'react';
import { useEffect, useContext } from 'react';

import { Header, Main } from 'containers/Products';

import { useFakeFetch } from 'hooks';

import ProductsDummyData from 'data/procucts';

import { ProductContext } from 'store/Product';
import { newProductsFetchedActionCreator } from 'actions/Product';

const Products = () => {
    const { dispatchProduct } = useContext(ProductContext);
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
        <>
            <Header />
            <Main />
        </>
    );
};

export default Products;
