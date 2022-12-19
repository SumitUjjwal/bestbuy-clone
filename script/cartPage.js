let url = "https://6398c0f229930e2bb3c11afd.mockapi.io/laptops/";
let item = document.getElementById("items");
let price;
let price_summary = document.getElementById("price_summary");
let carousel_card = document.querySelector(".card");


// async function CartItems(id) {
//        let request = await fetch(`${url}${id}`);
//        let data = await request.json();
//        price = data.price.slice(1)
//        show_data(data, price)
//        show_price_summary(price)
// }

// CartItems(3)

// async function show_data(data, new_price) {
//        sessionStorage.setItem("img_src", data.img_src)
//        sessionStorage.setItem("title", data.title)
//        sessionStorage.setItem("price", new_price)
//        item.innerHTML =
//               `
//               <div id="item_detail">
//                      <img src="${data.img_src}" alt="" id="item_detail_image">
//                      <p id="item_detail_title">${data.title}</p>
//               </div>

//               <div id="item_availability">
//                      <form action="">
//                             <input type="radio" name="availability" id="pickup">
//                             <label for="pickup">Pickup at Aiea</label><br>
//                             <input type="radio" name="availability" id="shipping">
//                             <label for="shipping">Shipping to 96939</label>
//                      </form>
//               </div>

//               <div id="item_action">
//                      <select name="quantity" id="item_action_quantity">
//                             <option value="1">1</option>
//                             <option value="2">2</option>
//                             <option value="3">3</option>
//                             <option value="4">4</option>
//                             <option value="5">5</option>
//                      </select>
//                      <button id="item_action_remove">Remove</button>
//               </div>

//               <div id="item_price">$${new_price}</div>
//        `

//        let item_qty = document.getElementById("item_action_quantity");
//        sessionStorage.setItem("qty", item_qty.value)
//        item_qty.addEventListener("change", function () {
//               let qty = item_qty.value;
//               let new_price = 0;
//               new_price = price * qty;
//               update_data(new_price)
//               // show_price_summary(new_price);
//               sessionStorage.setItem("qty", qty)
//               sessionStorage.setItem("price", new_price)
//        })

//        function update_data(new_price) {
//               document.getElementById('item_price').innerText = `$${new_price}`;
//        }


// }


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

async function cardItems(id) {
       let request = await fetch(`${url}${id}`);
       let data = await request.json();
       return data;
       // console.log(data)
}

// function show() {
//        localArr.forEach(id => {
//               let data = cardItems(id)
//               let card = `
//               xyz
//               `
//               CSSContainerRule.append(card)
//        });
// }


let LSid = [1, 2, 3];

// show(LSid)

async function show(LSid) {
       let arr = [];
       await LSid.forEach(id => {
              let data = cardItems(id);
              data.then((cardData) => {
                     arr.push(cardData)
              })
       });
       console.log(arr.length)
       for (let key in arr) {
              console.log(arr[key])
       }
       // renderCards(arr)
}
renderCards()

function getAsCard(item) {


       let items = document.createElement('div');
       items.setAttribute("class", "items");

       // 1st
       let item_detail = document.createElement('div');
       item_detail.setAttribute("class", "item_detail");

       let item_detail_image = document.createElement('img');
       item_detail_image.setAttribute("class", "item_detail_image");
       item_detail_image.src = item.img_src;

       let item_detail_title = document.createElement('p');
       item_detail_title.setAttribute("class", "item_detail_title");
       item_detail_title.innerText = item.title;

       item_detail.append(item_detail_image, item_detail_title);

       // 2nd
       let item_availability = document.createElement('div');
       item_availability.setAttribute("class", "item_availability");
       let form = document.createElement('form');
       let input1 = document.createElement('input');
       input1.setAttribute("class", "pickup");
       input1.setAttribute("type", "radio");
       input1.innerText = "Pickup at Aiea";
       let label1 = document.createElement('label');
       label1.setAttribute("for", "pickup");
       label1.setAttribute("name", "availability");
       label1.innerText = "Pickup at Aiea";

       let input2 = document.createElement('input');
       input2.setAttribute("class", "shipping");
       input2.setAttribute("type", "radio");
       let label2 = document.createElement('label');
       label2.setAttribute("for", "shipping");
       label2.setAttribute("name", "availability");
       label2.innerText = "Shipping to 96939";

       input1.append(label1);
       input2.append(label2);
       form.append(input1, label1, input2, label2);

       item_availability.append(form);

       // 3rd
       let item_action = document.createElement('div');
       item_action.setAttribute("class", "item_action");

       let item_action_quantity = document.createElement('select');
       item_action_quantity.setAttribute("class", "item_action_quantity");

       let option1 = document.createElement('option');
       option1.setAttribute("value", "1");
       option1.innerText = "1";

       let option2 = document.createElement('option');
       option2.setAttribute("value", "2");
       option2.innerText = "2";

       let option3 = document.createElement('option');
       option3.setAttribute("value", "3");
       option3.innerText = "3";

       let option4 = document.createElement('option');
       option4.setAttribute("value", "4");
       option4.innerText = "4";

       let option5 = document.createElement('option');
       option5.setAttribute("value", "5");
       option5.innerText = "5";

       item_action_quantity.append(option1, option2, option3, option4, option5);

       item_action_remove = document.createElement('button');
       item_action_remove.setAttribute("class", "item_action_remove");
       item_action_remove.innerText = "Remove";

       item_action.append(item_action_quantity, item_action_remove);

       // 4th
       let item_price = document.createElement('div');
       item_price.setAttribute("class", "item_price");
       item_price.innerText = item.price;



       items.append(item_detail, item_availability, item_action, item_price)
       return items;
       
}

async function renderCards() {
       let itemArr = [];
       let render_div = document.getElementById("render_cards");

       await LSid.forEach(id => {
              cardItems(id).then(data => {
                     render_div.append(getAsCard(data))
              })
       })
}