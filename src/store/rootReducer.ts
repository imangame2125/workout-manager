import { AnyAction, combineReducers } from "@reduxjs/toolkit";
import reducers from "./reducers";

const combineReducer = combineReducers(reducers);

const rootReducer = (
  state: ReturnType<typeof combineReducer> | undefined,
  action: AnyAction
) => {
  return combineReducer(state, action);
};

export default rootReducer;
