const uri = "https://www.idanhu.com/wp-json/wc/store/products";
const uriFeatured =
  "https://www.idanhu.com/wp-json/wc/store/products?featured=true";

let jacketContainer = document.querySelector(".jacketContainer");
let toggled = false;

async function getJackets(uri) {
  try {
    const response = await fetch(uri);
    const results = await response.json();
    let jacketList = "";
    jacketContainer.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
      jacketList += `
        <div class="product-fill">
          <div>
            <a href="product-specific.html?id=${results[i].id}"><img src="${results[i].images[0].thumbnail}" alt="${results[i].images[0].alt}" class="product_size-shop" ></a>
          </div>
          <h3>${results[i].name}</h3>
          <p>${results[i].description}</p>
          <p>${results[i].prices.price} ${results[i].prices.currency_code}</p>
        </div>
        `;
    }
    jacketList += `
    <div class="product-fill">
    <div class="shop_quote">
      <p>WHEN LIFE GIVES YOU MOUNTAINS, PUT ON YOUR RAINYDAYS JACKET AND HIKE</p>
      <img src="images/Leaf.png" alt="leaf">
    </div>
    </div>
    </section>
  `;

    jacketContainer.innerHTML +=
      '<section class="jacket-list">' + jacketList + "</section>";
  } catch (error) {
    alert(error);
  }
}

function toggleFeatured() {
  toggled = !toggled;
  if (toggled) {
    getJackets(uriFeatured);
  } else {
    getJackets(uri);
  }
}

getJackets(uri);
