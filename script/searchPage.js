let btn=document.getElementById("search");
btn.addEventListener("click",fetchBySearch);
let searchVal = localStorage.getItem('searchVal');

let api="https://6398c0f229930e2bb3c11afd.mockapi.io/";
async function fetchBySearch(){
    let val=document.getElementById("entr").value;
    let toBesearch = api+ val;
    console.log(toBesearch);
let req= await fetch(toBesearch);
    let res=await req.json();
    console.log(res);
    renderData(res);
}
let prodct=document.getElementById("whole_prod");
function renderedData(data){
data.forEach((item)=>{
let img=item.img_src;
let  title=item.title;
let model=item.model;
let sku=item.sku-value;
let estimates=item.Estimates;
let color=item.color;
let discount=item.discount;
let fulfillment=item.fulfillment;
let rating=item.rating;
let review=item.reviews;
let pre_price=item.previous_price;
let curr_price=item.price;
console.log(item);
appenData(img,title,model,estimates,discount,fulfillment,review,pre_price,curr_price);
});
}
function appenData(img,title,model,estimates,discount,fulfillment,review,pre_price,curr_price){
    prodct.innerHTML=`<div id="item">
    <div id="prod_img">
        <img src=${img}>
    </div>
    <div id="prod_info">
        <div id="spnson">Sponsored</div>
        <a id="prod_name">${title}
        </a>
        <div id="model_det">
            <div id="model_sku">
                <div>
                    <span class="mdl">Model:</span>
                    <span class="mdl_val">${model}</span>
                </div>
                <div>
                    <span class="mdl">SKU:</span>
                    <span class="mdl_val">96939</span>
                </div>
            </div>
            <div id="rtng">
                <div class="ratings-reviews">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class=" fa fa-star fa-solid fa-star-half-stroke"></span>
                    <span class="fa fa-star"></span>
                    <span>(${review})</span>
                </div>
            </div>
        </div>
        <div id="avail_det">
        <div id="avail"><strong>${fulfillment}</strong></div>
        <div id="pick_up">
        <div id="pick_icon">
            <img src="https://cdn-icons-png.flaticon.com/512/8964/8964952.png">
        </div>
        <div id="pick_desc">
                    <span><strong>Pickup:</strong></span>
                    <span>Unavailable within 250 miles of Aiea</span>
        <div id="pick_loc">
          <span>  Update Location</span>
        </div>
        </div>
    </div>
    <div id="pick_ship">
        <div id="ship_icon">
            <img src="https://cdn-icons-png.flaticon.com/512/709/709790.png">
        </div>
        <div id="ship_desc">
                    <span><strong>Shipping:</strong></span>
                    <span>Unavailable in your area</span>
                    <div>
                This item is available only in certain markets</div>
        <div id="ship_loc">
          <span> "Estimates for"${estimates}</span>
        </div>
        </div>
</div>
</div>
<div id="comp_sv">
    <div id="comp">
        <div id="comp_icon"><img src="https://cdn-icons-png.flaticon.com/512/545/545666.png">
        </div>
        <div id="comp_val">Compare
            </div>
        </div>
    <div id="sv"><div id="sv_icon"><img src="https://cdn-icons-png.flaticon.com/512/84/84510.png">
        </div>
        <div id="save_val"> Saved</div>
        </div>
</div>
</div>
<div id="prod_price">
<div id="prev_pr">
<span>${pre_price}</span>
<span>/mo.</span>
</div>
<div id="current_pr">
    <span>${curr_price}</span>
<span>/mo.</span>
<div id="disc">Save ${discount}</div>
</div>
<button id="add_to"><img src="https://cdn-icons-png.flaticon.com/512/2838/2838838.png">  Add To Cart</button>
</div>
</div>
</div>
</div> `
}

//-----------------------------------------------------------------------------------------------

function renderData(data){
    prodct.innerHTML= data.map(item => {

    return  `<div id="item">
    <div id="prod_img">
        <img src=${item.img_src}>
    </div>
    <div id="prod_info">
        <div id="spnson">Sponsored</div>
        <a id="prod_name">${item.title}
        </a>
        <div id="model_det">
            <div id="model_sku">
                <div>
                    <span class="mdl">Model:</span>
                    <span class="mdl_val">${item.model}</span>
                </div>
                <div>
                    <span class="mdl">SKU:</span>
                    <span class="mdl_val">${item['sku-value']}</span>
                </div>
            </div>
            <div id="rtng">
                <div class="ratings-reviews">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class=" fa fa-star fa-solid fa-star-half-stroke"></span>
                    <span class="fa fa-star"></span>
                    <span>(${item.reviews})</span>
                </div>
            </div>
        </div>
        <div id="avail_det">
        <div id="avail"><strong>${item.fulfillment}</strong></div>
        <div id="pick_up">
        <div id="pick_icon">
            <img src="https://cdn-icons-png.flaticon.com/512/8964/8964952.png">
        </div>
        <div id="pick_desc">
                    <span><strong>Pickup:</strong></span>
                    <span>Unavailable within 250 miles of Aiea</span>
        <div id="pick_loc">
          <span>  Update Location</span>
        </div>
        </div>
    </div>
    <div id="pick_ship">
        <div id="ship_icon">
            <img src="https://cdn-icons-png.flaticon.com/512/709/709790.png">
        </div>
        <div id="ship_desc">
                    <span><strong>Shipping:</strong></span>
                    <span>Unavailable in your area</span>
                    <div>
                This item is available only in certain markets</div>
        <div id="ship_loc">
          <span> "Estimates for"${item.Estimates}</span>
        </div>
        </div>
</div>
</div>
<div id="comp_sv">
    <div id="comp">
        <div id="comp_icon"><img src="https://cdn-icons-png.flaticon.com/512/545/545666.png">
        </div>
        <div id="comp_val">Compare
            </div>
        </div>
    <div id="sv"><div id="sv_icon"><img src="https://cdn-icons-png.flaticon.com/512/84/84510.png">
        </div>
        <div id="save_val"> Saved</div>
        </div>
</div>
</div>
<div id="prod_price">
<div id="prev_pr">
<span>${item.previous_price}</span>
<span>/mo.</span>
</div>
<div id="current_pr">
    <span>${item.price}</span>
<span>/mo.</span>
<div id="disc">Save ${item.discount}</div>
</div>
<button id="add_to"><img src="https://cdn-icons-png.flaticon.com/512/2838/2838838.png">  Add To Cart</button>
</div>
</div>
</div>
</div> `
}).join("")
}