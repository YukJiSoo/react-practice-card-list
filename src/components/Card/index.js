import * as React from 'react';
import { useEffect, useRef } from 'react';
import * as Styles from './style';

import Wish from 'components/Wish';

import { useIntersectionObserver } from 'hooks';

const WISH_COMPONENT_SIZE = '1.5rem';

const Card = ({ thumbnailPath, name, price, isWish, handleToggleWish }) => {
    const imgRef = useRef(null);
    const setTarget = useIntersectionObserver({
        rootMargin: '5%',
        handleIntersection,
    });
    function handleIntersection(target, observer) {
        target.src = target.dataset.src;
        observer.unobserve(target);
    }

    useEffect(() => {
        setTarget(imgRef.current);
    }, [setTarget, imgRef]);

    return (
        <Styles.Card>
            <Styles.WishWrapper>
                <Wish
                    intialWish={isWish}
                    size={WISH_COMPONENT_SIZE}
                    handleToggleWish={handleToggleWish}
                />
            </Styles.WishWrapper>
            <Styles.Thumbnail ref={imgRef} data-src={thumbnailPath} />
            <Styles.Name>{name}</Styles.Name>
            <Styles.Price>{price}원</Styles.Price>
        </Styles.Card>
    );
};

export default Card;
