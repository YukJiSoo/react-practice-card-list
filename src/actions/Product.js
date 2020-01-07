import { newProductsFetched } from './types';

export const newProductsFetchedActionCreator = ({ newProducts }) => {
    return { type: newProductsFetched, payload: { newProducts } };
};
