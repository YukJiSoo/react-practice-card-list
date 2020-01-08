import * as React from 'react';
import { useContext } from 'react';
import * as Styles from './style';

import TabList from 'components/TabList';
import OptionList from 'components/OptionList';

import { ProductContext } from 'store/Product';

import {
    selectTabActionCreator,
    selectOptionActionCreator,
} from 'actions/Product';

const Header = () => {
    const {
        product: { tabList, selectedTab, selectedOption, sortOptionList },
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

    const handleSelectOption = e => {
        const newOptionIndex = e.target.dataset.index;
        const selectOptionAction = selectOptionActionCreator({
            newOptionIndex,
        });
        dispatchProduct(selectOptionAction);
    };

    return (
        <Styles.Header>
            <TabList
                handleSelectTab={handleSelectTab}
                tabList={tabList.map(({ name }) => name)}
                selectedTab={selectedTab}
            />
            <OptionList
                handleSelectOption={handleSelectOption}
                optionList={sortOptionList}
                selectedOption={selectedOption}
            />
        </Styles.Header>
    );
};
export default Header;
