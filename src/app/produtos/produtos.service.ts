import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Produto } from "./produto";

@Injectable()
export class ProdutoService {
  constructor(private http: HttpClient) {}

  protected UrlServiceV1: string = "http://localhost:3000";

  getProducts(): Observable<Produto[]> {
    const produto = this.http.get<Produto[]>(`${this.UrlServiceV1}/produtos`);
    return produto;
  }
}
