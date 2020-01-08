import * as React from 'react';
import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Wish = ({ intialWish, handleToggleWish, size }) => {
    const [toggle, setToggle] = useState(intialWish);

    const onClickCapture = () => {
        handleToggleWish(toggle);
        setToggle(!toggle);
    };

    return toggle ? (
        <FaHeart
            onClickCapture={onClickCapture}
            size={size}
            color={'#ff4141'}
        />
    ) : (
        <FaRegHeart onClickCapture={onClickCapture} size={size} />
    );
};
export default Wish;
