let url = "https://6398c0f229930e2bb3c11afd.mockapi.io/laptops/";
let item = document.getElementById("items");
let price;
let price_summary = document.getElementById("price_summary");


async function CartItems(id) {
       let request = await fetch(`${url}${id}`);
       let data = await request.json();
       // price_con(data.price)
       price = data.price.slice(1)
       show_data(data, price)
       // console.log(data)
       // console.log(price)
       show_price_summary(price)
}

CartItems(2)

// async function price_con(value) {
//        price = value.slice(1)

// }

async function show_data(data, new_price) {
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
       console.log(item_qty)
       item_qty.addEventListener("change", function () {
              let qty = item_qty.value;
              let new_price = 0;
              new_price = price * qty;
              // show_data(data, new_price);
              update_data(new_price)
              show_price_summary(new_price);
       })
       
       function update_data(new_price){
              document.getElementById('item_price').innerText = new_price;
       }
}

// async function qty_price(qty,price) {
//        console.log(qty,price)
// }

async function show_price_summary(price_value) {
       let discount = ((price_value / 100)*3).toFixed(2);
       let sales_tax = (((price_value-discount)/100)*18).toFixed(2);
       let total_value = (+price_value - +discount + +sales_tax).toFixed(2);
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
