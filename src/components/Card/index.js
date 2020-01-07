import * as React from 'react';
import * as Styles from './style';

import Wish from 'components/Wish';

const WISH_COMPONENT_SIZE = '1.5rem';

const Card = ({ id, thumbnailPath, name, price }) => {
    return (
        <Styles.Card>
            <Styles.WishWrapper>
                <Wish isTrue={true} size={WISH_COMPONENT_SIZE} />
            </Styles.WishWrapper>
            <Styles.Thumbnail src={thumbnailPath} />
            <Styles.Name>{name}</Styles.Name>
            <Styles.Price>{price}</Styles.Price>
        </Styles.Card>
    );
};

export default Card;
