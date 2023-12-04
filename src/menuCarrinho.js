//Importações
import { catalogo } from "./utilidades";

const idsProdutoCarrinhoComQuantidade = {}

//Funções
function abrirCarrinho() {
  document.getElementById("carrinho-frete").classList.add("right-[0px]");
  document.getElementById("carrinho-frete").classList.remove("right-[360px]");
}

function fecharCarrinho() {
  document.getElementById("carrinho-frete").classList.remove("right-[0px]");
  document.getElementById("carrinho-frete").classList.add("right-[-360px]");
}

export function inicializarCarrinho() {
  const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
  const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");

  botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
  botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
}

function incrementarQuantidadeProduto(idProduto){
  idsProdutoCarrinhoComQuantidade[idProduto]++;
  atualizarInformacaoQuantidade(idProduto);
}

function decrementarQuantidadeProduto(idProduto){
  idsProdutoCarrinhoComQuantidade[idProduto]--;
  atualizarInformacaoQuantidade(idProduto)
}

function atualizarInformacaoQuantidade(idProduto){
  document.getElementById(`quantidade${idProduto}`).innerText = idsProdutoCarrinhoComQuantidade[idProduto];
}

export function adicionarAoCarrinho(idProduto){
    if (idProduto in idsProdutoCarrinhoComQuantidade){
      incrementarQuantidadeProduto(idProduto);
      return
    }

  idsProdutoCarrinhoComQuantidade[idProduto] = 1;
  const  produto = catalogo.find((p) => p.id === idProduto);
  const conteinerProdutoCarrinho = document.getElementById("produtos-carrinho");
  const cartaoProdutoCarrinho = `<article class="bg-slate-200 text-black rounded-lg p-1">
  <button class="text-red-500 hover:bg-red-400 hover:text-slate-200 rounded-full" id="fechar-carrinho"><i class="fa-solid fa-xmark"></i></button>
  <div class="flex justify-between" id="card-1">
  <div>
  <img src="./img/${produto.nomeArquivoImagem}" alt="carrinho:${produto.nome}" class="h-20 rounded-full">
  <p>${produto.nome}</p>
  <p class="text-slate-500 text-xs">$ ${produto.preco}</p>  
  </div>
  <div class="bg-slate-700 text-slate-100 justify-between w-[2rem] p-[0.7rem] flex flex-wrap justify-between">
    <button id='incrementar-produto-${produto.id}' class="bg-lime-200 rounded-full text-black"><i class="fa-solid fa-plus"></i></button>
    <p id='quantidade${produto.id}'>${idsProdutoCarrinhoComQuantidade[produto.id]}</p>
    <button id='decrementar-produto-${produto.id}' class="bg-red-200 text-black rounded-full"><i class="fa-solid fa-minus"></i></button>
  </div>          
  </div>
  </article><br>`; 
  conteinerProdutoCarrinho.innerHTML += cartaoProdutoCarrinho;

  document.getElementById(`decrementar-produto-${produto.id}`).addEventListener('click',() => decrementarQuantidadeProduto(produto.id));
  document.getElementById(`incrementar-produto-${produto.id}`).addEventListener('click',() => incrementarQuantidadeProduto(produto.id));
}