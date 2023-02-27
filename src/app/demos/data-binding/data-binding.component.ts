import { Component } from "@angular/core";

@Component({
  selector: "app-data-binding",
  templateUrl: "./data-binding.component.html",
})
export class DataBindingComponent {
  public contador: number = 10;
  public urlImage: string =
    "https://angular.io/assets/images/logos/angular/angular.svg";
  public nome: string = "";

  adicionarClique() {
    this.contador++;
  }

  zerarContador() {
    this.contador = 0;
  }

  KeyUp(event: any) {
    this.nome = event.target.value;
  }
}
