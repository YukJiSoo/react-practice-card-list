import * as React from 'react';
import { useContext } from 'react';
import * as Styles from './style';

import Card from 'components/Card';

import { ProductContext } from 'store/Product';

const Main = () => {
    const { product } = useContext(ProductContext);

    const Cards = product.fetchedProducts.map(
        ({ id, thumbnailPath, name, price }) => (
            <Card
                key={id}
                id={id}
                thumbnailPath={thumbnailPath}
                name={name}
                price={price}
            />
        )
    );
    return (
        <Styles.Main>
            <Styles.CardList>{Cards}</Styles.CardList>
        </Styles.Main>
    );
};

export default Main;
