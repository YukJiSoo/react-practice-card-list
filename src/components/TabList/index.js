import * as React from 'react';
import * as Styles from './style';

const TabList = ({ tabList, selectedTab, handleSelectTab }) => {
    return (
        <Styles.Tabs onClick={handleSelectTab}>
            {tabList.map((name, index) => (
                <Styles.Tab
                    key={`tab-${index}`}
                    data-index={index}
                    isSelected={index === selectedTab}
                >
                    {name}
                </Styles.Tab>
            ))}
        </Styles.Tabs>
    );
};

export default TabList;
