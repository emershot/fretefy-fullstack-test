export interface Regiao {
  nome: string;
  cidades: Cidade[];
  ativa: boolean;
}

export interface Cidade {
  nome: string;
  uf: string;
}
