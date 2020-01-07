import { useState } from 'react';

const initialState = { data: undefined, loading: false, error: false };
const loadingState = { ...initialState, loading: true };
const errorState = { ...initialState, error: true };
const successState = data => ({ ...initialState, data });

const WAIT_TIME = 2000;

const useFakeFetch = () => {
    const [state, setState] = useState(loadingState);

    const fetchData = ({
        data,
        startDataOrder,
        dataNumber,
        expectError = false,
    }) => {
        setState(loadingState);
        const handleReturnError = () => setState(errorState);
        const handleReturnSuccess = () => {
            const result = data.slice(startDataOrder, dataNumber);
            setState(successState(result));
        };

        const fetchDataFake = expectError
            ? handleReturnError
            : handleReturnSuccess;
        setTimeout(fetchDataFake, WAIT_TIME);
    };

    return [state, fetchData];
};

export default useFakeFetch;
