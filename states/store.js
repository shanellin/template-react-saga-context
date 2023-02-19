import { applyMiddleware, createStore, combineReducers } from "redux"
import createSagaMiddleware from "redux-saga"
import main from "./ducks/main"
import rootSaga from "./saga"

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension")
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const rootInitialState = {}

function configureStore(initialState = rootInitialState) {
  const sagaMiddleware = createSagaMiddleware()
  const appReducer = combineReducers({
    main,
  })
  const superReducer = (state, action) => {
    return appReducer(state, action)
  }
  const store = createStore(superReducer, initialState, bindMiddleware([sagaMiddleware]))

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore
