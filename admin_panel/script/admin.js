// admin container
let login_div = document.querySelector("#login");
let admin_container = document.querySelector(".admin_container");

let dashboard = document.querySelector("#dashboard");
let dashboard_container = document.querySelector(".dashboard_container");
let login_form = document.querySelector("#login_form");
let products = document.querySelector("#products_wrapper");
let add_products = document.querySelector("#add_products");
let add_product = document.querySelector("#add_product");
let add_product_form = document.querySelector("#product_form>form");
let remove_product = document.querySelector(".products");
let get_products = document.querySelector("#get_products");
let get_products_by_category = document.getElementById("get_products");

// adding event listener to login button
login_form.addEventListener("submit", login);

// function for login
async function login(event) {
       event.preventDefault();

       alert("Logged In Successfully")

       admin_container.style.display = "none";
       dashboard_container.style.display = "flex";
       show_data("mobiles");
}

// // function for rendering data on DOM
async function show_data(category) {
       let request = await fetch(`https://6398c0f229930e2bb3c11afd.mockapi.io/${category}`);
       let data = await request.json();
       // console.log(data)

       products.innerHTML = "";
       let show_data = data.map((element) => {
              return `
              <div class="products">
                     <div> 
                            <img src="${element.img_src}" alt="" id="img-src">
                     </div>
                     <div>
                            <h2 id="title">${element.title}</h2>
                            <h3 id="price">${element.price}</h3>
                            <p id="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet optio neque cumque vero ullam dolor quo ad nulla repellat. Ad odit reprehenderit accusamus optio cupiditate in inventore nesciunt vel error.</p>
                            <button class="yl_btn remove" onclick="handleDelete(${element.id})">Remove</button>
                     </div>
              </div>
              `
       });
       products.innerHTML = show_data.join(" ");

}

// Adding event listener to add product form
add_product.addEventListener("submit", post_product);

// function for adding product
async function post_product(event) {
       event.preventDefault();

       let title = document.getElementById("add_title").value;
       let price = document.getElementById("add_price").value;
       let image = document.getElementById("add_img").value;
       let cat = document.getElementById("add_cat").value;

       let category = cat.toLowerCase();
       // console.log(category)

       let obj = {
              title: title,
              price: price,
              img_src: image,
       }

       let request = fetch(`https://6398c0f229930e2bb3c11afd.mockapi.io/${category}`, {
              method: "POST",
              headers: {
                     "Content-Type": "application/json"
              },
              body: JSON.stringify(obj)
       })

       alert("Product Added Successfully");
       show_data(category);

}


// handling Delete Button
async function handleDelete(id) {

       let request = await fetch(`https://6398c0f229930e2bb3c11afd.mockapi.io/mobiles/${id}`, {
              method: "DELETE",
              headers: {
                     "Content-Type": "application/json"
              }
       })
       console.log(request)
       if (request.ok) {
              console.log("Removed")
              show_data("mobiles");
       }
}

get_products_by_category.addEventListener("change", products_category);

async function products_category() {
       let select_value = get_products_by_category.value;
       console.log(select_value)
       show_data(select_value);
}