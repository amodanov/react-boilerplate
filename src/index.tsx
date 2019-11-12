import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import App from './app';
import store from './app/Stores';

const SSR = process.env.RENDER_TYPE === 'ssr';

ReactDOM[`${SSR ? 'hydrate' : 'render'}`](
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
