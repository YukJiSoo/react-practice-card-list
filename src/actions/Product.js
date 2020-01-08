import {
    newProductsFetched,
    toggleWish,
    selectTab,
    selectOption,
} from './types';

export const newProductsFetchedActionCreator = ({ newProducts }) => {
    return { type: newProductsFetched, payload: { newProducts } };
};

export const toggleWishActionCreator = ({ newWishList }) => {
    return { type: toggleWish, payload: { newWishList } };
};

export const selectTabActionCreator = ({ newTabIndex, lastTopPosition }) => {
    return {
        type: selectTab,
        payload: { newTabIndex, lastTopPosition },
    };
};

export const selectOptionActionCreator = ({ newOptionIndex }) => {
    return { type: selectOption, payload: { newOptionIndex } };
};
