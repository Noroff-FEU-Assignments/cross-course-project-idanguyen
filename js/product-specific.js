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

let detailsContainer = document.querySelector(".detailsContainer");
var selection = "S";
detailsContainer.innerHTML = "";

function getParameter(paramenter) {
    let parameters = new URLSearchParams(window.location.search);
    return parameters.get(paramenter);
}

function buttonSelection(parameter) {
    selection = parameter;
    document.getElementById("size").value = parameter
}

function changeLocation() {
    location.href = 'cart.html?id='+jackets[getParameter("id")-1].id+'&size='+selection
}

function displayDetails() {
    let jacket = jackets[getParameter("id")-1];
    let details = 
    `
    <div class="campion-jacket-pic">
        <img src="${jacket.img}" alt="${jacket.alt}"/>
      </div>
      <div class="campion-text">
        <h1>${jacket.name}</h1>
        <p>$${jacket.price}</p>
        <p>Select Size : <output type="text" id="size">S</p>
        <div class="campion-size">
          <button id="S" class="size"   onclick=buttonSelection("S")>S</button>
          <button id="M" class="size"   onclick=buttonSelection("M")>M</button>
          <button id="L" class="size"   onclick=buttonSelection("L")>L</button>
          <button id="XL" class="size"  onclick=buttonSelection("XL")>XL</button>
          <button id="XXL" class="size" onclick=buttonSelection("XXL")>XXL</button>
        </div>
        <div class="campion-basket">
          <a class="cta-button_home"  id="basket" href="#" onclick="changeLocation();return false;">Add To Basket</a>
        </div>
      </div>
    `
    detailsContainer.innerHTML += '<section class="campion-jacket">' + details + '</section>' 
}

displayDetails();