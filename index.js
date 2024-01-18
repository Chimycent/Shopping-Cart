const openShopping = document.querySelector('.shopping');
const closeShopping = document.querySelector('.closeShopping');
const list = document.querySelector('.list');
const listCard = document.querySelector('.listCard');
const total = document.querySelector('.total');
const body = document.querySelector('body');
const quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active')
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active')
})

let products = [
    {
        id: 1,
        name: "Hoodie",
        images: "cm1.jpg",
        price: 310
    },
    {
        id: 2,
        name: "Pjamas",
        images: "cm2.jpg",
        price: 680
    },
    {
        id: 3,
        name: "Night Wears for Women",
        images: "cm3.jpg",
        price: 400
    },
    {
        id: 4,
        name: "CeraVe",
        images: "pb3.jpg",
        price: 12000
    },
    
    {
        id: 5,
        name: "Banana Boat Lotion",
        images: "pb4.jpg",
        price: 6950
    },
    {
        id: 6,
        name: "Cetaphill",
        images: "pb6.jpg",
        price: 9000
    },
    {
        id: 7,
        name: "Iphone12 Promax",
        images: "pinter1.jpg",
        price: 550000
    },
    {
        id: 8,
        name: "Iphone 11Pro",
        images: "pinter2.jpg",
        price: 410000
    },
    {
        id: 9,
        name: "Iphone 11Promax",
        images: "pinter3.jpg",
        price: 450000
    },
    {
        id: 10,
        name: "Wireless Headset",
        images: "ga1.jpg",
        price: 150000
    },
    {
        id: 11,
        name: "Spinning Game Chair",
        images: "ga4.jpg",
        price: 250000
    },
    {
        id: 12,
        name: "Hp Laptop",
        images: "pc9.jpg",
        price: 290000
    },
]

let listCards = [];

const initApp = () =>{
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <img src="images/${value.images}">
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCard(${key})">Add To Cart</button>
        `;
        list.appendChild(newDiv)
    })
}
initApp()

const addToCard = (key)=>{
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1
    }
    reloadCard();
}
const reloadCard = ()=>{
    listCard.innerHTML ="";
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
    
        if(value !=null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML =`
            <div><img src ="img/${value.image}"></div>
            <div class ="cardTitle">${value.name}</div>
            <div class ="cardPrice">${value.price.toLocaleString()}</div>

            <div>
                <button style="background-color: #560bad;" 
                class="cardButton" onclick ="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                <div class ="count">${value.quantity}</div>
                <button style="background-color: #560bad"; 
                class="cardButton" onclick ="changeQuantity(${key}, ${value.quantity + 1})">+</button>
            </div>
            `
            listCard.appendChild(newDiv);
        }
        total.innerText = totalPrice.toLocaleString();
        quantity.innerText = count;
    })
}

const changeQuantity = (key, quantity) =>{
    if(quantity == 0){
        delete listCards[key]
    }
    else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price
    }

    reloadCard()
}