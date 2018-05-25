import { createSelector } from "@ngrx/store";

import * as fromFeature from "../reducers";
import * as fromConfig from "../reducers/config.reducers";

// return entire state tree
export const selectAuthState = createSelector(
  fromFeature.getConfigState,
  (state: fromFeature.ConfigState) => {
    return state.configState;
  }
);
