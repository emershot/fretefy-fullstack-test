import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Regiao } from '../regiao.model';
import { RegiaoService } from '../regiao.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-regiao',
  templateUrl: './regiao.component.html',
  styleUrls: ['./regiao.component.scss']
})
export class RegiaoComponent implements OnInit {
  regioes$: Observable<Regiao[]>;
  regiaoForm: FormGroup;

  constructor(
    private regiaoService: RegiaoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.regioes$ = this.regiaoService.getRegioes();
    this.initializeForm();
  }

  initializeForm(): void {
    this.regiaoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cidades: this.formBuilder.array([], Validators.required)
    });
  }

  adicionarRegiao(): void {
    if (this.regiaoForm.invalid) {
      return;
    }

    const regiao: Regiao = {
      nome: this.regiaoForm.value.nome,
      cidades: this.regiaoForm.value.cidades,
      ativa: true
    };

    this.regiaoService.adicionarRegiao(regiao).subscribe(() => {
      // Lógica adicional após adicionar região
    });
  }

  adicionarCidade(): void {
    const cidades = this.regiaoForm.get('cidades') as FormArray;
    cidades.push(this.formBuilder.control('', Validators.required));
  }

  removerCidade(index: number): void {
    const cidades = this.regiaoForm.get('cidades') as FormArray;
    cidades.removeAt(index);
  }
}
