// IMPORTAÇÕES
import { inicializarCarrinho } from "./src/menuCarrinho"


const catalogo = [
  {
    id: 1,
    nome: 'Reboque Simples',
    preco: 150,
    nomeArquivoImagem: 'reboque.jpg'
  },
  {
    id:2,
    nome: 'Baú Aberto',
    preco: 400,
    nomeArquivoImagem: 'bau_aberto.jpg'
  },
  {
    id:3,
    nome: 'Baú Fechado',
    preco: 600,
    nomeArquivoImagem: 'bau_fechado.jpg'
  },
]

for (const produtoCatalogo of catalogo) {
  const cartaoProduto =    ` <div class="rounded-lg border-4 border-sky-500 w-96 m-3 mx-8 p-2 id="card-produto-${produtoCatalogo.id}">
  <img class="rounded-full" src="/img/${produtoCatalogo.nomeArquivoImagem}" alt="${produtoCatalogo.nome}" style="height: 300px;">
  <p class="nome text-red-400">${produtoCatalogo.nome}</p>
  <p class="text-amber-200">Valor: R$ ${produtoCatalogo.preco}</p>
  <button class="bg-lime-200 hover:bg-slate-200 text-slate-2 font-semibold hover:text-black py-2 px-4 border border-sky-500  rounded">Adicionar</button>
  <br><br>
  </div>`
  
  
  document.getElementById("conteiner-produto").innerHTML += cartaoProduto
}

inicializarCarrinho();