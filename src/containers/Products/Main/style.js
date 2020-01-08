import styled from 'styled-components';

export const Main = styled.main`
    padding-top: 20vh;
`;

export const CardList = styled.section`
    display: grid;

    @media only screen and (min-width: 1024px) {
        grid-template-columns: repeat(4, 20vw);
        grid-column-gap: 4vw;
        grid-row-gap: 4vw;
        margin: 0 4vw;
    }

    @media only screen and (max-width: 1024px) {
        grid-template-columns: repeat(3, 24vw);
        grid-column-gap: 7vw;
        grid-row-gap: 7vw;
        margin: 0 7vw;
    }

    @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 41vw);
        grid-column-gap: 6vw;
        grid-row-gap: 6vw;
        margin: 0 6vw;
    }

    @media only screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 90vw);
        grid-row-gap: 5vw;
        margin: 0 5vw;
    }
`;

export const DataLoadZone = styled.div`
    width: 100%;
    height: 2rem;
`;

export const EmptyContents = styled.h1`
    margin-top: 6rem;

    font-size: 3rem;
    font-weight: lighter;
    text-align: center;

    color: #2b96ed;
`;
