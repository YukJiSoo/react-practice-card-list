import * as React from 'react';
import { createContext, useReducer } from 'react';
import ProductReducer from './reducer';

import * as LocalStorage from 'utils/localStorage';

export const ProductContext = createContext();

const DEFAULT_TAB = 0;
const DEFAULT_OPTION = 0;

const defaultSort = (prev, next) => prev.id - next.id;
const descendingSort = (prev, next) => next.price - prev.price;
const ascendingSort = (prev, next) => prev.price - next.price;

const initialValue = {
    selectedTab: DEFAULT_TAB,
    tabList: [
        { name: '상품 리스트', lastTopPosition: 0 },
        { name: '위시 리스트', lastTopPosition: 0 },
    ],
    selectedSortOption: DEFAULT_OPTION,
    sortOptionList: [
        { name: '정렬 없음', method: defaultSort },
        { name: '높은 가격 순서', method: descendingSort },
        { name: '낮은 가격 순서', method: ascendingSort },
    ],
    fetchedProducts: [],
    wishList: LocalStorage.getData('wishList')
        ? LocalStorage.getData('wishList')
        : {},
};

const ProductStore = ({ children }) => {
    const [product, dispatchProduct] = useReducer(ProductReducer, initialValue);

    return (
        <ProductContext.Provider
            value={{
                product,
                dispatchProduct,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export default ProductStore;
