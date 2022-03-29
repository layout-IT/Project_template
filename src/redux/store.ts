import { createStore, Store, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { userReducer } from 'redux/reducers';

export const rootReducer = combineReducers({
  user: userReducer,
});

export const STORE: Store<RootReducerType> = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export type RootReducerType = ReturnType<typeof rootReducer>;
