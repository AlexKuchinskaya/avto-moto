import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/app/app';
import './sass/styles.scss';
import {createStore} from 'redux';
// import thunk from "redux-thunk";
import {Provider} from 'react-redux';
// import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './store/reducer';
// import {elementType} from 'prop-types';

// const api = new Api();

// const store = createStore(reducer,
//     composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
// );

const store = createStore(reducer);
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`)
);

