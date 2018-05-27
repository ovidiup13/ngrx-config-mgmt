import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { ConfigService } from "../../../config/config.service";
import {
  ConfigActionTypes,
  ConfigInitialise,
  ConfigInitialiseFailed,
  ConfigInitialiseSuccess
} from "../actions";
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
          map((config: string) => {
            return new ConfigInitialiseSuccess(config);
          }),
          catchError((error: any) => {
            console.error(error);
            return of(new ConfigInitialiseFailed(error));
          })
        );
      })
    );
}
