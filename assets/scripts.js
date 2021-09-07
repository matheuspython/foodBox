// let prato;
// let bebida;
// let sobremesa

// function escolherFrango(){
//   document.querySelector('#frango').style.borderColor ='green'
//   document.querySelector('#carne').style.borderColor ='white'
//   prato = 'frango'
// }

// function escolheCarne(){
//   document.querySelector('#carne').style.borderColor ='green'
//   document.querySelector('#frango').style.borderColor ='white' 
//   prato = 'carne'
// }

// function escolheCoca(){
//   document.querySelector('#coca').style.borderColor ='green'
//   document.querySelector('#suco').style.borderColor ='white' 
//   bebida = 'coca-cola'
// }

// function escolheSuco(){
//   document.querySelector('#suco').style.borderColor ='green'
//   document.querySelector('#coca').style.borderColor ='white' 
//   bebida = 'suco'
// }

// function escolhePudim(){
//   document.querySelector('#pudim').style.borderColor ='green'
//   document.querySelector('#sorvete').style.borderColor ='white' 
//   sobremesa = 'pudim'
// }

// function escolheSorvete(){
//   document.querySelector('#sorvete').style.borderColor ='green'
//   document.querySelector('#pudim').style.borderColor ='white' 
//   sobremesa = 'sorvete'
// }



// function finalizarPedido(){

// }

const button = document.querySelector('.botao')
const produtos = { 
  prato: '',
  bebida: '',
  sobremesa: '' }

document.querySelectorAll('.produto').forEach(el => el.setAttribute('onclick',''))
autualizaStatusBtn()

document.addEventListener("click", e => {
  el = e.target
  if(el.classList.contains("prato")){
    document.querySelectorAll('.prato').forEach(el => el.style.borderColor ='white')
    el.style.borderColor ='green'
    produtos.prato = el.querySelector('h4').innerText
    autualizaStatusBtn()
  }
  if(el.classList.contains("bebida")){
    document.querySelectorAll('.bebida').forEach(el => el.style.borderColor ='white')
    el.style.borderColor ='green'
    produtos.bebida = el.querySelector('h4').innerText
    autualizaStatusBtn()
    
  }
  if(el.classList.contains("sobremesa")){
    document.querySelectorAll('.sobremesa').forEach(el => el.style.borderColor ='white')
    el.style.borderColor ='green'
    produtos.sobremesa = el.querySelector('h4').innerText
    autualizaStatusBtn()
  }
})


function autualizaStatusBtn(){
  if(produtos.bebida == '' || produtos.prato == '' || produtos.sobremesa ==''){
    button.style.background = 'gray'
    button.innerHTML = 'Escolha 3 pedidos'
  }
  else{
    button.style.background = 'green'
    button.innerHTML = 'Finalizar pedido'
  }

}