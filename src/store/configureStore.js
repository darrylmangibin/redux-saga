import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import rootSaga from '../sagas';


const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducers,
    compose(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga)
  return store;
}

export default configureStore;