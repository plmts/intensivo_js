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

export function adicionarAoCarrinho(){
  const conteinerProdutoCarrinho = getElementById("produtos-carrinho");
  const cartaoProdutoCarrinho = `      <article class="bg-slate-200 text-black rounded-lg p-1">
  <button class="text-red-500 hover:bg-red-400 hover:text-slate-200 rounded-full" id="fechar-carrinho"><i class="fa-solid fa-xmark"></i></button>
  <div class="flex justify-between" id="card-1">
  <div>
  <img src="./img/reboque.jpg" alt="carrinho:reboque-simples" class="h-20 rounded-full">
  <p>Reboque Simples</p>
  <p class="text-slate-500 text-xs">$ 150</p>  
  </div>
  <div class="bg-slate-700 text-slate-100 justify-between w-[2rem] p-[0.7rem] flex flex-wrap justify-between">
    <button class="bg-lime-200 rounded-full text-black"><i class="fa-solid fa-plus"></i></button>
    <p>5</p>
    <button class="bg-red-200 text-black rounded-full"><i class="fa-solid fa-minus"></i></button>
  </div>          
  </div>
  </article>`; 
  conteinerProdutoCarrinho.innerHTML += cartaoProdutoCarrinho
}