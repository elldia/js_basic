const ssf = document.querySelector('.ssf_hero');
const brand = document.querySelector('.brand_slide');
console.log(ssf, brand);

const ssfSwiper = new Swiper(ssf, {
    slidesPerView:3, //한번에 보이는 슬라이드 개수
    spaceBetween:0,
    // pagination:{el:'',},
    navigation:{
        nextEl:'.ssf_hero .next',
        prevEl:'.ssf_hero .prev',
    },
});

const brandSwiper = new Swiper(brand, {
    slidesPerView:3,
    spaceBetween:10,
    navigation:{
        nextEl:'.brand_slide ~ .next',
        prevEl:'.brand_slide ~ .prev',
    },
})