// import seachValueFromHome from "../script/index.js";
// console.log(seachValueFromHome)
let cartArr = JSON.parse(localStorage.getItem('cartItems')) || [];
// fetchBySearch(seachValueFromHome)
let api = "https://6398c0f229930e2bb3c11afd.mockapi.io/";
let searchVal = localStorage.getItem('searchVal') || null;
searchVal && fetchBySearch(searchVal)
async function fetchBySearch(val) {
    let toBesearch = api + val;
    let req = await fetch(toBesearch);
    let res = await req.json();
    renderData(res, val);

}
let prodct = document.querySelector(".right_section");

//-----------------------------------------------------------------------------------------------

function renderData(data, type) {
    prodct.innerHTML = data.map(item => {

        return `
        <div class="item_container">
            <div class="product_image">
                <img src="${item.img_src}" alt="" ${type == 'laptops' ? `width ="200px" height = "5px"` : ""}>
            </div>
            <div class="product_details">
                <h4>
                    ${item.title}
                </h4>
                <div class="product_model_details">
                    <p>Model: <span>${item.model}</span></p>
                    <p>SKU: <span>${item['sku-value']}</span></p>
                </div>

                <div class="product_rating">
                    <div>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <span>(${item.reviews})</span>
                </div>
                <h5>${item.fulfillment}</h5>
                <div class="product_pickup_details">
                    <i class="fa-solid fa-truck-fast"></i>
                    <div>
                        <p>Pickup: <span>Ready in ${item.id} hour at Aiea</span></p>
                        <span>See all pickup location</span>
                    </div>
                </div>
                <div class="product_pickup_details">
                    <i class="fa-solid fa-store"></i>
                    <div id="shipping">
                        <p>This item is only available in certain markets.</p>
                        <span>Estimates for 96939</span>
                    </div>
                </div>
                <div class="product_checkbox">
                    <div>
                        <input type="checkbox" id="compare" name="compare" value="">
                        <label for="compare"> Compare</label><br>
                    </div>
                    <div>
                        <i class="fa-regular fa-bookmark"></i>
                        <span>Save</span>
                    </div>
                </div>
             </div>
            <div class="product_payment">
                <h1>$<span>${item.price}</span></h1>
                <div class="product_price_save">
                    <span>Save $${((item.previous_price - item.price).toFixed(2))}</span>
                    <span>Was $${item.previous_price}</span>
                </div>
                <h6>Free 6 months of security software</h6>
                <span>$29.99 value</span>
                <button id="${item.id}"> <span><i class="fa-solid fa-cart-shopping"></i> </span> Add to Cart</button>
                <p>Open-Box: <span>from $234.99</span></p>
            </div>
        </div>
        `
    }).join("")
    let btnArr = document.querySelectorAll('.product_payment>button')
    btnArr.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.innerText = 'Added in Cart';
            cartArr.push(e.target.id)
            localStorage.setItem('cartItem', JSON.stringify(cartArr))
        })
    });
}



