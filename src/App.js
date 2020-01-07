import * as React from 'react';

import GlobalStyle from 'components/GlobalStyle';
import Products from 'pages/Products';
import ProductStore from 'store/Product';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <ProductStore>
                <Products />
            </ProductStore>
        </>
    );
};

export default App;
