import { catalogo } from "./utilidades"
import { adicionarAoCarrinho } from "./menuCarrinho"

export function renderizarCartalogo() {
  for (const produtoCatalogo of catalogo) {
    const cartaoProduto =    ` <div class="rounded-lg border-4 border-sky-300 w-96 m-3 mx-8 p-3 flex flex-col group" id="card-produto-${produtoCatalogo.id}">
    <img class="rounded-full" src="/img/${produtoCatalogo.nomeArquivoImagem}" alt="${produtoCatalogo.nome}" style="height: 300px;">
    <p class="text-red-400">${produtoCatalogo.nome}</p>
    <p class="text-lg text-amber-200">Valor: R$ ${produtoCatalogo.preco}</p>
    <button id="adicionar-${produtoCatalogo.id}" class="bg-lime-200 hover:bg-lime-100 text-slate-2 font-semibold hover:text-black py-2 px-4 border border-sky-500 rounded"><i class="fa-solid fa-cart-shopping"></i></button>
    <br><br>
    </div>`
  
    document.getElementById("conteiner-produto").innerHTML += cartaoProduto;
  }
  for (const produtoCatalogo of catalogo) {
    document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener('click', () => adicionarAoCarrinho(produtoCatalogo.id))
  }
}
