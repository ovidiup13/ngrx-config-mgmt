import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { tap, catchError } from "rxjs/operators";
import { of, Observable } from "rxjs";

export interface EnvConfig {
  [prop: string]: string;
}

@Injectable()
export class ConfigService {
  private static configFile = "assets/config/config.json";

  constructor(private http: HttpClient) {}

  loadConfig(): Observable<EnvConfig> {
    return this.http.get<EnvConfig>(ConfigService.configFile);
  }
}
