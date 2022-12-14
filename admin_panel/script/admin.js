let login_div = document.querySelector("#login");
let dashboard = document.querySelector("#dashboard");
let login_button = document.querySelector("form");
let products = document.querySelector("#products_wrapper");
let add_products = document.querySelector("#add_products");
let addProduct = document.querySelector("#product_form");
let add_product_form = document.querySelector("#product_form>form");
let remove_product = document.querySelector(".products");

// adding event listener to login button
login_button.addEventListener("submit", login);

// function for login
async function login(event) {
       event.preventDefault();
       // let username = document.getElementById("username").value;
       // let password = document.getElementById("password").value;

       // let obj = {
       //        username : username,
       //        password : password
       // }

       // localStorage.setItem("")

       // alert("Logged In Successfully")

       login_div.style.display = "none";
       dashboard.style.display = "block";
       // window.location.href = "#dashboard";
       show_data();
}

// function for rendering data on DOM
async function show_data() {
       let request = await fetch("https://6398c0f229930e2bb3c11afd.mockapi.io/mobiles");
       let data = await request.json();
       console.log(data)

       products.innerHTML = "";
       let show_data = data.map((element) => {
              return `
              <div class="products" id=${element.id}>
                     <img src="${element.img_src}" alt="" id="img-src">
                     <h2 id="title">${element.title}</h2>
                     <h3 id="price">${element.price}</h3>
                     <p id="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet optio neque cumque vero ullam dolor quo ad nulla repellat. Ad odit reprehenderit accusamus optio cupiditate in inventore nesciunt vel error.</p>
                     <button class="remove" onclick="handleDelete(this)">Remove</button>
              </div>
              `
       });
       products.innerHTML = show_data.join(" ");

       let all_delete_btn = document.querySelectorAll(".products");
       for (let btn of all_delete_btn) {
              btn.addEventListener("click", (event) => {
                     let data_id = event.target.dataset.id;
                     console.log(data_id, typeof data_id);
                     // console.log(btn)
                     // DeleteBtn(data_id);
              });
       }
}

// Adding event listener to add product button
add_products.addEventListener("click", productForm);

function productForm() {
       products.style.display = "none";
       addProduct.style.display = "block";
       // window.location.href = "#product_form"
}

// Adding event listener to add product form
add_product_form.addEventListener("submit", post_product);

// function for adding product
async function post_product(event) {
       event.preventDefault();

       let title = document.querySelector("#product_form #title").value;
       let price = document.querySelector("#product_form #price").value;
       let image = document.getElementById("img").value;

       let obj = {
              title: title,
              price: price,
              img_src: image,
       }
       console.log(obj)

       let request = fetch("https://6398c0f229930e2bb3c11afd.mockapi.io/mobiles", {
              method: "POST",
              headers: {
                     "Content-Type": "application/json"
              },
              body: JSON.stringify(obj)
       })

       alert("Product Added Successfully");
       show_data();

       products.style.display = "block";
       addProduct.style.display = "none";
       // window.location.href = "#products_wrapper"

}

// Handling Delete
function handleDelete(e) {
       let id = e.parentElement.id
       DeleteBtn(id)
}

// calling Delete Button
async function DeleteBtn(id) {

       let request = await fetch(`https://6398c0f229930e2bb3c11afd.mockapi.io/mobiles/${id}`, {
              method: "DELETE",
              headers: {
                     "Content-Type": "application/json"
              }
       })
       console.log(request)
       if (request.ok) {
              console.log("Removed")
              show_data();
       }
}