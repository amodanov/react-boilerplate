import {applyMiddleware, createStore, compose} from 'redux';

import reducers from './reducers';
import middleware from './middleware';

/* eslint-disable prettier/prettier */
const store = createStore(
    reducers,
    compose(
        applyMiddleware(
            ...middleware
        )
    )
);
/* eslint-enable prettier/prettier */

export default store;
