const priceInput=document.querySelector('[name=price]');
const quantityInput=document.querySelector('[name=quantity]');
const total= document.querySelector('.total')
const quantityLabel =document.querySelector('.quantity-label')

priceInput.addEventListener('input', calculateItPrice);
quantityInput.addEventListener('input', calculateItPrice)
quantityInput.addEventListener('input',updateQuantityLabel)
function calculateItPrice(){
    const price =priceInput.value;
    const quantity= quantityInput.value;
    const cost = price*quantity;
    console.log(total);
    total.innerHTML='$'+ cost.toFixed(2);
}


function updateQuantityLabel(){
    const quantity=quantityInput.value;
    quantityLabel.innerText= quantity;
}
