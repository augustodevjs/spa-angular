import { Component, OnInit } from "@angular/core";
import { ProdutoService } from "../produtos.service";
import { Produto } from "../produto";

@Component({
  selector: "app-lista-produto",
  templateUrl: "./lista-produto.component.html",
})
export class ListaProdutoComponent implements OnInit {
  constructor(private produtoService: ProdutoService) {}

  public produtos: Produto[];

  ngOnInit(): void {
    this.produtoService.getProducts().subscribe(
      (produtos) => {
        this.produtos = produtos;
        console.log(produtos);
      },
      (error) => console.log(error)
    );
  }
}
