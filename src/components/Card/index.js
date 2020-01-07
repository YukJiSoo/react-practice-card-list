import * as React from 'react';
import { useEffect, useRef } from 'react';
import * as Styles from './style';

import Wish from 'components/Wish';

const WISH_COMPONENT_SIZE = '1.5rem';

const Card = ({ id, thumbnailPath, name, price }) => {
    const imgRef = useRef();

    const handleLazyLoadImage = () => {
        const options = {
            root: null,
            rootMargin: '100px',
            threshold: 0,
        };
        const handleInIntersecting = (observer, entry) => {
            const { target } = entry;
            if (!entry.isIntersecting) return;
            target.src = target.dataset.src;
            observer.unobserve(target);
        };
        const callbackFunction = (entries, observer) => {
            entries.forEach(handleInIntersecting.bind(undefined, observer));
        };

        const observer = new IntersectionObserver(callbackFunction, options);
        observer.observe(imgRef.current);

        return () => observer && observer.disconnect();
    };

    useEffect(handleLazyLoadImage, []);
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
