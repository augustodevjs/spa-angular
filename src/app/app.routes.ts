import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./navegacao";
import { ListaProdutoComponent } from "./produtos";
import { DataBindingComponent, CadastroComponent } from "./demos";
import { SobreComponent, ContatoComponent } from "./institucional";

const rootRouterConfig: Routes = [
  { path: "home", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "contato", component: ContatoComponent },
  { path: "sobre", component: SobreComponent },
  { path: "feature-data-binding", component: DataBindingComponent },
  { path: "produtos", component: ListaProdutoComponent },
  { path: "produto-detalhe/:id", component: ListaProdutoComponent },
  { path: "cadastro", component: CadastroComponent },
  {
    path: "produtos-dashboard",
    loadChildren: () =>
      import("./demos/arquitetura-componentes/produto.module").then(
        (m) => m.ProdutoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(rootRouterConfig)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
