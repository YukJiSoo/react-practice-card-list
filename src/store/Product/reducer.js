import * as Actions from 'actions/types';

const newProductsFetched = (state, { newProducts }) => {
    return {
        ...state,
        fetchedProducts: [...state.fetchedProducts, ...newProducts],
    };
};

const ProductReducer = (state, { type, payload }) => {
    const reducers = {
        [Actions.newProductsFetched]: newProductsFetched,
    };

    const reducer = reducers[type];
    return reducer ? reducer(state, payload) : state;
};

export default ProductReducer;
