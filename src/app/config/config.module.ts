import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { ConfigService } from "./config.service";

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  providers: [ConfigService]
})
export class ConfigModule {}
