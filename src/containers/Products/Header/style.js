import styled from 'styled-components';

export const Header = styled.header`
    z-index: 100;
    position: fixed;

    width: 100%;
    height: 17vh;

    background-color: white;
    box-shadow: inset 0 -1px 0 1px rgba(0, 0, 0, 0.16);
`;

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

    text-align: center;

    cursor: pointer;

    &&:hover {
        background-color: rgba(4, 4, 15, 0.1);
    }
`;

export const SortOptions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    height: 7vh;
`;

export const SortOption = styled.div`
    font-size: 0.8rem;

    color: #2b96ed;

    cursor: pointer;

    &&:hover {
        font-weight: bold;
    }
`;
