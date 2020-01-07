import * as React from 'react';
import * as Styles from './style';

const Header = () => {
    return (
        <Styles.Header>
            <Styles.Tabs>
                <Styles.Tab>상품 리스트</Styles.Tab>
                <Styles.Tab>위시 리스트</Styles.Tab>
            </Styles.Tabs>
            <Styles.SortOptions>
                <Styles.SortOption>정렬 없음</Styles.SortOption>
                <Styles.SortOption>높은 가격 순서</Styles.SortOption>
                <Styles.SortOption>낮은 가격 순서</Styles.SortOption>
            </Styles.SortOptions>
        </Styles.Header>
    );
};
export default Header;
