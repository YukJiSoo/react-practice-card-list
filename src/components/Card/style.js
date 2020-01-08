import styled from 'styled-components';

export const Card = styled.article`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: stretch;

    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.16);
`;

export const WishWrapper = styled.div`
    position: absolute;
    top: 1%;
    right: 3%;
`;

export const Thumbnail = styled.img`
    height: 30vh;

    object-position: center center;
    object-fit: cover;

    background-color: gray;
`;

export const Name = styled.p`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;

    margin: 1rem;

    line-height: 1.5rem;
    font-size: 1rem;
    font-weight: bold;
`;

export const Price = styled.div`
    margin: auto 1rem 1rem 1rem;

    font-weight: lighter;
    color: gray;
`;
