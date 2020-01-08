import { newProductsFetched, toggleWish } from './types';

export const newProductsFetchedActionCreator = ({ newProducts }) => {
    return { type: newProductsFetched, payload: { newProducts } };
};

export const toggleWishActionCreator = ({ productId }) => {
    return { type: toggleWish, payload: { productId } };
};
