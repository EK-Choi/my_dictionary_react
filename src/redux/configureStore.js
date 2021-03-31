import {createStore, combineReducers, applyMiddleware, compose} from "";
import thunk from "redux-thunk";
import {createBrowerHistory} from "history";
import {connectRouter} from "connected-react-router";

import Post from "./modules/post";

export const history = createBrowerHistory();

const rootReducer = combineReducers({
  post: Post,
  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({history:history})];

const env = process.env.NODE_ENV;

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();