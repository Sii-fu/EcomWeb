

let products = null;
// get datas from file json
fetch('assets/data/products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        showDetail();
})

function showDetail(){
// remove datas default from HTML
let detail = document.querySelector('.detail');
let listProduct = document.querySelector('.listProduct');
let productId =  new URLSearchParams(window.location.search).get('id');
let thisProduct = products.filter(value => value.id == productId)[0];
//if there is no product with id = productId => return to home page
if(!thisProduct){
    window.location.href = "/";
}

detail.querySelector('.image img').src = thisProduct.image;
detail.querySelector('.name').innerText = thisProduct.name;
detail.querySelector('.price').innerText = '$' + thisProduct.price;
detail.querySelector('.description').innerText = '$' + thisProduct.description;


(products.filter(value => value.id != productId)).forEach(product => {
    let newProduct = document.createElement('a');
    newProduct.href = '/detail.html?id=' + product.id;
    newProduct.classList.add('item');
    newProduct.innerHTML = 
    `<img src="${product.image}" alt="">
    <h2>${product.name}</h2>
    <div class="price">$${product.price}</div>`;
    listProduct.appendChild(newProduct);
});
}

// quantity
let quantity = 1;
let quantityInput = document.querySelector('.quantity input');
let quantityMinus = document.querySelector('.quantity .minus');
let quantityPlus = document.querySelector('.quantity .plus');

quantityMinus.addEventListener('click', () => {
    if(quantity > 1){
        quantity--;
        quantityInput.value = quantity;
    }
}
);

quantityPlus.addEventListener('click', () => {
    quantity++;
    quantityInput.value = quantity;
}
);

quantityInput.addEventListener('change', () => {
    if(quantityInput.value < 1){
        quantityInput.value = 1;
    }
    quantity = quantityInput.value;
}
);


