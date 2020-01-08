import * as React from 'react';
import * as Styles from './style';

const OptionList = ({ optionList, selectedOption = 0, handleSelectOption }) => {
    return (
        <Styles.OptionList onClick={handleSelectOption}>
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
