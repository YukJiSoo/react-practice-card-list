import * as React from 'react';
import { useEffect, useContext, useRef } from 'react';
import * as Styles from './style';

import Card from 'components/Card';

import ProductsDummyData from 'data/procucts';

import { useFakeFetch, useIntersectionObserver } from 'hooks';

import { newProductsFetchedActionCreator } from 'actions/Product';
import { ProductContext } from 'store/Product';

const Main = () => {
    const { product, dispatchProduct } = useContext(ProductContext);
    const dataLoadZoneRef = useRef();

    const [{ loading, data }, fetchData] = useFakeFetch(ProductsDummyData);
    const setTarget = useIntersectionObserver({
        threshold: 0.5,
        handleIntersection,
    });

    const { fetchedProducts } = product;

    function handleIntersection() {
        if (loading) return;

        const startDataOrder = fetchedProducts.length;
        const dataNumber = 10;
        fetchData({ startDataOrder, dataNumber });
    }

    const handleDidMount = () => {
        setTarget(dataLoadZoneRef.current);
    };

    const handleDataFetched = () => {
        if (!data) return;

        const payload = { newProducts: data };
        const newProductsFetchedAction = newProductsFetchedActionCreator(
            payload
        );
        dispatchProduct(newProductsFetchedAction);
    };

    useEffect(handleDidMount, []);
    useEffect(handleDataFetched, [data]);

    const Cards = fetchedProducts.map(({ id, thumbnailPath, name, price }) => (
        <Card
            key={id}
            id={id}
            thumbnailPath={thumbnailPath}
            name={name}
            price={price}
        />
    ));
    return (
        <Styles.Main>
            <Styles.CardList>{Cards}</Styles.CardList>
            <Styles.DataLoadZone ref={dataLoadZoneRef} />
        </Styles.Main>
    );
};

export default Main;
