import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import { btScoreReducer } from "./reducers/btScoreReducer";

const rootReducer = combineReducers({
  btScore: btScoreReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootReducerType = ReturnType<typeof rootReducer>;
