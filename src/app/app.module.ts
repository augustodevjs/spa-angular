import { NgBrazil } from "ng-brazil";
import { CustomFormsModule } from "ng2-validation";
import { TextMaskModule } from "angular2-text-mask";
import { NgModule } from "@angular/core";
import { APP_BASE_HREF } from "@angular/common";
<<<<<<< HEAD
import { registerLocaleData } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import localePt from "@angular/common/locales/pt";

registerLocaleData(localePt);

import { AppComponent } from "./app.component";
import { rootRouterConfig } from "./app.routes";

import { DataBindingComponent } from "./demos";
=======
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
>>>>>>> abf8f1de7f43d198533ce5ae720bb4bf047fc90e
import { SobreComponent, ContatoComponent } from "./institucional";
import { ProdutoService, ListaProdutoComponent } from "./produtos";
import { NavegacaoModule } from "./navegacao";
import { DataBindingComponent, CadastroComponent } from "./demos";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    ListaProdutoComponent,
    CadastroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgBrazil,
    CustomFormsModule,
    TextMaskModule,
    NavegacaoModule,
    AppRoutingModule,
  ],
  providers: [
    ProdutoService,
    {
      provide: APP_BASE_HREF,
      useValue: "/",
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
