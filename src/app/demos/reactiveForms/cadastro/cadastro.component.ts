import { utilsBr } from "js-brasil";
import { NgBrazilValidators } from "ng-brazil";
import { CustomValidators } from "ng2-validation";
import { Observable, fromEvent, merge } from "rxjs";
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChildren,
} from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Usuario } from "./models/usuario";
import {
  DisplayMessage,
  GenericValidator,
  ValidationMessages,
} from "./generic-form-validation";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
})
export class CadastroComponent implements OnInit, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[];

  cadastroForm: FormGroup;
  usuario: Usuario;
  formResult: string = "";
  MASKS = utilsBr.MASKS;

  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};

  constructor(private fb: FormBuilder) {
    this.validationMessages = {
      nome: {
        required: "O nome é requerido",
        minLenght: "O nome precisa ter no mínimo 2 caracteres",
        maxLenght: "O nome precisa ter no máximo 150 caracteres",
      },
      cpf: {
        required: "Informe o CPF",
        cpf: "CPF em formato inválido",
      },
      email: {
        required: "Informe o e-mail",
        email: "Email inválido",
      },
      senha: {
        required: "Informe a senha",
        rangeLength: "A senha deve possui entre 6 e 15 caracteres",
      },
      senhaConfirmacao: {
        required: "Informa a senha novamente.",
        rangeLength: "A senha deve possuir entre 6 e 15 caracteres",
        equalTo: "As senhas não conferem.",
      },
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit(): void {
    let senha = new FormControl("", [
      Validators.required,
      CustomValidators.rangeLength([6, 15]),
    ]);
    let senhaConfirmacao = new FormControl("", [
      Validators.required,
      CustomValidators.rangeLength([6, 15]),
      CustomValidators.equalTo(senha),
    ]);

    this.cadastroForm = this.fb.group({
      nome: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(150),
        ],
      ],
      cpf: ["", [Validators.required, NgBrazilValidators.cpf]],
      email: ["", [Validators.required, Validators.email]],
      senha,
      senhaConfirmacao,
    });
  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements.map(
      (formControls: ElementRef) =>
        fromEvent(formControls.nativeElement, "blur")
    );

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processMessages(
        this.cadastroForm
      );
    });
  }

  adicionarUsuario() {
    if (this.cadastroForm.dirty && this.cadastroForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
      this.formResult = JSON.stringify(this.cadastroForm.value);
    } else {
      this.formResult = "Não submeteu!";
    }
  }
}
