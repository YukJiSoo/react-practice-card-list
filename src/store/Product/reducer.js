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

const selectTab = (state, { newTabIndex, lastTopPosition }) => {
    const selectedTab = state.selectedTab;
    const tabList = state.tabList.map((tab, index) => {
        if (selectedTab === index) return { ...tab, lastTopPosition };
        return tab;
    });

    return {
        ...state,
        selectedTab: Number(newTabIndex),
        tabList,
    };
};

const selectOption = (state, { newOptionIndex }) => {
    return {
        ...state,
        selectedOption: Number(newOptionIndex),
    };
};

const ProductReducer = (state, { type, payload }) => {
    const reducers = {
        [Actions.newProductsFetched]: newProductsFetched,
        [Actions.toggleWish]: toggleWish,
        [Actions.selectTab]: selectTab,
        [Actions.selectOption]: selectOption,
    };

    const reducer = reducers[type];
    return reducer ? reducer(state, payload) : state;
};

export default ProductReducer;
