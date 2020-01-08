import * as React from 'react';
import { useEffect, useCallback, useRef } from 'react';
import * as Styles from './style';

import Wish from 'components/Wish';

import { useIntersectionObserver } from 'hooks';

const WISH_COMPONENT_SIZE = '1.5rem';

const Card = ({ id, thumbnailPath, name, price }) => {
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
    }, [imgRef.current]);

    return (
        <Styles.Card>
            <Styles.WishWrapper>
                <Wish isTrue={true} size={WISH_COMPONENT_SIZE} />
            </Styles.WishWrapper>
            <Styles.Thumbnail ref={imgRef} data-src={thumbnailPath} />
            <Styles.Name>{name}</Styles.Name>
            <Styles.Price>{price}</Styles.Price>
        </Styles.Card>
    );
};

export default Card;
