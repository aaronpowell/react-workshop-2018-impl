import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { ADD_TO_SCHEDULE, REMOVE_FROM_SCHEDULE } from './actions/schedule';
import { FETCH_TALKS } from './actions/talks';
import { addToScheduleReducer, removeFromScheduleReducer } from './reducers/schedule';
import { fetchTalksLoaded, fetchTalksLoading } from './reducers/talks';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore((prevState, action) => {
    switch (action.type) {
        case ADD_TO_SCHEDULE:
            return addToScheduleReducer(prevState, action.payload);

        case REMOVE_FROM_SCHEDULE:
            return removeFromScheduleReducer(prevState, action.payload);

        case FETCH_TALKS + '/loading':
            return fetchTalksLoading(prevState);

        case FETCH_TALKS + '/loaded':
            return fetchTalksLoaded(prevState, action.payload);

        default:
            return prevState;
    }
  }, {
    schedule: [],
    agenda: [],
    loaded: false
}, composeEnhancers(
        applyMiddleware(
            store => next => action => {
                if (action.payload && action.payload.toString() === '[object Promise]') {
                    action.payload.then(data => {
                        store.dispatch({
                            type: action.type + '/loaded',
                            payload: data
                        });
                    })

                    return store.dispatch({
                        type: action.type + '/loading'
                    });
                } else {
                    return next(action);
                }
            }
        )
    )
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
