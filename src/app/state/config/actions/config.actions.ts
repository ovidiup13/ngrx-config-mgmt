import { Action } from "@ngrx/store";
import { EnvConfig } from "../models/env-config.model";

export enum ConfigActionTypes {
  INIT = "[Config] Initialise",
  INIT_SUCCESSFUL = "[Config] Initialise Success",
  INIT_FAILURE = "[Config] Initialise Failed"
}

export class ConfigInitialise implements Action {
  readonly type: string = ConfigActionTypes.INIT;
  constructor(readonly payload?: any) {}
}

export class ConfigInitialiseSuccess implements Action {
  readonly type: string = ConfigActionTypes.INIT_SUCCESSFUL;
  constructor(readonly payload: string) {}
}

export class ConfigInitialiseFailed implements Action {
  readonly type: string = ConfigActionTypes.INIT_FAILURE;
  constructor(readonly payload: any) {}
}

export type ConfigAction =
  | ConfigInitialise
  | ConfigInitialiseSuccess
  | ConfigInitialiseFailed;
