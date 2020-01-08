import * as React from 'react';
import { useEffect, useContext, useRef } from 'react';
import * as Styles from './style';

import Card from 'components/Card';

import ProductsDummyData from 'data/procucts';

import { useFakeFetch, useIntersectionObserver } from 'hooks';

import {
    newProductsFetchedActionCreator,
    toggleWishActionCreator,
} from 'actions/Product';
import { ProductContext } from 'store/Product';

import * as LocalStorage from 'utils/localStorage';

const Main = () => {
    const { product, dispatchProduct } = useContext(ProductContext);
    const dataLoadZoneRef = useRef();

    const [{ loading, data }, fetchData] = useFakeFetch(ProductsDummyData);
    const setTarget = useIntersectionObserver({
        threshold: 0.5,
        handleIntersection,
    });

    const { fetchedProducts, wishList } = product;

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

    const handleToggleWish = id => isWish => {
        const newWishList = isWish
            ? Object.values(wishList)
                  .filter(item => item.id !== id)
                  .reduce((acc, cur) => ({ ...acc, [cur.id]: cur }), {})
            : { ...wishList, [id]: fetchedProducts[id] };
        LocalStorage.setData('wishList', newWishList);

        const payload = { newWishList };
        const toggleWishAction = toggleWishActionCreator(payload);
        dispatchProduct(toggleWishAction);
    };

    useEffect(handleDidMount, []);
    useEffect(handleDataFetched, [data]);

    const Cards = fetchedProducts.map(({ id, thumbnailPath, name, price }) => {
        const isWish = wishList && wishList[id] ? true : false;

        return (
            <Card
                key={id}
                thumbnailPath={thumbnailPath}
                name={name}
                price={price}
                isWish={isWish}
                handleToggleWish={handleToggleWish(id, isWish)}
            />
        );
    });

    return (
        <Styles.Main>
            <Styles.CardList>{Cards}</Styles.CardList>
            <Styles.DataLoadZone ref={dataLoadZoneRef} />
        </Styles.Main>
    );
};

export default Main;
