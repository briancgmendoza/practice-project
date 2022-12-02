import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducer from './modules/reducer';
import sagas from './modules/sagas'
import App from './App'
import './styles/_main.scss'

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ reducer });
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
