let url = "https://6398c0f229930e2bb3c11afd.mockapi.io/mobiles/";
let item = document.getElementById("items");
let price;
let price_summary = document.getElementById("price_summary");
let carousel_card = document.querySelector(".card");


async function CartItems(id) {
       let request = await fetch(`${url}${id}`);
       let data = await request.json();
       price = data.price.slice(1)
       show_data(data, price)
       show_price_summary(price)
}

CartItems(3)

async function show_data(data, new_price) {
       sessionStorage.setItem("img_src", data.img_src)
       sessionStorage.setItem("title", data.title)
       sessionStorage.setItem("price", new_price)
       item.innerHTML =
              `
              <div id="item_detail">
                     <img src="${data.img_src}" alt="" id="item_detail_image">
                     <p id="item_detail_title">${data.title}</p>
              </div>

              <div id="item_availability">
                     <form action="">
                            <input type="radio" name="availability" id="pickup">
                            <label for="pickup">Pickup at Aiea</label><br>
                            <input type="radio" name="availability" id="shipping">
                            <label for="shipping">Shipping to 96939</label>
                     </form>
              </div>

              <div id="item_action">
                     <select name="quantity" id="item_action_quantity">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                     </select>
                     <button id="item_action_remove">Remove</button>
              </div>

              <div id="item_price">$${new_price}</div>
       `

       let item_qty = document.getElementById("item_action_quantity");
       sessionStorage.setItem("qty", item_qty.value)
       item_qty.addEventListener("change", function () {
              let qty = item_qty.value;
              let new_price = 0;
              new_price = price * qty;
              update_data(new_price)
              show_price_summary(new_price);
              sessionStorage.setItem("qty", qty)
              sessionStorage.setItem("price", new_price)
       })

       function update_data(new_price) {
              document.getElementById('item_price').innerText = `$${new_price}`;
       }

       
}


async function show_price_summary(price_value) {
       let discount = ((price_value / 100) * 23).toFixed(2);
       let sales_tax = (((price_value - discount) / 100) * 18).toFixed(2);
       let total_value = (+price_value - +discount + +sales_tax).toFixed(2);
       sessionStorage.setItem("total_price", total_value);
       sessionStorage.setItem("tax", sales_tax);
       price_summary.innerHTML =
              `
       <div id="price_summary_line1" class="summary_line">
              <span> Original Price </span>
                                   <span> $${price_value} </span>
                            </div>
                            <div id="price_summary_line2" class="summary_line">
                                   <span> Savings </span>
                                   <span> -$${discount} </span>
                            </div>
                            <div id="price_summary_line3" class="summary_line">
                                   <span> Store Pickup </span>
                                   <span> FREE </span>
                            </div>
                            <div id="price_summary_line4" class="summary_line">
                                   <span> Estimated Sales Tax </span>
                                   <span> $${sales_tax} </span>
                            </div>
                            <div id="total_price" class="summary_line">
                                   <h4>Total</h4>
                                   <h4>$${total_value}</h4>
                            </div>
       `
}


// async function carousel_card_data() {
//        let request = await fetch(url);
//        let data = await request.json();
//        console.log(data)
//        carousel_card.innerHTML = "";

//        let show_card_data = data.map((element) => {
//               console.log(element.price)
//               return
//               `
//                      <img class="card-img-top"
//                             src="${element.img_src}"
//                             alt="Card image cap" width="100%">
//                      <div class="card-body">
//                             <h5 class="card-title">${element.title}</h5>
//                             <p class="card-text">${element.price}</p>
//                             <button class="card-button">Add to Cart</button>
//                      </div>
//               `
//        });
//        carousel_card.innerHTML = show_card_data[0];
//        console.log(show_card_data)
// }

// carousel_card_data();