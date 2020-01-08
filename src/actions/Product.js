import { newProductsFetched, toggleWish, selectTab } from './types';

export const newProductsFetchedActionCreator = ({ newProducts }) => {
    return { type: newProductsFetched, payload: { newProducts } };
};

export const toggleWishActionCreator = ({ newWishList }) => {
    return { type: toggleWish, payload: { newWishList } };
};

export const selectTabActionCreator = ({ newTabIndex }) => {
    return { type: selectTab, payload: { newTabIndex } };
};
