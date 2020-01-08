import * as React from 'react';
import { useState, useEffect, useContext, useRef } from 'react';
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
    const [selectedProducts, setSelectedProducts] = useState([]);

    const [{ loading, data }, fetchData] = useFakeFetch(ProductsDummyData);
    const setTarget = useIntersectionObserver({
        threshold: 0.5,
        handleIntersection,
    });

    const {
        fetchedProducts,
        wishList,
        selectedTab,
        tabList,
        selectedSortOption,
        sortOptionList,
    } = product;

    function handleIntersection() {
        if (loading) return;
        if (selectedTab !== 0) return;

        const startDataOrder = selectedProducts.length;
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

    const handleUpdateProducts = () => {
        let newProducts =
            selectedTab === 0 ? fetchedProducts : Object.values(wishList);
        newProducts = [...newProducts].sort(
            sortOptionList[selectedSortOption].method
        );

        setSelectedProducts(newProducts);
    };

    const handleToggleWish = id => isWish => {
        const newWishList = isWish
            ? Object.values(wishList)
                  .filter(item => item.id !== id)
                  .reduce((acc, cur) => ({ ...acc, [cur.id]: cur }), {})
            : {
                  ...wishList,
                  [id]: selectedProducts.filter(item => item.id === id)[0],
              };
        LocalStorage.setData('wishList', newWishList);

        const payload = { newWishList };
        const toggleWishAction = toggleWishActionCreator(payload);
        dispatchProduct(toggleWishAction);
    };

    const handleSelctTab = () => {
        const top = tabList[selectedTab].lastTopPosition;
        setTimeout(() => window.scrollTo(0, top), 0);
    };

    useEffect(handleDidMount, []);
    useEffect(handleDataFetched, [data]);
    useEffect(handleUpdateProducts, [
        fetchedProducts,
        wishList,
        selectedTab,
        selectedSortOption,
    ]);
    useEffect(handleSelctTab, [selectedTab]);

    const Cards = selectedProducts.map(({ id, thumbnailPath, name, price }) => {
        const isWish = wishList && wishList[id] ? true : false;

        return (
            <Card
                key={`card-${id}`}
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
