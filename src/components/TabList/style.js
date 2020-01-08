import styled from 'styled-components';

export const Tabs = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    height: 10vh;
`;

export const Tab = styled.div`
    line-height: 10vh;

    flex-grow: 1;

    font-size: 2rem;
    font-weight: lighter;
    color: ${({ isSelected }) => (isSelected ? '#2b96ed' : 'black')};

    text-align: center;

    cursor: pointer;

    &&:hover {
        background-color: rgba(4, 4, 15, 0.1);
    }
`;
