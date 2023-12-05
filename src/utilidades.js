export const catalogo = [
  {
    id: "1",
    nome: 'Reboque Simples',
    preco: 150,
    nomeArquivoImagem: 'reboque.jpg'
  },
  {
    id:"2",
    nome: 'Baú Aberto',
    preco: 400,
    nomeArquivoImagem: 'bau_aberto.jpg'
  },
  {
    id:"3",
    nome: 'Baú Fechado',
    preco: 600,
    nomeArquivoImagem: 'bau_fechado.jpg'
  },
]


export function salvarLocalStorage(chave, informacao) {
  localStorage.setItem(chave, JSON.stringify(informacao)); // pega a informação e transforma e texto para poder ser salvo na local storage
}

export function lerLocalStorage(chave) {
  return JSON.parse(localStorage.getItem(chave)); // pega o texto entre parênteses e transforma em objeto
}