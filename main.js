const catalogo = [
  {
    id: 1,
    nome: 'Reboque simples',
    preco: 150,
    nomeArquivoImagem: 'reboque.jpg'
  },
  {
    id:2,
    nome: 'Baú aberto',
    preco: 400,
    nomeArquivoImagem: 'bau_aberto.jpg'
  },
  {
    id:3,
    nome: 'Baú fechado',
    preco: 600,
    nomeArquivoImagem: 'bau_fechado.jpg'
  },
]

for (const produtoCatalogo of catalogo) {
  const cartaoProduto =    ` <div class="border-double border-4 border-sky-500 w-96 m-2 p-2 id="card-produto-${produtoCatalogo.id}">
  <img src="/img/${produtoCatalogo.nomeArquivoImagem}" alt="reboque" style="height: 300px;">
  <p class="nome">${produtoCatalogo.nome}</p>
  <p>Valor: R$ ${produtoCatalogo.preco}</p>
  <button>Entrar em contato</button>
  <br><br>
  </div>`
  
  
  document.getElementById("conteiner-produto").innerHTML += cartaoProduto
}