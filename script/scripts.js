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

  // let myItems = myCart.length;
  // document.getElementById("itemCount").innerHTML = myItems;

  //push selected item to the cart array
  showcase.forEach((element) => {
    if (element.id == id && element.count == 0) {
      myCart.push(element);
      element.count++;
      // console.log(element.count);
    } else if (element.id == id && element.count > 0) {
      element.count++;
    }
  });

  //   console.log(myCart);
};

//DISPLAY ITEMS
const displayItems = () => {
  showcase.forEach((element) => {
    element.id = id;
    element.count = 0;
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
    total += (element.count*element.price);
  });

  document.getElementById("overlay").style = "display:block";

  document.getElementById("mycart").style = "display:flex";
  console.log(myCart);

  // 
  // if (myCart.length==0){
  //   document.getElementById("cart-items-list").innerHTML="Nothing to show"
  // }

  // else{
    document.getElementById("cartTable").innerHTML =
    `<tr><th>Photo</th><th>Item</th><th>Quantity</th><th>Rate</th><th>Total</th> </tr>` +
    myCart
      .map(
        (val) =>
          `<tr>
  <td><img src="${val.img}" alt=""></td>
  <td>${val.desc}</td>
  <td>${val.count} </td>
  <td>$${val.price}</td>
  <td>$${val.price * val.count}</td>
</tr>`
      )
      .join("");

  document.getElementById(
    "cartTable"
  ).innerHTML += `<tr id="total-row"><td></td><td>total</td><td>$${total}</td></tr>`;
};
  // }

  
// 

const closeCart = () => {
  document.getElementById("mycart").style = "display:none";
  document.getElementById("overlay").style = "display:none";
};
