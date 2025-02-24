<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  FreeMode,
  Navigation,
  Thumbs,
  EffectFade,
  Pagination,
  Autoplay,
} from "swiper/modules";
import { RouterLink } from "vue-router";
import mainSlidePic1 from "../assets/images/main-slider/slider1/pic1.png";
import slideThumb1 from "../assets/images/main-slider/slider1/thumb/pic1.jpg";
import slideThumb2 from "../assets/images/main-slider/slider1/thumb/pic2.jpg";
import slideThumb3 from "../assets/images/main-slider/slider1/thumb/pic3.jpg";

const carousel = ref([
  {
    img: mainSlidePic1,
    title: "Choosing The",
    title2: "Best",
    title3: "Quality Food",
    subtitle: "High Quality Test Station",
  },
  {
    img: mainSlidePic1,
    title: "Where Food",
    title2: "Meets",
    title3: "Best Passion",
    subtitle: "The Best Food Stations",
  },
  {
    img: mainSlidePic1,
    title: "Delicious Eats",
    title2: " And ",
    title3: "Tasty Drinks",
    subtitle: "Exploring the Delicious World",
  },
]);
const carouselThumb = ref([
  { img: slideThumb1 },
  { img: slideThumb2 },
  { img: slideThumb3 },
]);

const modules = [
  FreeMode,
  Navigation,
  Thumbs,
  EffectFade,
  Pagination,
  Autoplay,
];
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
</script>

<template>
  <div class="main-bnr-one">
    <div class="slider-pagination">
      <div class="main-button-prev"><i class="icon-arrow-up"></i></div>
      <div class="main-slider-pagination"></div>
      <div class="main-button-next"><i class="icon-arrow-down"></i></div>
    </div>
    <div class="main-slider-1 swiper">
      <Swiper
        class="swiper-wrapper"
        effect="fade"
        :thumbs="{ swiper: thumbsSwiper }"
        :loop="true"
        :modules="modules"
        :speed="1200"
        :autoplay="{
          delay: 3000,
        }"
        :pagination="{
          el: '.main-slider-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class=${className}>${index + 1}</span>`;
          },
        }"
        :navigation="{
          prevEl: '.main-button-prev',
          nextEl: '.main-button-next',
        }"
      >
        <SwiperSlide
          class="swiper-slide"
          v-for="(item, ind) in carousel"
          :key="ind"
        >
          <div class="banner-inner">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-xl-7 col-lg-7 col-md-7">
                  <div class="banner-content">
                    <span class="sub-title wow fadeInUp"
                      >{{ item.subtitle }}
                    </span>
                    <h1 class="title wow fadeInUp">
                      {{ item.title }}<br />
                      {{ item.title2
                      }}<span class="text-primary">{{ item.title3 }}</span>
                    </h1>
                    <p class="wow fadeInUp">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <div
                      class="banner-btn d-flex align-items-center wow fadeInUp"
                    >
                      <RouterLink
                        to="/contact-us"
                        class="btn btn-primary btn-md shadow-primary m-r30 btn-hover-1"
                        ><span>Book a Table</span></RouterLink
                      >
                      <RouterLink
                        to="/about-us"
                        class="btn btn-outline-primary btn-md shadow-primary btn-hover-1"
                        ><span>View More</span></RouterLink
                      >
                    </div>
                  </div>
                </div>
                <div class="col-xl-5 col-lg-5 col-md-5">
                  <div class="banner-media wow fadeInRight">
                    <img :src="item.img" alt="/" />
                  </div>
                </div>
              </div>
            </div>

            <img
              src="../assets/images/main-slider/slider1/img3.png"
              class="img1"
              alt="/"
            />
            <img
              src="../assets/images/main-slider/slider1/img1.png"
              class="img2"
              alt="/"
            />
            <img
              src="../assets/images/main-slider/slider1/img2.png"
              class="img3"
              alt="/"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="container">
      <div class="main-thumb1-area swiper-btn-lr wow fadeInUp">
        <div class="swiper main-thumb1">
          <Swiper
            class="swiper-wrapper"
            :modules="modules"
            :slides-per-view="2"
            :loop="true"
            @swiper="setThumbsSwiper"
            :navigation="{
              prevEl: '.btn-prev-1',
              nextEl: '.btn-next-1',
            }"
          >
            <SwiperSlide
              class="swiper-slide"
              v-for="(thumb, index) in carouselThumb"
              :key="index"
            >
              <div class="food-card">
                <div class="dz-media">
                  <img :src="thumb.img" alt="/" />
                </div>
                <div class="dz-content">
                  <h5 class="title">BreakFast</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="thumb-button-prev btn-prev-1">
          <i class="fa-solid fa-angle-left"></i>
        </div>
        <div class="thumb-button-next btn-next-1">
          <i class="fa-solid fa-angle-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>
