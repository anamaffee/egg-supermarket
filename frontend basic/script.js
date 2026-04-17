let index = 0; 
const slides = document.querySelectorAll('.slide');

    function mostrarSlides() {
    slides.forEach(slide => {
      slide.classList.remove('active');
  });

  index++;

  if (index >= slides.length) {
        index = 0;
  }
  slides[index].classList.add('active');
  setTimeout(mostrarSlides, 3000);
}
mostrarSlides(); 

      //AQUI COMEÇA O ARRAY DOS OVOS//

const produtos = [
    { nome: "Ovo Brownie", preco: "89,90", img: "./Brownie.jpg"},
    { nome: "Ovo Morango", preco: "95,00", img: "./Morango.jpg"},
    {nome:"Ovo Lacreme", preco:"89,90", img: "./Lacreme.jpg"},
    { nome: "Ovo Coco", preco: "89,90", img: "./Coco.jpg"},
    { nome: "Ovo Dreams", preco: "85,00", img: "./Dreams.jpg"},
    {nome:"Ovo Pistache", preco:"89,90", img: "./Pistache.jpg"},
     {nome:"Ovo Brigadeiro", preco:"89,90", img: "./brigadeiro.jpg"}, 
     {nome:"Ovo mezzo", preco:"89,90", img: "./mezzo.jpg"},
];
const carrinho = Array();

const todos = document.getElementById('todos-produtos');

const cardsHTML = produtos.map((produto, index) => `
    <li class="card-produto">
        <img src="${produto.img}" alt="${produto.nome}">
        <span class="preco">R$ ${produto.preco}</span>
        <h3>${produto.nome}</h3>
        <button class="comprar" onclick="addCarrinho(${index})">Comprar</button>
    </li>
`).join('');

todos.innerHTML = cardsHTML;

function addCarrinho(index) {
    carrinho.push(produtos[index]); 
    console.log("Carrinho atualizado:", carrinho);
}

function toggleCarrinho() {
    document.getElementById('carrinho-lateral').classList.toggle('carrinho-visivel');
}


function renderizarCarrinho() {
    const lista = document.getElementById('itens-carrinho');
    const totalSpan = document.getElementById('valor-total');
    
    lista.innerHTML = '';
    let total = 0;

    carrinho.forEach(item => {
        lista.innerHTML += `<li>${item.nome} - R$ ${item.preco}</li>`;
        total += parseFloat(item.preco.replace(',', '.'));
    });

    totalSpan.innerText = total.toFixed(2).replace('.', ',');
}


function addCarrinho(index) {
    carrinho.push(produtos[index]);
    renderizarCarrinho(); 
    
    
    document.getElementById('carrinho-lateral').classList.add('carrinho-visivel');
}