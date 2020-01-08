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

const ProductReducer = (state, { type, payload }) => {
    const reducers = {
        [Actions.newProductsFetched]: newProductsFetched,
        [Actions.toggleWish]: toggleWish,
    };

    const reducer = reducers[type];
    return reducer ? reducer(state, payload) : state;
};

export default ProductReducer;
