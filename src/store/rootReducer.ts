import { combineReducers } from "redux";
import produce, 
{ 
  // Draft 
} from "immer";

const initialTweetState = {
  data: "test",
};

export const TestReducer = produce(
  (draft: any, action: any) => {
    switch (action.type) {
      default:
        break;
    }
  },
  initialTweetState
);


export const rootReducer = combineReducers({
  test: TestReducer,
});
