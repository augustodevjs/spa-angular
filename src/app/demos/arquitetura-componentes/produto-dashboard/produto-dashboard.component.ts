import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Produto } from "../models/produto-dashboard";
import { Observable, fromEvent } from "rxjs";
import { ProdutoCountComponent } from "../components/count/produto-count.component";

@Component({
  selector: "app-produto-dashboard",
  templateUrl: "./produto-dashboard.component.html",
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {
  constructor() {}

  produtos: Produto[];

  @ViewChild(ProdutoCountComponent, { static: false })
  contador: ProdutoCountComponent;
  @ViewChild("teste", { static: false }) mensagemTela: ElementRef;

  ngOnInit(): void {
    this.produtos = [
      {
        id: 1,
        nome: "teste 1",
        ativo: true,
        valor: 100,
        imagem: "celular.jpg",
      },
      {
        id: 2,
        nome: "teste 2",
        ativo: true,
        valor: 200,
        imagem: "gopro.jpg",
      },
      {
        id: 3,
        nome: "teste 3",
        ativo: true,
        valor: 400,
        imagem: "mouse.jpg",
      },
      {
        id: 4,
        nome: "teste 4",
        ativo: true,
        valor: 100,
        imagem: "celular.jpg",
      },
      {
        id: 5,
        nome: "teste 5",
        ativo: true,
        valor: 500,
        imagem: "teclado.jpg",
      },
      {
        id: 6,
        nome: "teste 5",
        ativo: false,
        valor: 300,
        imagem: "headset.jpg",
      },
    ];
  }

  ngAfterViewInit(): void {
    console.log("Objeto do contador", this.contador.produtos);

    let clickTexto: Observable<any> = fromEvent(
      this.mensagemTela.nativeElement,
      "click"
    );

    clickTexto.subscribe(() => {
      console.log("Clicou no texto");
      return;
    });
  }

  mudarStatus(event: Produto) {
    event.ativo = !event.ativo;
  }
}
