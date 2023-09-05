const menu = document.getElementById("hamburgermenu");
const toggleIcon = document.getElementById("menu-toggle");

// アイコンがクリックされるとメニューのアクティブ・非アクティブを切り替える。
toggleIcon.addEventListener("click", function (ev) {
    menu.classList.toggle("active");
});

const mask = document.getElementById("mask");
mask.addEventListener("click",function(){
    menu.classList.remove("active");
})

const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    breakpoints: {
        // 768px以上の場合
        768: {
        slidesPerView: 3
        }
    },
    // ページネーションが必要なら追加
    pagination: {
        el: ".swiper-pagination"
    },
    // ナビボタンが必要なら追加
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    
});