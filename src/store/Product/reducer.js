import * as Actions from 'actions/types';

const newProductsFetched = (state, { newProducts }) => {
    return {
        ...state,
        fetchedProducts: [...state.fetchedProducts, ...newProducts],
    };
};

const toggleWish = (state, { newWishList }) => {
    return {
        ...state,
        wishList: newWishList,
    };
};

const selectTab = (state, { newTabIndex }) => ({
    ...state,
    selectedTab: Number(newTabIndex),
});

const ProductReducer = (state, { type, payload }) => {
    const reducers = {
        [Actions.newProductsFetched]: newProductsFetched,
        [Actions.toggleWish]: toggleWish,
        [Actions.selectTab]: selectTab,
    };

    const reducer = reducers[type];
    return reducer ? reducer(state, payload) : state;
};

export default ProductReducer;
