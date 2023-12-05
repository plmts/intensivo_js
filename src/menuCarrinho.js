//Importações
import { catalogo } from "./utilidades";

const idsProdutoCarrinhoComQuantidade = {};


//Funções
//ABRIR CARRINHO
function abrirCarrinho() {
  document.getElementById("carrinho-frete").classList.add("right-[0px]");
  document.getElementById("carrinho-frete").classList.remove("right-[360px]");
}

//FECHAR CARRINHO
function fecharCarrinho() {
  document.getElementById("carrinho-frete").classList.remove("right-[0px]");
  document.getElementById("carrinho-frete").classList.add("right-[-360px]");
}

//INICIALIZAR CARRINHO
export function inicializarCarrinho() {
  const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
  const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");

  botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
  botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
  atualizarPrecoCarrinho()
}

//REMOVER DO CARRINHO
function removerDoCarrinho(idProduto){
  delete idsProdutoCarrinhoComQuantidade[idProduto];
  atualizarPrecoCarrinho();
  renderizarProdutosCarrinho();
}

//INCREMENTAR QUANTIDADE DOS PRODUTOS
function incrementarQuantidadeProduto(idProduto){
  idsProdutoCarrinhoComQuantidade[idProduto]++;
  atualizarPrecoCarrinho();
  atualizarInformacaoQuantidade(idProduto);
}

//DECREMENTAR QUANTIDADE DOS PRODUTOS
function decrementarQuantidadeProduto(idProduto){
  if (idsProdutoCarrinhoComQuantidade[idProduto] === 1) {
    removerDoCarrinho(idProduto);
    return;
  }
  idsProdutoCarrinhoComQuantidade[idProduto]--;
  atualizarPrecoCarrinho()
  atualizarInformacaoQuantidade(idProduto)
}

//ATUALIZAR INFORMAÇÃO DAS QUANTIDADES
function atualizarInformacaoQuantidade(idProduto){
  document.getElementById(`quantidade${idProduto}`).innerText = idsProdutoCarrinhoComQuantidade[idProduto];
}

//DESENHAR CARRINHO
function desenharProdutoCarrinho(idProduto){
  const  produto = catalogo.find((p) => p.id === idProduto);
  const conteinerProdutoCarrinho = document.getElementById("produtos-carrinho");

  const elementoArticle = document.createElement("article");
  const articleClasses = ['bg-slate-200', 'text-black', 'rounded-lg', 'p-1']
  for (const articleClass of articleClasses){
    elementoArticle.classList.add(articleClass);
  }
  const cartaoProdutoCarrinho = `<button class="text-red-500 hover:bg-red-400 hover:text-slate-200 rounded-full" id="remover-item-${produto.id}"><i class="fa-solid fa-xmark"></i></button>
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
  </div><br>`; 
  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  conteinerProdutoCarrinho.appendChild(elementoArticle)

  document.getElementById(`decrementar-produto-${produto.id}`).addEventListener('click',() => decrementarQuantidadeProduto(produto.id));
  document.getElementById(`incrementar-produto-${produto.id}`).addEventListener('click',() => incrementarQuantidadeProduto(produto.id));
  document.getElementById(`remover-item-${produto.id}`).addEventListener('click',() => removerDoCarrinho(produto.id));
  atualizarPrecoCarrinho()
}

//RENDERIZAR PRODUTO NO CARRINHO
function renderizarProdutosCarrinho() {
  const conteinerProdutoCarrinho = document.getElementById("produtos-carrinho");
  conteinerProdutoCarrinho.innerHTML = "";
  for (const idProduto in idsProdutoCarrinhoComQuantidade){
    desenharProdutoCarrinho(idProduto);
  }
}

// ADICIONAR PRODUTO AO CARRINHO
export function adicionarAoCarrinho(idProduto){
  if (idProduto in idsProdutoCarrinhoComQuantidade){
    incrementarQuantidadeProduto(idProduto);
    return
  }
  idsProdutoCarrinhoComQuantidade[idProduto] = 1;
  desenharProdutoCarrinho(idProduto);
}

// ATUALIZAR PREÇO DO CARRINHO
function atualizarPrecoCarrinho() {
  const precoCarrinho = document.getElementById('preco-total');
  let precoTotalCarrinho = 0;
  for (const idProdutoNoCarrinho in idsProdutoCarrinhoComQuantidade) {
    precoTotalCarrinho += catalogo.find(p => p.id === idProdutoNoCarrinho).preco * idsProdutoCarrinhoComQuantidade[idProdutoNoCarrinho];
  }
  precoCarrinho.innerText = `Total: R$${precoTotalCarrinho}`;
}