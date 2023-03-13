import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";

const rootRouterConfig: Routes = [
  { path: "", component: ProdutoDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(rootRouterConfig)],
  exports: [RouterModule],
})
export class ProdutoRoutingModule {}
