import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cidade } from '../regiao.model';

@Component({
  selector: 'app-seletor-cidade',
  templateUrl: './seletor-cidade.component.html',
  styleUrls: ['./seletor-cidade.component.scss']
})
export class SeletorCidadeComponent {
  @Input() cidades: Cidade[];
  @Input() cidadeSelecionada: string;
  @Output() cidadeSelecionadaChange = new EventEmitter<string>();
}
