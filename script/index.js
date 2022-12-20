// ---------- Rendering Top Section cards --------
import data from "../resources/data_files/topSectionObjects.js"

let topSectionCardsMain = document.querySelector('.topSection_cards_innerContainer')
renderTopSectionCards()
function renderTopSectionCards() {
    topSectionCardsMain.innerHTML = data.map(item => {
        return `
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
}

//-------- Bottom carousel ----------
let leftBtn = document.querySelector('.bottom_carousel_prev_button');
let rightBtn = document.querySelector('.bottom_carousel_next_button');
let track = document.querySelector('.bottom_carousel_cards_track')
let card = document.querySelector('.bottom_carousel_card')
let cardWidth = card.getBoundingClientRect().width;
let slideIndexNext = 1;
let slideIndexPrev = 1;
function moveForward() {

    let moveVal = cardWidth * slideIndexNext;
    if (slideIndexNext >= 4) {
        moveVal = 0;
        slideIndexNext = 1;
    }
    track.style.transform = `translateX(-${moveVal}px)`
    slideIndexNext++;
}

rightBtn.addEventListener('click', (e) => {
    moveForward()
})

function moveBackward() {
    let moveVal = cardWidth * slideIndexPrev;
    if (slideIndexNext <= slideIndexPrev) {
        moveVal = 0;
    }
    track.style.transform = `translateX(${moveVal}px)`
    slideIndexPrev++;
}

leftBtn.addEventListener('click', (e) => {
    moveBackward()
})

// ----------------------------------
let search = document.querySelector('#searchBtn')
search.addEventListener('click', () => {

    let seachVal = document.querySelector('#inputSearch').value;
    localStorage.setItem('searchVal', seachVal)
    window.location.href = 'html/searchPage.html'
})



