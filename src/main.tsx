import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/_main.scss'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './store/reducer';
import rootSaga from './store/sagas';
import { Provider } from 'react-redux'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

console.log('store, ', store.getState)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
