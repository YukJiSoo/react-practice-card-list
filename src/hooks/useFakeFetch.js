import { useState } from 'react';

const initialState = { data: undefined, loading: false, error: false };
const loadingState = { ...initialState, loading: true };
const errorState = { ...initialState, error: true };
const successState = data => ({ ...initialState, data });

const useFakeFetch = (data, fetchingTime = 300) => {
    const [state, setState] = useState(initialState);

    const fetchData = ({
        startDataOrder = 0,
        dataNumber,
        expectError = false,
    }) => {
        setState(loadingState);
        const handleReturnError = () => setState(errorState);
        const handleReturnSuccess = () => {
            const result = data.slice(
                startDataOrder,
                startDataOrder + dataNumber
            );
            setState(successState(result));
        };

        const fetchDataFake = expectError
            ? handleReturnError
            : handleReturnSuccess;
        setTimeout(fetchDataFake, fetchingTime);
    };

    return [state, fetchData];
};

export default useFakeFetch;
