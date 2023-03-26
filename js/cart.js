let jackets = [
  (jacket1 = {
    id: 1,
    name: "CAMPION PRO JACKET",
    price: 299,
    desc: "Gore-tex technology, 100% watherproof, optimum breathability.",
    img: "images/RainyDays_Jacket1.png",
    alt: "CAMPION PRO JACKET",
  }),
  (jacket2 = {
    id: 2,
    name: "BASE WIGHT JACKET",
    price: 299,
    desc: "Comfortable, lightwight, layaring, packeble, rycycled material",
    img: "images/RainyDays_Jacket2.png",
    alt: "BASE WIGHT JACKET",
  }),
  (jacket3 = {
    id: 3,
    name: "HAPPY TRAILS JACKET",
    price: 499,
    desc: "100% watherproof, comfortable, breathable, lightwight, packeble",
    img: "images/RainyDays_Jacket3.png",
    alt: "HAPPY TRAILS JACKET",
  }),
  (jacket4 = {
    id: 4,
    name: "EXPLORE BETA JACKET",
    price: 399,
    desc: "Gore-tex technology, 100% watherproof, windproof, lightwight.",
    img: "images/RainyDays_Jacket4.png",
    alt: "EXPLORE BETA JACKET",
  }),
  (jacket5 = {
    id: 5,
    name: "LEAVE NO TRACE JACKET",
    price: 699,
    desc: "2 stretch layer, windproof, rycyled material, comfortable.",
    img: "images/RainyDays_Jacket5.png",
    alt: "LEAVE NO TRACE JACKET",
  }),
  (jacket6 = {
    id: 6,
    name: "CAT PRO JACKET",
    price: 199,
    desc: "Gore-tex technology, 100% watherproof, windproof, 2-1 jacket,lightwight.",
    img: "images/RainyDays_Jacket6.png",
    alt: "CAT PRO JACKET",
  }),
  (jacket7 = {
    id: 7,
    name: "CAMP FLEECE JACKET",
    price: 99,
    desc: "lightwight, recycled material, comfortable, stretch fleece, packeble.",
    img: "images/RainyDays_Jacket7.png",
    alt: "CAMP FLEECE JACKET",
  }),
];

let cartContainer = document.querySelector(".cartContainer");
let orderSummary = "";
let totalSum = "";
cartContainer.innerHTML = "";

function getParameter(paramenter) {
  let parameters = new URLSearchParams(window.location.search);
  return parameters.get(paramenter);
}

function displayCart() {
  let jacket = jackets[getParameter("id") - 1];
  let size = getParameter("size");
  let shipping = jacket.price + 3.95;
  orderSummary += `
      <h1> ORDER SUMMARY</h1>
      <div class="order-sum">
        <div class="order-jacket-camp">
          <img src="${jacket.img}" class="order-jacket" alt="${jacket.alt} >
        </div>
        <div class="order-sum-text">
        </div>
        <div>
            <h2 class="campion-jacket-text">${jacket.name}<H2>
            <h2>$${jacket.price}</h2>
            <p>${jacket.desc}.</p>
            <p>Size: ${size}</p>
            <a href="cart-empty.html" class="order-remove">Remove</a>
        </div>
      </div>
    `;
  totalSum += `
    <h1>TOTAL SUM </h1>
      <div class="total-content">
        <div class="total">
          <div>
            <p>Sub-Total</p>
            <p>Delivery</p>
            <p>TOTAL</p>
          </div>
          <div class="total-price">
            <p>$${jacket.price}</p>
            <p>$3.95</p>
            <p>$${shipping}</p>
          </div>
        </div>
      </div>
      <div class="total-button">
      <a href="checkout-sucsess.html" class="cta-button_home">Add To Basket</a>
    </div>
      `;

  cartContainer.innerHTML +=
    '<section class="order-summary">' +
    orderSummary +
    "</section>" +
    "<section>" +
    totalSum +
    "</section>";
}

displayCart();
