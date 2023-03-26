let jackets = [
jacket1 = {
    "id": 1,
    "name": "CAMPION PRO JACKET",
    "price": 299,
    "desc": "Gore-tex technology, 100% watherproof, optimum breathability.",
    "img": "images/RainyDays_Jacket1.png",
    "alt":"CAMPION PRO JACKET"
},
jacket2 = {
    "id": 2,
    "name": "BASE WIGHT JACKET",
    "price": 299,
    "desc": "Comfortable, lightwight, layaring, packeble, rycycled material",
    "img": "images/RainyDays_Jacket2.png",
    "alt": "BASE WIGHT JACKET"
},
jacket3 = {
    "id": 3,
    "name": "HAPPY TRAILS JACKET",
    "price": 499,
    "desc": "100% watherproof, comfortable, breathable, lightwight, packeble",
    "img": "images/RainyDays_Jacket3.png",
    "alt": "HAPPY TRAILS JACKET"
},
jacket4 = {
    "id": 4,
    "name": "EXPLORE BETA JACKET",
    "price": 399,
    "desc": "Gore-tex technology, 100% watherproof, windproof, lightwight.",
    "img": "images/RainyDays_Jacket4.png",
    "alt": "EXPLORE BETA JACKET"
},
jacket5 = {
    "id": 5,
    "name": "LEAVE NO TRACE JACKET",
    "price": 699,
    "desc": "2 stretch layer, windproof, rycyled material, comfortable.",
    "img": "images/RainyDays_Jacket5.png",
    "alt": "LEAVE NO TRACE JACKET"
},
jacket6 = {
    "id": 6,
    "name": "CAT PRO JACKET",
    "price": 199,
    "desc": "Gore-tex technology, 100% watherproof, windproof, 2-1 jacket,lightwight.",
    "img": "images/RainyDays_Jacket6.png",
    "alt": "CAT PRO JACKET"
},
jacket7 = {
    "id": 7,
    "name": "CAMP FLEECE JACKET",
    "price": 99,
    "desc": "lightwight, recycled material, comfortable, stretch fleece, packeble.",
    "img": "images/RainyDays_Jacket7.png",
    "alt": "CAMP FLEECE JACKET"
}
];
let jacketContainer = document.querySelector(".jacketContainer");
let jacketList = "";
jacketContainer.innerHTML = "";


function getJackets() {
    for (let i = 0; i < jackets.length; i++) {
        jacketList +=
        `
        <div class="product-fill">
          <div>
            <a href="product-specific.html?id=${jackets[i].id}"><img src="${jackets[i].img}" alt="${jackets[i].alt}" class="product_size-shop" ></a>
          </div>
          <h3>${jackets[i].name}</h3>
          <p>${jackets[i].desc}</p>
          <p>$ ${jackets[i].price}</p>
        </div>
        `;
    }
    jacketList += 
    `
    <div class="product-fill">
    <div class="shop_quote">
      <p>WHEN LIFE GIVES YOU MOUNTAINS, PUT ON YOUR RAINYDAYS JACKET AND HIKE</p>
      <img src="images/Leaf.png" alt="leaf">
    </div>
    </div>
    </section>
  `;

  jacketContainer.innerHTML += 
  '<section class="jacket-list">' + jacketList + '</section>'
}

getJackets();
