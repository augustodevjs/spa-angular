import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";
registerLocaleData(localePt);
import { ProdutoRoutingModule } from "./produto.route";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoCardDetalheComponent } from "./components/card/produto-card-detalhe-component";
import { ProdutoCountComponent } from "./components/count/produto-count.component";

@NgModule({
  declarations: [
    ProdutoDashboardComponent,
    ProdutoCardDetalheComponent,
    ProdutoCountComponent,
  ],
  imports: [CommonModule, ProdutoRoutingModule],
  exports: [ProdutoDashboardComponent],
})
export class ProdutoModule {}
