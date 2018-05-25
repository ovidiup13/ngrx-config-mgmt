import { Action } from "@ngrx/store";
import {
  ConfigActionTypes,
  ConfigAction,
  ConfigInitialiseSuccess
} from "../actions";
import { EnvConfig } from "../models/env-config.model";

export interface State {
  serverApi: string;
}

export const initialState: State = {
  serverApi: ""
};

export function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case ConfigActionTypes.INIT_SUCCESSFUL: {
      const payload = (action as ConfigInitialiseSuccess).payload;
      return {
        serverApi: payload["SERVER_API"]
      };
    }
    default: {
      return state;
    }
  }
}
