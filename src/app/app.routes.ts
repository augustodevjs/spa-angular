import { Routes } from "@angular/router";
import { HomeComponent } from "./navegacao";
import { DataBindingComponent } from "./demos";
import { ListaProdutoComponent } from "./produtos";
import { SobreComponent, ContatoComponent } from "./institucional";

export const rootRouterConfig: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "contato", component: ContatoComponent },
  { path: "sobre", component: SobreComponent },
  { path: "feature-data-binding", component: DataBindingComponent },
  { path: "produtos", component: ListaProdutoComponent },
  { path: "produto-detalhe/:id", component: ListaProdutoComponent },
];
