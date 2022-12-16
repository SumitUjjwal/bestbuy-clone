
var topDealItemArr = [{
    image: "https://images.unsplash.com/photo-1588200908342-23b585c03e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80;maxHeight=160;maxWidth=160",
    prod_logo: "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/Samsung_4C_eps_renditionpicker_319x319-91889.png;maxHeight=70;maxWidth=120",
    name: "samsung-82-class-q60t-series-led-4k-uhd-smart",
    price: "899.99",
    quantity: 1,

}

    ,
{
    image: "https://images.unsplash.com/photo-1588200908342-23b585c03e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80;maxHeight=640;maxWidth=550",
    prod_logo: "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/Samsung_4C_eps_renditionpicker_319x319-91889.png;maxHeight=70;maxWidth=120",
    name: "samsung-82-class-q60t-series-led-4k-uhd-smart",
    price: "659.99",
    quantity: 1,
}

    ,
{
    image: "https://images.unsplash.com/photo-1588200908342-23b585c03e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80;maxHeight=160;maxWidth=160",
    prod_logo: "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/Samsung_4C_eps_renditionpicker_319x319-91889.png;maxHeight=70;maxWidth=120",
    name: "Samsung-58-class-q60t-series-led-4k-uhd-smart",
    price: "469.99",
    quantity: 1,
}

    ,
{
    image: "https://images.unsplash.com/photo-1588200908342-23b585c03e26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80;maxHeight=640;maxWidth=550",
    prod_logo: "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/Samsung_4C_eps_renditionpicker_319x319-91889.png;maxHeight=70;maxWidth=120",
    name: "samsung-82-class-q60t-series-led-4k-uhd-smart",
    price: "389.99",
    quantity: 1,
}

];

var cartItemArr = JSON.parse(localStorage.getItem("cart_page")) || [];
topDealItemArr.map(function (ele) {

    var box = document.createElement("div");
    box.style.height = 'auto';
    box.style.alignItems = 'center';

    box.setAttribute("class", "photo_A");
    var img = document.createElement("img");
    img.src = ele.image;

    img.style.width = "90%";
    img.style.height = '200px';
    img.style.paddingLeft = '40px';

    img.setAttribute("class", "photo_B");

    var logo = document.createElement('img');
    logo.src = ele.prod_logo;
    logo.style.width = '30%';
    logo.style.height = '24px';
    logo.style.marginBottom = '0.6rem'
    //  logo.style.paddingLeft = '40px';


    var model = document.createElement('a');
    model.innerText = ele.name;
    model.style.lineHeight = '20px';
    model.style.color = '#0091f7';
    model.style.marginBottom = '0.6rem'
    model.style.cursor = 'pointer';

    var price = document.createElement("p");
    price.innerText = ele.price;


    // quantity:1,
    var btn = document.createElement("button");
    btn.innerText = "Add to Cart";
    btn.style.backgroundColor = 'yellow';
    btn.style.color = 'black';
    btn.style.border = 'none';
    btn.style.padding = '10px 30px 10px 20px';
    btn.style.borderRadius = '6px';
    btn.style.marginTop = '1rem';
    btn.style.cursor = 'pointer';
    btn.style.width = '50%';
    btn.style.display = 'flex'
    btn.style.flexDirection = 'row-reverse'

    btn.addEventListener("click", function () {
        addtocart(ele)
    })

    var lowerDiv = document.createElement('div');
    lowerDiv.style.display = 'flex';
    lowerDiv.style.flexDirection = 'column';
    lowerDiv.style.padding = '10px'
    lowerDiv.style.lineHeight = '20px';
    lowerDiv.style.paddingLeft = '40px';


    lowerDiv.append(logo, model, price, btn);
    box.append(img, lowerDiv);
    document.querySelector("#itemSection").append(box)
});


function addtocart(ele) {
    ele.totalPrice = ele.price * ele.quantity;
    cartItemArr.push(ele);
    localStorage.setItem("cart_page", JSON.stringify(cartItemArr));
    alert("Item/s added to cart");
    console.log(ele)
}
document.querySelector("#fi_item_btn".addEventListener("click",()=>{
    alert("OK")
}))