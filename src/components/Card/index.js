import * as React from 'react';
import * as Styles from './style';

import Wish from 'components/Wish';

const WISH_COMPONENT_SIZE = '1.5rem';

const Card = () => {
    return (
        <Styles.Card>
            <Styles.WishWrapper>
                <Wish isTrue={true} size={WISH_COMPONENT_SIZE} />
            </Styles.WishWrapper>
            <Styles.Thumbnail src="https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-1.jpg" />
            <Styles.Name>
                [호텔] 상트페레트부르크에서 출발하는 푸쉬킨(차르스코예 셀로)과
                예카테리나
            </Styles.Name>
            <Styles.Price>20105원</Styles.Price>
        </Styles.Card>
    );
};

export default Card;
