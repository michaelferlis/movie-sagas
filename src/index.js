import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import {takeEvery, put} from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios'

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies)
    yield takeEvery('FETCH_GENRES', fetchGenres)

}

function* fetchMovies (action) {
    try {
        const movieResponse = yield axios.get('/movies');
        yield put({type: 'SET_MOVIES', payload: movieResponse.data})
    } catch(error){
        console.log('error fetching movies', error);
    }
    
}

// {JSON.stringify(this.props, null, 2)}

function* fetchGenres (action) {
    try {
        const genreResponse = yield axios.get('/fruit');
        yield put({type: 'SET_TAGS', payload: genreResponse.data})
    } catch(error){
        console.log('error fetching genres', error);
    }
    
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
