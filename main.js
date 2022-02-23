const priceInput=document.querySelector('[name=price]');
const quantityInput=document.querySelector('[name=quantity]');
const total= document.querySelector('.total')


priceInput.addEventListener('input', calculateItPrice);
quantityInput.addEventListener('input', calculateItPrice)

function calculateItPrice(){
    const price =priceInput.value;
    const quantity= quantityInput.value;
    const cost = price*quantity;
    console.log(total);
    total.innerText='$'+ cost.toFixed(2)
}


calculateItPrice();
