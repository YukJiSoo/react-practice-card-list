import styled from 'styled-components';

export const OptionList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    height: 7vh;
`;

export const Option = styled.div`
    font-size: 0.8rem;

    color: ${({ isSelected }) => (isSelected ? '#2b96ed' : 'black')};

    cursor: pointer;

    &&:hover {
        font-weight: bold;
    }
`;
