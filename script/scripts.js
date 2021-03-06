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

const toggleBtn = () =>{
  if (document.querySelector('.addItems').classList.contains('d-none')){
    displayAdd();
  }
  else{
    hideAdd();
  }
}

const displayAdd = () =>{
  document.querySelector('.add-icon').classList.add('add-icon-animate')
  document.querySelector('.addItems').classList.remove('d-none');
  document.querySelector('.addItems').classList.add('d-flex');

}

const hideAdd = () =>{
  document.querySelector('.add-icon').classList.remove('add-icon-animate')

  document.querySelector('.addItems').classList.add('d-none');
  document.querySelector('.addItems').classList.remove('d-flex');
}

const addToShop = ()=>{
  let itemName = document.getElementById('shop-item-name');
  let itemPrice = document.getElementById('shop-item-price');
  let itemPhoto = document.getElementById('shop-item-photo');

  newlyadded = {"img":itemPhoto.value, "desc":itemName.value, "price":itemPrice.value};
 showcase.push(newlyadded);
 
 itemName.value='';
 itemPrice.value='';
 itemPhoto.value='';
 
 displayItems();


}







const clickAddToCart = (id) => {
  //toaster animation
  document.querySelector(".toaster").classList.add("toaster-animation");
  setTimeout(() => {
    document.querySelector(".toaster").classList.remove("toaster-animation");
  }, 500);

  //push selected item to the cart array
  showcase.forEach((element) => {
    if (element.id == id && element.count == 0) {
      myCart.push(element);
      element.count++;
    } else if (element.id == id && element.count > 0) {
      element.count++;
    }
  });
};

//DISPLAY ITEMS
const displayItems = () => {
  showcase.forEach((element) => {
    element.id = id;
    element.count = 0;
    id++;
  });
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
  myCart = myCart.filter((element) => element.count != 0);

  let total = 0;

  myCart.forEach((element) => {
    total += element.count * element.price;
  });

  document.getElementById("overlay").style = "display:block";

  document.getElementById("mycart").style = "display:flex";
  console.log(myCart.length);

  //

  if (myCart.length > 0) {
    document.getElementById("cart-items-list").innerHTML =
      `<table id="cartTable"><tr><th>Photo</th><th>Item</th><th>Quantity</th><th>Rate</th><th>Total</th> <th></th></tr>` +
      myCart
        .map(
          (val) =>
            `<tr>
  <td><img src="${val.img}" alt=""></td>
  <td>${val.desc}</td>
  <td><i class="fa fa-minus countChanger" onclick="decreaseCount(${val.id})"></i>${
              val.count
            }<i class="fa fa-plus countChanger" onclick="increaseCount(${val.id})"></i></td>
  <td>$${val.price}</td>
  <td>$${val.price * val.count}</td>
  <td><i class="fa fa-trash cart-trash" onclick="trashCartItem(${val.id})"></i></td>
</tr>`
        )
        .join("");

    document.getElementById(
      "cartTable"
    ).innerHTML += `<tr id="total-row"><td></td><td>total</td><td>$${total}</td></tr></table>`;
    document.querySelector("#mycart h1").innerHTML = "Your Cart";
  } else {
    document.querySelector("#mycart h1").innerHTML = "Your Cart is Empty!";
    document.getElementById("cart-items-list").innerHTML =
      "<img src='./assets/cart-empty.png' id='empty-cart'/><button id='goto-shop-btn' onclick='closeCart()'>Go to the Shop</button>";
  }
};

//

const closeCart = () => {
  document.getElementById("mycart").style = "display:none";
  document.getElementById("overlay").style = "display:none";
};

// increase decrease count
const decreaseCount = (id) => {
  myCart.forEach((element) => {
    if (element.id == id) {
      element.count--;
    }
  });
  displayCart();
};

const increaseCount = (id) => {
  myCart.forEach((element) => {
    if (element.id == id) {
      element.count++;
    }
  });
  displayCart();
};

const trashCartItem = (id)=>{
  myCart =  myCart.filter((val)=>val.id!=id);
  displayCart();
}