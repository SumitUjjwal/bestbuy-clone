import data from "../resources/data_files/topSectionObjects.js"

let topSectionCardsMain = document.querySelector('.topSection_cards_innerContainer')

topSectionCardsMain.innerHTML = data.map(item => {
  return  `
    <div class="topSection_card_container">
        <a class="topSection_card_imgBox">
            <img src="${item.src}" alt="${item.title}">
        </a>
        <a href="" class="topSection_card_textBox">
             ${item.title}
        </a>
    </div>
    `
}).join("")




// ! Rendering Top Secion cards
// let cards = []
// let cards_title = ['Laptop']
// let imgVal = 4;
// for (let i = 0; i < 18; i++) {
//     let card = `
//     <div class="topSection_card_container">
//         <a class="topSection_card_imgBox">
//             <img src="resources/topSectionCards/img_${imgVal+i}.jpg" alt="">
//         </a>
//         <a href="" class="topSection_card_textBox">
//              Laptops & Computers
//         </a>
//     </div>
//     `
//     cards.push(card)
// }
// topSectionCardsMain.innerHTML = cards.join("")


