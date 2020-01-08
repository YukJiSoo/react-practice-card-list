import * as React from 'react';
import * as Styles from './style';

const OptionList = ({ optionList, selectedOption = 0, handleSelectOption }) => {
    const onClick = e => {
        if (e.currentTarget === e.target) return;
        handleSelectOption(e);
    };
    return (
        <Styles.OptionList onClick={onClick}>
            {optionList.map((name, index) => (
                <Styles.Option
                    key={`option-${index}`}
                    data-index={index}
                    isSelected={index === selectedOption}
                >
                    {name}
                </Styles.Option>
            ))}
        </Styles.OptionList>
    );
};
export default OptionList;
