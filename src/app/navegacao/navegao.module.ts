import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FooterComponent, HomeComponent, MenuComponent } from "../navegacao";

@NgModule({
  declarations: [FooterComponent, HomeComponent, MenuComponent],
  imports: [CommonModule, RouterModule],
  exports: [FooterComponent, HomeComponent, MenuComponent],
})
export class NavegacaoModule {}
