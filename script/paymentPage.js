// getting items from sessionStorage
let img_src = sessionStorage.getItem("img_src");
let title = sessionStorage.getItem("title");
let total_price = sessionStorage.getItem("total_price");
let tax = sessionStorage.getItem("tax");
let qty = sessionStorage.getItem("qty");
let userDetails = JSON.parse(sessionStorage.getItem("user_details"));

let price = (total_price - tax).toFixed(2);

let item_details = document.getElementById("item_details");
let right_item_details = document.getElementById("right_item_details");
let right_checkout_price = document.getElementById("right_checkout_price");
let address_subm_btn = document.getElementById("address_subm");
let user_address = document.getElementById("userAddress");

// setting details on DOM

right_item_details.innerHTML =
       `
      <img src="${img_src}"
              alt="">
       <p id="title">${title}</p>
       <div>
              <p id="price">$${price}</p>
              <p>Qty 1</p>
              <a href="">Remove</a>
       </div> 
`;

right_checkout_price.innerHTML =
       `
      <div class="right_checkout_price_box">
              <p>Item Subtotal</p>
              <p>$${price}</p>
       </div>
       <div class="right_checkout_price_box">
              <p>Shipping</p>
              <p>FREE</p>
       </div>
       <div class="right_checkout_price_box">
              <p>Estimated Sales Tax</p>
              <p>$${tax}</p>
       </div>
       <p>You're saving $200 on your order today!</p>
       <div class="right_checkout_price_box">
              <h2>Total</h2>
              <h2>$${total_price}</h2>
       </div> 
`

user_address.innerHTML = 
`
       <h4>Billing Details</h4>
       <p id="userName">${userDetails.firstName} ${userDetails.lastName}</p>
       <p id="address">${userDetails.address1}, ${userDetails.address2}</p>
       <p id="city">${userDetails.city}</p>
       <p id="state">${userDetails.state}</p>
       <p id="zip">${userDetails.zip}</p>
       <div><span><a href="#">Edit this address</a></span> | <span><a href="#">Add a new address</a></span></div>
`