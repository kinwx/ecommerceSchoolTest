const list = [
    {
        category: "men's clothing",
        count: 2,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        id: 1,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price: 109.95,
        // price: 200,
        rating: {rate: 3.9, count: 120},
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    },
    {
        category: "men's clothing",
        count: 2,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        id: 1,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price: 180.95,
        // price: 100,
        rating: {rate: 3.9, count: 120},
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    },
];

const totalCount = list.reduce((el, item) => el + item.count, 0)
const totalPrice = list.reduce((el, item) => el + (item.price * item.count), 0) 

console.log(totalCount, totalPrice);

