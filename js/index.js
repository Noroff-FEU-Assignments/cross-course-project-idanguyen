const uri = "https://www.idanhu.com/wp-json/wc/store/products";

const uriFeatured =
  "https://www.idanhu.com/wp-json/wc/store/products?featured=true";

let jacketContainer = document.querySelector(".jacketContainer");
let emailContainer = document.querySelector(".emailContainer");

let toggled = false;

jacketContainer.innerHTML = "";
emailContainer.innerHTML = "";

async function getJackets(uri) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  try {
    const response = await fetch(uri);
    const results = await response.json();
    let display = `
    <div class="hl_favorites">
        <h1>OUR FAVORITES</h1>
        <img src="images/Leaf.png" alt="Leaf" />
    </div>
    <div class="hl_display">
    `;

    jacketContainer.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
      display += `
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
    jacketContainer.innerHTML +=
      '<section class="hl">' + display + "</section>";
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

/*
The email validation was solved using this reference:
https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
combining the answers of @ImmortalFirefly and @OregonTrail
*/

function displayNewsletter() {
  let html = `
    <div class= "sign-letter">
    <h3>JOIN THE ADVENTURE!</h3> 
    <p>SIGN UP TO OUR NEWSLETTER</p>
  </div>
  <div>
    <form>
      <label for="email">EMAIL ADDRESS</label>
      <div>
        <input type="email" id="email" name="Email" class="email">
      </div>
      <input type="checkbox" id="email-updates" name="email-updates">
      <label for="email-updates">I WANT TO HAVE ACCESS TO EXCLUSIVE CONTENT OFFERS</label>
      <button id="submitBtn" type="submit" value="SIGN UP" class="sign-up_button" disabled=true>Updates</button>
    </form>
  </div>
    `;
  emailContainer.innerHTML += '<section class="sign-up">' + html + "</section>";

  let submitBtn = document.getElementById("submitBtn");
  let checkbox = document.getElementById("email-updates");
  let email = document.getElementById("email");

  document.getElementById("email-updates").onchange = function () {
    if (checkbox.checked && /\S+@\S+\.\S+/.test(email.value)) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  };

  document.getElementById("email").onchange = function () {
    if (checkbox.checked && /\S+@\S+\.\S+/.test(email.value)) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  };
}

getJackets(uri);
displayNewsletter();
