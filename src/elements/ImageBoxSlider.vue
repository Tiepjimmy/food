<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";
import galleryGridpic1 from "../assets/images/gallery/grid2/pic1.jpg";
import galleryGridpic2 from "../assets/images/gallery/grid2/pic2.jpg";
import galleryGridpic3 from "../assets/images/gallery/grid2/pic3.jpg";
import galleryGridpic4 from "../assets/images/gallery/grid2/pic4.jpg";
import { Navigation } from "swiper/modules";
import { RouterLink } from "vue-router";

const carousel = ref([
  { img: galleryGridpic1, title: "Burger" },
  { img: galleryGridpic2, title: "Pasta" },
  { img: galleryGridpic3, title: "Tandoor" },
  { img: galleryGridpic4, title: "Dal Fry" },
  { img: galleryGridpic1, title: "Burger" },
  { img: galleryGridpic2, title: "Pasta" },
  { img: galleryGridpic3, title: "Tandoor" },
  { img: galleryGridpic4, title: "Dal Fry" },
]);
</script>

<template>
  <div class="swiper-btn-lr">
    <div class="swiper portfolio-swiper">
      <Swiper
        class="swiper-wrapper"
        :slides-per-view="4"
        :space-between="30"
        :modules="[Navigation]"
        :speed="1200"
        :navigation="{
          prevEl: '.btn-prev-long',
          nextEl: '.btn-next-long',
        }"
        :breakpoints="{
          1200: { slidesPerView: 4 },
          991: { slidesPerView: 4 },
          575: { slidesPerView: 2 },
          240: { slidesPerView: 1 },
        }"
      >
        <SwiperSlide
          class="swiper-slide"
          v-for="(item, ind) in carousel"
          :key="ind"
        >
          <div class="dz-img-box style-1 wow fadeInUp">
            <div class="dz-media">
              <img :src="item.img" alt="/" />
            </div>
            <span class="dz-tag">TOP SELLER</span>
            <div class="dz-content">
              <div class="dz-info">
                <h5 class="dz-title mb-0">
                  <RouterLink to="/our-menu-1">{{ item.title }}</RouterLink>
                </h5>
                <span class="dz-price">$20.00</span>
              </div>
              <RouterLink
                to="/shop-cart"
                class="btn btn-cart btn-white text-primary btn-square"
                ><i class="flaticon-shopping-cart"></i
              ></RouterLink>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="pagination mt-xl-0 m-t40">
      <div class="img-button-prev btn-prev-long">
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <div class="img-button-next btn-next-long">
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  </div>
</template>
