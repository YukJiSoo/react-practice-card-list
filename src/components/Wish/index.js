import * as React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Wish = ({ isTrue, onClickCapture, size }) =>
    isTrue ? (
        <FaHeart
            onClickCapture={onClickCapture}
            size={size}
            color={'#ff4141'}
        />
    ) : (
        <FaRegHeart onClickCapture={onClickCapture} size={size} />
    );

export default Wish;
