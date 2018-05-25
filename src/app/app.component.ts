import { Component, OnInit } from "@angular/core";
import { ConfigService } from "./config/config.service";

import * as fromConfigStore from "./state/config";
import { Store } from "@ngrx/store";
import { ConfigInitialise } from "./state/config";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";

  configState$: Observable<any>;

  constructor(private store: Store<fromConfigStore.ConfigState>) {}

  ngOnInit(): void {
    this.store.dispatch(new ConfigInitialise());

    this.configState$ = this.store.select(fromConfigStore.getConfigState);
  }
}
