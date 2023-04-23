const uri = "https://www.idanhu.com/wp-json/wc/store/products";

let detailsContainer = document.querySelector(".detailsContainer");
var selection = "S";
detailsContainer.innerHTML = "";

function getParameter(paramenter) {
  let parameters = new URLSearchParams(window.location.search);
  return parameters.get(paramenter);
}

function buttonSelection(parameter) {
  selection = parameter;
  document.getElementById("size").value = parameter;
}

function changeLocation() {
  location.href = "cart.html?id=" + getParameter("id") + "&size=" + selection;
}

async function displayDetails(uri) {
  try {
    const response = await fetch(uri);
    const results = await response.json();
    let details = `
    <div class="campion-jacket-pic">
        <img src="${results.images[0].src}" alt="${results.images[0].alt}"/>
      </div>
      <div class="campion-text">
        <h1>${results.name}</h1>
        <p>${results.prices.price} ${results.prices.currency_code}</p>
        <p>Select Size : <output type="text" id="size">S</p>
        <div class="campion-size">
          <button id="S" class="size"   onclick=buttonSelection("S")>${results.attributes[0].terms[0].name}</button>
          <button id="M" class="size"   onclick=buttonSelection("M")>${results.attributes[0].terms[1].name}</button>
          <button id="L" class="size"   onclick=buttonSelection("L")>${results.attributes[0].terms[2].name}</button>
          <button id="XL" class="size"  onclick=buttonSelection("XL")>${results.attributes[0].terms[3].name}</button>
          <button id="XXL" class="size" onclick=buttonSelection("XXL")>${results.attributes[0].terms[4].name}</button>
        </div>
        <div class="campion-basket">
          <a class="cta-button_home"  id="basket" href="#" onclick="changeLocation();return false;">Add To Basket</a>
        </div>
      </div>
    `;
    detailsContainer.innerHTML +=
      '<section class="campion-jacket">' + details + "</section>";
  } catch (error) {
    alert(error);
  }
}

displayDetails(uri + "/" + getParameter("id"));
