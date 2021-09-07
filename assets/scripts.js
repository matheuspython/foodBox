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
    return false;
  }
  else{
    button.style.background = 'green'
    button.innerHTML = 'Finalizar pedido'
    return true
  }

}

button.addEventListener('click', () =>{
  if(!autualizaStatusBtn()) return;
  const text = `Olá, gostaria de pedir um combo ${produtos.prato}, ${produtos.bebida} e ${produtos.sobremesa}`
  window.open(`https://wa.me/+554140028922?text=${text}`)
})