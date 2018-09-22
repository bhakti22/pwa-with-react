import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducers from './../reducers';
import { initState } from './../reducers/initState';

const store = createStore(
  reducers,
  initState,
  composeWithDevTools(
    applyMiddleware(
      thunk
    )
  )
)

export default store;
