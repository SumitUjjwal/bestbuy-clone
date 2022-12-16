let btn=document.getElementById("search");
btn.addEventListener("click",fetchBySearch);
let api="https://6398c0f229930e2bb3c11afd.mockapi.io/mobiles";
async function fetchBySearch(){
    let req= await fetch(api);
    let res=await req.json();
    // console.log(res);
}
let container=document.getElementById("container");
function renderedData(data){
data.forEach((item)=>{


});
}
