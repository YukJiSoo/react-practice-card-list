import { newProductsFetched, toggleWish } from './types';

export const newProductsFetchedActionCreator = ({ newProducts }) => {
    return { type: newProductsFetched, payload: { newProducts } };
};

export const toggleWishActionCreator = ({ newWishList }) => {
    return { type: toggleWish, payload: { newWishList } };
};
