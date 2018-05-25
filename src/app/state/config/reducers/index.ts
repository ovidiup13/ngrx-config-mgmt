import * as fromConfig from "./config.reducers";
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector
} from "@ngrx/store";

export interface ConfigState {
  configState: fromConfig.State;
}

export const reducers: ActionReducerMap<ConfigState> = {
  configState: fromConfig.reducer
};

export const getConfigState = createFeatureSelector<ConfigState>("config");
