import * as React from 'react';
import { useContext } from 'react';
import * as Styles from './style';

import TabList from 'components/TabList';

import { ProductContext } from 'store/Product';

import { selectTabActionCreator } from 'actions/Product';

const Header = () => {
    const {
        product: { tabList, selectedTab },
        dispatchProduct,
    } = useContext(ProductContext);

    const handleSelectTab = e => {
        const newTabIndex = e.target.dataset.index;
        const lastTopPosition = window.scrollY;
        const selectTabAction = selectTabActionCreator({
            newTabIndex,
            lastTopPosition,
        });
        dispatchProduct(selectTabAction);
    };

    return (
        <Styles.Header>
            <TabList
                handleSelectTab={handleSelectTab}
                tabList={tabList.map(({ name }) => name)}
                selectedTab={selectedTab}
            />
            <Styles.SortOptions>
                <Styles.SortOption>정렬 없음</Styles.SortOption>
                <Styles.SortOption>높은 가격 순서</Styles.SortOption>
                <Styles.SortOption>낮은 가격 순서</Styles.SortOption>
            </Styles.SortOptions>
        </Styles.Header>
    );
};
export default Header;
