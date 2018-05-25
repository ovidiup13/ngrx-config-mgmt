import { Action } from "@ngrx/store";
import {
  ConfigActionTypes,
  ConfigAction,
  ConfigInitialiseSuccess
} from "../actions";
import { EnvConfig } from "../models/env-config.model";

import { environment } from "../../../../environments/environment";

import * as CryptoJS from "crypto-js";

export interface State {
  serverApi: string;
  secretApiKey: string;
}

export const initialState: State = {
  serverApi: "",
  secretApiKey: ""
};

export function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case ConfigActionTypes.INIT_SUCCESSFUL: {
      const payload = (action as ConfigInitialiseSuccess).payload;

      // decrypt config key
      const secretApiKey = CryptoJS.AES.decrypt(
        payload["ENCRYPTED_API_KEY"],
        environment.secretMessage
      ).toString(CryptoJS.enc.Utf8);

      return {
        serverApi: payload["SERVER_API"],
        secretApiKey
      };
    }
    default: {
      return state;
    }
  }
}
