var myCart = [];
let id = 1;
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
const clickAddToCart = (id) => {
  // display number of cart items
  let myItems = myCart.length;
  document.getElementById("itemCount").innerHTML = myItems + 1;
  //push selected item to the cart array
  showcase.forEach((element) => {
    if (element.id == id) {
      myCart.push(element);
    }
  });
  //   console.log(myCart);
};

//DISPLAY ITEMS
const displayItems = () => {
  showcase.forEach((element) => {
    element.id = id;
    id++;
  });
  //   console.log(showcase);
  document.getElementById("item-container").innerHTML = showcase
    .map(
      (value) => `<div class="item-card">
    <div class="card-img">
      <img src="${value.img}" alt="" />
    </div>
    <div class="item-description">
      <h4>${value.desc}</h4>
      <p>$${value.price}</p>
      <button class="addtocart" onclick="clickAddToCart(${value.id})">
        Add To Cart
      </button>
    </div>
  </div> `
    )
    .join("");
};

document.addEventListener("load", displayItems());

const displayCart = () => {
  let total = 0;
  myCart.forEach((element) => {
    total += element.price;
  });

  document.getElementById("mycart").style = "display:flex";
  console.log(myCart);
  document.getElementById("cartTable").innerHTML = myCart
    .map(
      (val) =>
        `<tr>
  <td><img src="${val.img}" alt=""></td>
  <td>${val.desc}</td>
  <td>${val.price}</td>
</tr>`
    )
    .join('');

    document.getElementById("cartTable").innerHTML += `<tr><td></td><td>TOTAL</td><td>${total}</td></tr>`


};

const closeCart = () => {
  document.getElementById("mycart").style = "display:none";
};
