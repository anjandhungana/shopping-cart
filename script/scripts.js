var myCart = [];
let id=1;

const clickAddToCart = (x) => {
  let myItems = myCart.length;
  document.getElementById("itemCount").innerHTML = myItems;
  
};



const displayItems = () => {
  const showcase = [
    {
      img: "./assets/product-img/shoes1.jpg",
      desc: "Nike Air Limited Edition",
      price: 250,
    },
    {
      img: "./assets/product-img/shoes2.jpg",
      desc: "Jordan Run More Exclusive Sale",
      price: 550,
    },
    {
      img: "./assets/product-img/shoes3.jpg",
      desc: "Nike Air Limited Edition",
      price: 350,
    },
    {
        img: "./assets/product-img/shoes4.jpg",
        desc: "Adidas Limited Edition",
        price: 800,
      },
  ];

  document.getElementById("item-container").innerHTML = showcase.map(
    (value) => `<div class="item-card">
    <div class="card-img">
      <img src="${value.img}" alt="" />
    </div>
    <div class="item-description">
      <h4>${value.desc}</h4>
      <p>$${value.price}</p>
      <button class="addtocart" onclick="clickAddToCart(this)">
        Add To Cart
      </button>
    </div>
  </div> `
  ).join('');
};

document.addEventListener('load',displayItems())