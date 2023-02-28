import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { rootRouterConfig } from "./app.routes";

import { DataBindingComponent } from "./demos";
import { SobreComponent, ContatoComponent } from "./institucional";
import { ProdutoService, ListaProdutoComponent } from "./produtos";
import { MenuComponent, FooterComponent, HomeComponent } from "./navegacao";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    ListaProdutoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    [RouterModule.forRoot(rootRouterConfig)],
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
