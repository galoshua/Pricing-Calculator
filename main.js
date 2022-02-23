const priceInput=document.querySelector('[name=price]');
const quantityInput=document.querySelector('[name=quantity]');
const total=document.querySelector('.total');


priceInput.addEventListener('input', calculateItPrice);

function calculateItPrice(){
    console.log(priceInput.value)
}
