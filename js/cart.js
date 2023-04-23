const uri =
  "https://www.idanhu.com/wp-json/wc/store/products";

let cartContainer = document.querySelector(".cartContainer");
let orderSummary = "";
let totalSum = "";
cartContainer.innerHTML = "";

function getParameter(paramenter) {
  let parameters = new URLSearchParams(window.location.search);
  return parameters.get(paramenter);
}

async function displayCart(uri) {
  let size = getParameter("size");



  await new Promise((resolve) => setTimeout(resolve, 1000));
  try {
    const response = await fetch(uri);
    const results = await response.json();
    
  let shipping = results.prices.price + 100.00;
  orderSummary += `
      <h1> ORDER SUMMARY</h1>
      <div class="order-sum">
        <div class="order-jacket-camp">
          <img src="${results.images[0].thumbnail}" class="order-jacket" alt="${results.images[0].alt} >
        </div>
        <div class="order-sum-text">
        </div>
        <div>
            <h2 class="campion-jacket-text">${results.name}<H2>
            <h2>${results.prices.price} ${results.prices.currency_code}</h2>
            <p>${results.description}.</p>
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
            <p>${results.prices.price} ${results.prices.currency_code}</p>
            <p>100.00 ${results.prices.currency_code}</p>
            <p>${shipping} ${results.prices.currency_code}</p>
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
  catch (error) {
  alert(error);
}

}

displayCart(uri+"/"+getParameter("id"));
