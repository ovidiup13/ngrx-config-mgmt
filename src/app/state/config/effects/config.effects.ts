import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import {
  ConfigActionTypes,
  ConfigInitialise,
  ConfigInitialiseSuccess,
  ConfigInitialiseFailed
} from "../actions";
import { switchMap, map, catchError } from "rxjs/operators";
import { ConfigService } from "../../../config/config.service";
import { Observable, of } from "rxjs";
import { EnvConfig } from "../models/env-config.model";

@Injectable()
export class ConfigEffects {
  constructor(
    private actions$: Actions,
    private configService: ConfigService
  ) {}

  @Effect()
  initialiseConfig$: Observable<any> = this.actions$
    .ofType(ConfigActionTypes.INIT)
    .pipe(
      switchMap((action: ConfigInitialise) => {
        return this.configService.loadConfig().pipe(
          map((config: EnvConfig) => {
            return new ConfigInitialiseSuccess(config);
          }),
          catchError((error: any) => {
            return of(new ConfigInitialiseFailed(error));
          })
        );
      })
    );
}
