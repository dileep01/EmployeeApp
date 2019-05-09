import { applyMiddleware, createStore } from "redux";
import rootReducer from "./src/reducers/index";
//import thunk from "redux-thunk";
//import * as api from "./src/utils/apiRequest";

//const middleWare = [thunk.withExtraArgument(api)];

// const createStoreWithMiddleware = applyMiddleware(createStore);
const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
