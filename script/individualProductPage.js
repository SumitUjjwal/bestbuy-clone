
var parent = document.getElementById('required')
let data = [
       {
              image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6425/6425358_sd.jpg;maxHeight=180;maxWidth=180",
              name: "Razer - Huntsman Mini 60% Wired Gaming Linear Optical Switch Keyboard with RGB Chroma Backlighting - Mercury",
              price: "$129.99"
       },
       {
              image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6367/6367751_sd.jpg;maxHeight=180;maxWidth=180",
              name: "Razer - Huntsman Mini 60% Wired Gaming Clicky Optical Switch Keyboard with RGB Chroma Backlighting - Mercury",
              price: "100"
       },
       {
              image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6453/6453148_sd.jpg;maxHeight=180;maxWidth=180",
       },
       {
              image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6458/6458720_sd.jpg;maxHeight=180;maxWidth=180",
       },
       {
              image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452798_rd.jpg;maxHeight=180;maxWidth=180",
       },
       {
              image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6463/6463499_sd.jpg;maxHeight=180;maxWidth=180",
       }

]

function showproducts() {

       data.forEach(function (product) {

              let div = document.createElement('div')


              let img = document.createElement('img')
              img.src = product.image

              let price = document.createElement('p')

              price.textContent = product.price

              let name = document.createElement("p")

              name.textContent = product.name

              div.append(img)

              parent.append(div)
       })

}
showproducts()



let parent1 = document.getElementById('opt')
let data1 = [
       {
              image1: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6372/6372528_sd.jpg;maxHeight=180;maxWidth=180",
              name: "Razer - Huntsman Mini 60% Wired Gaming Linear Optical Switch Keyboard with RGB Chroma Backlighting - Mercury",
              price: "$129.99"
       },
       {
              image1: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6458/6458714_sd.jpg;maxHeight=180;maxWidth=180",
       },
       {
              image1: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6396/6396205_sd.jpg;maxHeight=180;maxWidth=180",
       }
]

