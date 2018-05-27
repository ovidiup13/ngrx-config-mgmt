import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as CryptoJS from "crypto-js";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

export interface EnvConfig {
  [prop: string]: string;
}

@Injectable()
export class ConfigService {
  // using gpg file
  private static configFile = "assets/config/config.txt.asc";

  constructor(private http: HttpClient) {}

  loadConfig(): Observable<any> {
    return this.http.get(ConfigService.configFile, {
      responseType: "text"
    });
  }

  decryptConfig(payload: string): EnvConfig {
    return JSON.parse(
      CryptoJS.AES.decrypt(payload, environment.secretMessage).toString(
        CryptoJS.enc.Utf8
      )
    );
  }
}
