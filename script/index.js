// ! Rendering Top Secion cards

let topSectionCardsMain = document.querySelector('.topSection_cards_innerContainer')
let cards = []
let imgVal = 4;
for (let i = 0; i < 18; i++) {
    let card = `
    <div class="topSection_card_container">
        <a class="topSection_card_imgBox">
            <img src="resources/topSectionCards/img_${imgVal+i}.jpg" alt="">
        </a>
        <a href="" class="topSection_card_textBox">
             Laptops & Computers
        </a>
    </div>
    `
    cards.push(card)
}
topSectionCardsMain.innerHTML = cards.join("")
