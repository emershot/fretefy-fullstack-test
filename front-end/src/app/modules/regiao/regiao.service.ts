import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Regiao, Cidade } from './regiao.model';

@Injectable({
  providedIn: 'root'
})
export class RegiaoService {
  private apiUrl = 'https://sua-api.com/regioes'; // Substituir pela URL da API

  constructor(private http: HttpClient) { }

  getRegioes(): Observable<Regiao[]> {
    return this.http.get<Regiao[]>(this.apiUrl)
      .pipe(
        catchError((error) => {
          console.error('Erro ao obter regiões:', error);
          return throwError('Erro ao obter regiões. Por favor, tente novamente mais tarde.');
        })
      );
  }

  adicionarRegiao(regiao: Regiao): Observable<Regiao> {
    const regiaoExistente = this.regioes.find(r => r.nome === regiao.nome);
    if (regiaoExistente) {
      return throwError('Já existe uma região com esse nome.');
    }

    return this.http.post<Regiao>(this.apiUrl, regiao)
      .pipe(
        catchError((error) => {
          console.error('Erro ao adicionar região:', error);
          return throwError('Erro ao adicionar região. Por favor, tente novamente mais tarde.');
        })
      );
  }

  atualizarRegiao(regiao: Regiao): Observable<Regiao> {
    const url = `${this.apiUrl}/${regiao.nome}`;
    return this.http.put<Regiao>(url, regiao)
      .pipe(
        catchError((error) => {
          console.error('Erro ao atualizar região:', error);
          return throwError('Erro ao atualizar região. Por favor, tente novamente mais tarde.');
        })
      );
  }

  excluirRegiao(nome: string): Observable<void> {
    const url = `${this.apiUrl}/${nome}`;
    return this.http.delete<void>(url)
      .pipe(
        catchError((error) => {
          console.error('Erro ao excluir região:', error);
          return throwError('Erro ao excluir região. Por favor, tente novamente mais tarde.');
        })
      );
  }

  getCidades(): Observable<Cidade[]> {
    const cidades: Cidade[] = [
      { nome: 'São Paulo', uf: 'SP' },
      { nome: 'Rio de Janeiro', uf: 'RJ' },
      { nome: 'Belo Horizonte', uf: 'MG' },
      { nome: 'Porto Alegre', uf: 'RS' },
      { nome: 'Curitiba', uf: 'PR' }
    ];
    return of(cidades);
  }
}
